import { useState } from 'react'
import { ExternalIcon } from './Icons'
import RecommenderSketch from './RecommenderSketch'

// Desktop screenshot inside a browser frame. On hover or keyboard focus the
// screenshot glides to the bottom of the page, at a speed that suits its length.
function BrowserPreview({ project }) {
  const [duration, setDuration] = useState(4)
  const live = project.links.find((l) => l.label === 'Visit site')

  const handleLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.currentTarget
    const screens = naturalHeight / (naturalWidth * 0.625)
    setDuration(Math.min(10, Math.max(2, screens * 1.1)))
  }

  const Frame = live ? 'a' : 'div'
  const frameProps = live
    ? { href: live.href, target: '_blank', rel: 'noreferrer', 'aria-label': `Open the live ${project.name} site in a new tab` }
    : {}

  return (
    <div className="preview">
      <Frame className="browser" {...frameProps}>
        <span className="browser-bar" aria-hidden="true">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="browser-url">{project.url}</span>
        </span>
        <span className="browser-view" style={{ '--scroll-time': `${duration}s` }}>
          <img
            src={project.desktop}
            alt={`Desktop screenshot of the ${project.name} website`}
            loading="lazy"
            onLoad={handleLoad}
          />
        </span>
      </Frame>

      {project.mobile && (
        <div className="phone" aria-hidden="true">
          <img src={project.mobile} alt="" loading="lazy" />
        </div>
      )}
    </div>
  )
}

function ProjectCard({ project, flip }) {
  return (
    <article className={`project ${flip ? 'is-flipped' : ''}`} aria-labelledby={`${project.id}-title`}>
      <div className="project-media">
        {project.sketch ? <RecommenderSketch /> : <BrowserPreview project={project} />}
        <p className="preview-hint">
          {project.sketch ? (
            'Runs locally with its own API server, so this is a sketch of the interface.'
          ) : (
            <>
              <span className="hint-hover">Hover or tab to the preview to scroll the page.</span>
              <span className="hint-touch">Scroll inside the preview to see the whole page.</span>
            </>
          )}
        </p>
      </div>

      <div className="project-body">
        <h3 className="project-name" id={`${project.id}-title`}>{project.name}</h3>
        <p className="project-kind">{project.kind}</p>
        <p className="project-summary">{project.summary}</p>

        <h4 className="project-subhead">What I built</h4>
        <ul className="project-built">
          {project.built.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <ul className="project-stack" aria-label="Built with">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`project-link ${i === 0 ? 'is-primary' : ''}`}
            >
              {l.label}
              <ExternalIcon />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

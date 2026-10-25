import { useState } from 'react'
import { filters, projects } from '../data/content'
import ProjectCard from './ProjectCard'
import './Work.css'

function Work() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'all' ? projects : projects.filter((p) => p.group === filter)

  return (
    <section className="section work" id="work">
      <div className="wrap">
        <div className="work-head">
          <div>
            <h2 className="section-title">Selected work</h2>
            <p className="section-lede">
              Live websites for real clients, plus products and builds. Each one says what I built
              and links to the live site. Hover a preview to scroll through the whole page.
            </p>
          </div>

          <div className="work-filters" role="group" aria-label="Filter projects">
            {filters.map((f) => {
              const count = f.id === 'all' ? projects.length : projects.filter((p) => p.group === f.id).length
              return (
                <button
                  key={f.id}
                  className="work-filter"
                  aria-pressed={filter === f.id}
                  onClick={() => setFilter(f.id)}
                >
                  {f.label}
                  <span className="work-filter-count">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        <p className="visually-hidden" aria-live="polite">
          Showing {shown.length} projects
        </p>

        <div className="work-list">
          {shown.map((project, i) => (
            <ProjectCard key={project.id} project={project} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

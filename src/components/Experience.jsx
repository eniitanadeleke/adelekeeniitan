import { certifications, education, experience } from '../data/content'
import './Experience.css'

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="wrap">
        <h2 className="section-title">Experience</h2>

        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline-item" key={job.company}>
              <p className="timeline-period">{job.period}</p>
              <div className="timeline-body">
                <h3 className="timeline-role">
                  {job.role}
                  <span className="timeline-company">{job.company}</span>
                </h3>
                <ul className="timeline-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="learning">
          <div>
            <h3 className="learning-title">Education</h3>
            <ul className="learning-list">
              {education.map((e) => (
                <li key={e.title}>
                  <span className="learning-name">{e.title}</span>
                  <span className="learning-meta">
                    {e.where}, {e.when.toLowerCase()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="learning-title">Certifications</h3>
            <ul className="learning-list">
              {certifications.map((c) => (
                <li key={c.title}>
                  <span className="learning-name">{c.title}</span>
                  <span className="learning-meta">{c.where}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

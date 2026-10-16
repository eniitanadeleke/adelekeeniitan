import { skills } from '../data/content'
import './About.css'

function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div className="about-text">
          <h2 className="section-title">About me</h2>
          <p>
            I’m a frontend developer based in Ibadan. I came into tech from a sociology degree, and
            that background still shapes how I work: I start with who will use a page and what they
            came to do, then build the interface around that.
          </p>
          <p>
            Since 2021 I’ve built React interfaces for client projects, first at Lufemos Consults
            and now at Tiva Creative, where I build, refactor and QA client websites in React,
            Next.js and Tailwind CSS. I write test cases, reproduce bugs and check fixes before
            anything ships, because a site that breaks on someone’s phone isn’t finished.
          </p>
          <p>
            I use GitHub Copilot and Claude day to day for debugging and refactoring, and I check
            what they produce against the brief. I’m also completing the Tech4Dev Women Techsters
            software development fellowship.
          </p>
        </div>

        <div className="about-skills">
          <h3 className="about-skills-title">What I work with</h3>
          <dl>
            {skills.map((s) => (
              <div className="skill-row" key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default About

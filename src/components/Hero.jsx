import { profile } from '../data/content'
import Portrait from './Portrait'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <div className="hero-text">
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-role">Frontend Developer working in React, Next.js and TypeScript</p>
          <p className="hero-intro">
            I build and test responsive web applications for real businesses. Seven client and product
            sites live, from a Next.js giving platform to an HR consulting website with full technical SEO.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-solid">See my work</a>
            <a href={profile.cv} className="btn btn-line" download>Download CV</a>
          </div>
          <ul className="hero-facts">
            <li>
              <span className="hero-fact-label">Now</span>
              {profile.now}
            </li>
            <li>
              <span className="hero-fact-label">Based in</span>
              {profile.location}, working remotely
            </li>
            <li>
              <span className="hero-fact-label">Open to</span>
              Frontend roles, contracts and code review work
            </li>
          </ul>
        </div>

        <Portrait className="hero-portrait" />
      </div>
    </section>
  )
}

export default Hero

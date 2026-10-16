import { profile } from '../data/content'
import './Hero.css'

// A tile of four motifs in the spirit of adire eleko cloth, where a square grid
// holds a different hand-drawn mark in each cell.
function AdirePattern() {
  return (
    <svg className="hero-pattern" aria-hidden="true">
      <defs>
        <pattern id="adire" width="120" height="120" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            {/* cell 1: concentric rings */}
            <circle cx="30" cy="30" r="22" />
            <circle cx="30" cy="30" r="14" />
            <circle cx="30" cy="30" r="6" />
            {/* cell 2: parallel diagonals */}
            <path d="M64 26 86 4M70 38l38-34M76 50l38-38M90 56l26-26" />
            {/* cell 3: four-petal leaf */}
            <path d="M30 66c8 8 8 16 0 24-8-8-8-16 0-24ZM30 114c-8-8-8-16 0-24 8 8 8 16 0 24ZM6 90c8-8 16-8 24 0-8 8-16 8-24 0ZM54 90c-8 8-16 8-24 0 8-8 16-8 24 0Z" />
            {/* frame lines between cells */}
            <path d="M60 0v120M0 60h120" strokeDasharray="2 6" />
          </g>
          {/* cell 4: dot grid */}
          <g fill="currentColor">
            {[74, 90, 106].map((x) => [74, 90, 106].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" />))}
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#adire)" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <AdirePattern />
      <div className="wrap hero-inner">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-intro">
          Frontend developer in Ibadan. I build responsive React and Next.js websites for
          businesses, ministries and education teams, and I test them properly before they go live.
        </p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-solid">See my work</a>
          <a href="#contact" className="btn btn-line">Get in touch</a>
        </div>
        <p className="hero-now">
          <span className="hero-now-dot" aria-hidden="true" />
          Currently {profile.now}
        </p>
      </div>
    </section>
  )
}

export default Hero

import { profile } from '../data/content'
import './Portrait.css'

// Shows the photo set in content.js. Until one is added, shows a framed
// placeholder with initials so the layout stays the same.
function Portrait({ className = '' }) {
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <figure className={`portrait ${className}`}>
      {profile.photo ? (
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
      ) : (
        <span className="portrait-placeholder" aria-hidden="true">
          {initials}
        </span>
      )}
    </figure>
  )
}

export default Portrait

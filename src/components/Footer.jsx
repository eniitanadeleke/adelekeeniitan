import { profile } from '../data/content'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. Designed and built in React.</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  )
}

export default Footer

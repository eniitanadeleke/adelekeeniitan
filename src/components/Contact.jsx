import { useState } from 'react'
import { profile } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')

    try {
      const response = await fetch(profile.formspree, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-intro">
          <h2 className="section-title">Let’s work together</h2>
          <p>
            I’m open to frontend roles, contract work and website projects. Tell me what you’re
            building and I’ll get back to you by email.
          </p>
          <ul className="contact-direct">
            <li>
              <a href={`mailto:${profile.email}`}>
                <MailIcon /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" autoComplete="email" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" name="subject" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6" name="message" required />
          </div>

          <div className="form-foot">
            <button type="submit" className="btn btn-solid" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending message…' : 'Send message'}
            </button>
            <p className={`form-status is-${status}`} role="status">
              {status === 'sent' && 'Message sent. I’ll reply by email soon.'}
              {status === 'error' && (
                <>
                  The message didn’t send. Check your connection and try again, or email{' '}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

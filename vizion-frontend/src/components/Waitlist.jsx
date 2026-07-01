import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    // NOTE: this is a static front end. Wire this up to a real service
    // (Formspree, Mailchimp, a Google Sheet via Apps Script, etc.) before
    // launch. See the README for suggestions.
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="waitlist">
      <h2 className="section-heading center">Be the first to try Vizion.</h2>
      <p className="waitlist-sub">
        No spam, no sharing your address. Just a note when early units are ready.
      </p>

      {submitted ? (
        <p className="waitlist-thanks" role="status">
          Thanks &mdash; you're on the list. We'll be in touch.
        </p>
      ) : (
        <form className="waitlist-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="visually-hidden">Email address</label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Join the waitlist</button>
        </form>
      )}
    </section>
  )
}

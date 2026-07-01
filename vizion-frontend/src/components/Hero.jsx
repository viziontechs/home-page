import { useEffect, useState } from 'react'

const CAPTIONS = [
  'Crosswalk signal: walk.',
  'Empty seat, two tables ahead.',
  'Text on the sign reads: Platform 4.',
  'Sarah is approaching from your left.',
  'Coffee cup, edge of the counter, 10 o\u2019clock.',
]

function useTypedTicker(phrases, typeSpeed = 38, holdTime = 1400, deleteSpeed = 18) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[index % phrases.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), holdTime)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, phrases, typeSpeed, holdTime, deleteSpeed])

  return text
}

export default function Hero() {
  const caption = useTypedTicker(CAPTIONS)

  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Vizion Technologies</p>
        <h1>
          The world,
          <br />
          described.
        </h1>
        <p className="hero-sub">
          AI-powered glasses that narrate what's around you in real time \u2014 spoken
          quietly, exactly when it matters. Built for the blind and low-vision
          community, running entirely on the device you wear.
        </p>
        <div className="hero-actions">
          <a href="#waitlist" className="btn btn-primary">Join the waitlist</a>
          <a href="#pillars" className="btn btn-ghost">See how it works</a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <svg viewBox="0 0 320 120" className="glasses-svg" role="img" aria-label="">
          <circle cx="80" cy="60" r="46" fill="none" stroke="var(--ink)" strokeWidth="4" />
          <circle cx="240" cy="60" r="46" fill="none" stroke="var(--ink)" strokeWidth="4" />
          <path d="M126 56 h68" stroke="var(--ink)" strokeWidth="4" fill="none" />
          <path d="M34 56 C 14 50, 8 62, 4 70" stroke="var(--ink)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M286 56 C 306 50, 312 62, 316 70" stroke="var(--ink)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="80" cy="60" r="5" fill="var(--accent)" />
        </svg>
        <div className="ticker" role="status" aria-live="polite">
          <span className="ticker-dot" />
          <span className="ticker-text">{caption}<span className="ticker-caret">|</span></span>
        </div>
      </div>
    </section>
  )
}

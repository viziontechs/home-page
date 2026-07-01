export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          Vizion<span className="nav-logo-dot">.</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#pillars">How it works</a>
          <a href="#compare">Why on-device</a>
          <a href="#pricing">Pricing</a>
          <a href="#team">Team</a>
        </nav>
        <a href="#waitlist" className="btn btn-small">Join the waitlist</a>
      </div>
    </header>
  )
}

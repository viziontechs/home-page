export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="#top" className="nav-logo">
          Vizion<span className="nav-logo-dot">.</span>
        </a>
        <nav aria-label="Footer">
          <a href="#pillars">How it works</a>
          <a href="#compare">Why on-device</a>
          <a href="#pricing">Pricing</a>
          <a href="#team">Team</a>
        </nav>
        <a href="mailto:hello@viziontechs.com">hello@viziontechs.com</a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} Vizion Technologies LLC. All rights reserved.</p>
    </footer>
  )
}

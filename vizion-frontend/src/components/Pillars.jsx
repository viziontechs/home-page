const PILLARS = [
  {
    title: 'See',
    body: "A camera built into the frame reads what's ahead the way a sighted companion would \u2014 signage, obstacles, faces, printed text, the walk signal at the corner.",
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M4 20c4-8 12-12 16-12s12 4 16 12c-4 8-12 12-16 12S8 28 4 20Z" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
        <circle cx="20" cy="20" r="5.5" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: 'Hear',
    body: 'A quiet voice, timed to how you move and what you need to know right now \u2014 not a firehose of description, just the next useful thing.',
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M8 16v8h6l9 7V9l-9 7H8Z" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M28 14a10 10 0 0 1 0 12" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Trust',
    body: 'Every frame is processed on the glasses themselves. Nothing you see is uploaded, streamed, or stored anywhere but on your own device.',
    icon: (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <path d="M20 5 32 10v9c0 9-5.4 14.8-12 17-6.6-2.2-12-8-12-17v-9L20 5Z" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M14.5 20.5l4 4 7-8" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="pillars">
      <p className="eyebrow center">How it works</p>
      <h2 className="section-heading center">Three jobs. One pair of glasses.</h2>
      <div className="pillars-grid">
        {PILLARS.map((p) => (
          <div className="pillar-card" key={p.title}>
            <div className="pillar-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

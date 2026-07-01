export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing-card">
        <p className="eyebrow">Pricing</p>
        <h2 className="section-heading">Independence shouldn't cost a used car.</h2>
        <p>
          Comparable smart glasses on the market today run $3,000&ndash;$4,250.
          Vizion is engineered to launch between <strong>$800 and $999</strong> &mdash;
          because the people who need this most are often the people insurance
          won't cover and budgets won't stretch for.
        </p>
        <div className="price-row">
          <div className="price-box price-box-vizion">
            <span className="price-label">Vizion</span>
            <span className="price-value">$800&ndash;$999</span>
          </div>
          <div className="price-box">
            <span className="price-label">Typical smart glasses</span>
            <span className="price-value muted">$3,000&ndash;$4,250</span>
          </div>
        </div>
      </div>
    </section>
  )
}

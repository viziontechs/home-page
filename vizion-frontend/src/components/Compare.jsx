const ROWS = [
  ['Processes video on-device', 'Yes, always', 'Usually no \u2014 sent to the cloud'],
  ['Works with no internet connection', 'Yes', 'Rarely'],
  ['Designed primarily for blind & low-vision users', 'Yes, from day one', 'Added as a feature later'],
  ['Target price', '$800\u2013$999', '$3,000\u2013$4,250'],
]

export default function Compare() {
  return (
    <section id="compare" className="compare">
      <div className="compare-text">
        <p className="eyebrow">Why on-device</p>
        <h2 className="section-heading">Built for one job, not adapted for it.</h2>
        <p>
          Other smart glasses were designed for sighted people first, with
          accessibility layered on top &mdash; dependent on a phone, an app, and a
          cloud connection that can lag, drop, or simply not be there. Vizion
          started from a different brief: build the glasses a blind or
          low-vision person would design for themselves.
        </p>
      </div>

      <div className="compare-table-wrap">
        <table className="compare-table">
          <caption className="visually-hidden">Vizion compared to typical smart glasses</caption>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Vizion</th>
              <th scope="col">Typical smart glasses</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([label, vizion, other]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td className="cell-vizion">{vizion}</td>
                <td className="cell-other">{other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

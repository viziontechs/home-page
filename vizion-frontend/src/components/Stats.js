import React from 'react';
import './Stats.css';

const stats = [
  { num: '0ms',  label: 'Cloud Latency' },
  { num: '$800', label: 'Target Price'  },
  { num: '$0',   label: 'Monthly Fee'   },
  { num: '24h',  label: 'Data TTL'      },
];

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <span className="stat-num">{s.num}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

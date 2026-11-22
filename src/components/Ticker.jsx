import React from 'react'

const items = [
  'One-time payment — no subscriptions',
  'Works offline — no internet needed',
  'Student pricing available',
  'Private local storage',
  'No cloud. No fees.',
  'Your files stay yours',
  'USB drive mode included',
  'Open source firmware'
]

export default function Ticker() {
  return (
    <div style={{
      background: 'var(--blue)',
      color: 'var(--cream)',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      borderBottom: '2px solid var(--border)'
    }}>
      <div className="marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item" style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 600,
            fontSize: '14px'
          }}>
            {item} ·
          </span>
        ))}
      </div>
    </div>
  )
}

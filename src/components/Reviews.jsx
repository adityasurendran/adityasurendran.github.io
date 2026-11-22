import React from 'react'
import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const reviews = [
  {
    text: 'Replaced my €300 NAS with this €50 device. Does everything I need and fits in my pocket.',
    author: 'Declan, Athlone',
    color: 'var(--primary)',
    rotation: -2
  },
  {
    text: 'After the AT&T breach, I moved all my files off the cloud. VaultDrive was the easiest switch.',
    author: 'Aoife, Cork',
    color: 'var(--pink)',
    rotation: 2
  },
  {
    text: 'Set up in 2 minutes. My whole family accesses photos from any device. No monthly fees ever.',
    author: 'Sean, Galway',
    color: 'var(--blue)',
    rotation: -1
  }
]

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            People <span style={{ color: 'var(--blue)' }}>love it</span>
          </motion.h2>
        </div>

        <div className="grid-auto" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: review.color,
                border: '2px solid var(--border)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '4px 4px 0 var(--border)',
                transform: `rotate(${review.rotation}deg)`,
                position: 'relative'
              }}
            >
              {/* Speech bubble tail */}
              <div style={{
                position: 'absolute',
                bottom: '-12px',
                left: '30px',
                width: '24px',
                height: '24px',
                background: review.color,
                border: '2px solid var(--border)',
                borderTop: 'none',
                borderRight: 'none',
                transform: 'rotate(-45deg)'
              }} />
              
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="var(--foreground)" color="var(--foreground)" />
                ))}
              </div>
              
              <p style={{
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--foreground)',
                marginBottom: '16px',
                lineHeight: 1.5
              }}>
                "{review.text}"
              </p>
              
              <div style={{
                fontWeight: 800,
                color: 'var(--foreground)',
                fontSize: '14px'
              }}>
                — {review.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

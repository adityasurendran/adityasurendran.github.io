import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Cookie, X, Shield } from 'lucide-react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookiesAccepted')) {
      setTimeout(() => setShow(true), 2000)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setShow(false)
  }

  const reject = () => {
    localStorage.setItem('cookiesAccepted', 'rejected')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{
            position: 'fixed',
            bottom: '16px',
            left: '16px',
            right: '16px',
            maxWidth: '500px',
            margin: '0 auto',
            background: 'var(--cream)',
            border: '3px solid var(--border)',
            borderRadius: '16px',
            padding: '20px',
            zIndex: 1000,
            boxShadow: '6px 6px 0 var(--border)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--yellow)',
              border: '2px solid var(--border)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Cookie size={20} color="var(--foreground)" />
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '4px' }}>
                We use cookies
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.4 }}>
                We use essential cookies to make this site work. We don't track you or sell your data. 
                See our <a href="/privacy" style={{ color: 'var(--blue)' }}>Privacy Policy</a>.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={accept}
              className="btn btn-green"
              style={{ flex: 1, padding: '10px 16px', fontSize: '14px' }}
            >
              Accept
            </button>
            <button
              onClick={reject}
              className="btn btn-secondary"
              style={{ flex: 1, padding: '10px 16px', fontSize: '14px' }}
            >
              Reject
            </button>
          </div>

          <p style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '8px', textAlign: 'center' }}>
            Compliant with GDPR & EU ePrivacy Directive
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

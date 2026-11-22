import React from 'react'
import { Lock } from 'lucide-react'
import Wordmark from './Wordmark'

const links = [
  { label: 'Connect', href: '#connect' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'User Guide', href: '/start' },
  { label: 'Firmware', href: '/flash' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--foreground)',
      color: 'var(--cream)',
      paddingTop: '80px',
      paddingBottom: '40px',
      overflow: 'hidden'
    }}>
      <div className="container">
        {/* Giant Wordmark */}
        <div style={{
          textAlign: 'center',
          marginBottom: '48px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Wordmark size={54} />
        </div>

        {/* Links */}
        <div style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {links.map((link) => (
            <a key={link.label} href={link.href} style={{
              color: 'var(--cream)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '15px',
              opacity: 0.8,
              transition: 'opacity 0.15s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.8'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          borderTop: '2px solid rgba(255,255,255,0.2)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            opacity: 0.7
          }}>
            <Lock size={16} />
            <span>© 2026 VaultDrive. Private by design.</span>
          </div>
          
          <div style={{ opacity: 0.7, fontSize: '14px' }}>
            Built for Student Enterprise Ireland 🇮🇪
          </div>
        </div>

        {/* Legal Links */}
        <div style={{
          marginTop: '16px',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          fontSize: '13px',
          opacity: 0.6
        }}>
          <a href="/privacy" style={{ color: 'var(--cream)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: 'var(--cream)', textDecoration: 'none' }}>Terms & Conditions</a>
          <span>GDPR Compliant</span>
          <span>Irish Consumer Law</span>
        </div>
      </div>
    </footer>
  )
}

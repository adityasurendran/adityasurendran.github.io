import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import Wordmark from './Wordmark'

const links = [
  { label: 'Connect', href: '#connect' },
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'User Guide', href: '/start' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '88px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 36px',
        zIndex: 100,
        background: 'transparent'
      }}>
        {/* Wordmark (white) */}
        <a href="#" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}>
          <Wordmark size={24} />
        </a>

        {/* Desktop Links */}
        <div
          className="nav-desktop"
          style={{
            display: 'flex',
            gap: '34px',
            alignItems: 'center'
          }}
        >
          {links.map((link) => (
            <a key={link.label} href={link.href} style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.92)',
              textDecoration: 'none',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.6'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#connect" className="btn desktop-only"
          style={{
            padding: '14px 24px',
            fontSize: '11px',
            background: '#fff',
            color: 'var(--ink)'
          }}>
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-only"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{
            background: 'transparent',
            border: 'none',
            padding: '8px',
            cursor: 'pointer',
            display: 'none'
          }}
        >
          <Menu size={26} color="#fff" strokeWidth={2} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'linear-gradient(160deg, #C2410C 0%, #6E1F08 100%)',
              zIndex: 200,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '28px'
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute',
                top: '22px',
                right: '22px',
                background: 'transparent',
                border: 'none',
                padding: '8px',
                cursor: 'pointer'
              }}
            >
              <X size={28} color="#fff" strokeWidth={2} />
            </button>

            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 500,
                  fontSize: '34px',
                  letterSpacing: '-0.02em',
                  color: '#fff',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#connect"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="btn"
              style={{
                marginTop: '18px',
                background: '#fff',
                color: 'var(--ink)',
                width: 'auto'
              }}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex; }
        .desktop-only { display: inline-flex; }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </>
  )
}

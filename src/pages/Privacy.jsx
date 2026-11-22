import React from 'react'
import { motion } from 'motion/react'
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react'

const sections = [
  {
    icon: Shield,
    title: '1. Who We Are',
    content: 'VaultDrive is an independent Irish student enterprise based at Athlone Community College, Retreat Road, Athlone, Co. Westmeath (N37 Y985). We sell private, local file storage devices. We are the data controller for any personal data you provide through this website or device.'
  },
  {
    icon: Database,
    title: '2. What Data We Collect',
    content: 'We collect minimal data: WiFi credentials (SSID and password) stored locally on your device only. This website uses essential cookies only. We do NOT collect emails, names, or payment details through this site. Purchases are handled by third-party retailers.'
  },
  {
    icon: Lock,
    title: '3. How We Use Your Data',
    content: 'WiFi credentials are stored on your VaultDrive device\'s local flash memory. They never leave your device. We have no access to your files or credentials. Your data stays on your hardware — we literally cannot see it.'
  },
  {
    icon: Eye,
    title: '4. Cookies',
    content: 'This website uses only essential cookies for basic functionality (remembering your cookie preference). We do NOT use tracking cookies, advertising cookies, or analytics cookies. You can reject all optional cookies via the cookie banner.'
  },
  {
    icon: UserCheck,
    title: '5. Your Rights (GDPR)',
    content: 'Under GDPR, you have the right to access, rectify, and erase your personal data. Since we store no personal data on our servers, there is nothing to erase. WiFi credentials stored on your device can be cleared by holding the BOOT button and reconfiguring.'
  },
  {
    icon: FileText,
    title: '6. Under-18 Data Privacy',
    content: 'VaultDrive is suitable for users of all ages. No personal data is collected from minors through this website. WiFi credentials entered by minors are stored only on their local device. Parental guidance is recommended for initial setup. We do not knowingly collect data from children under 16.'
  }
]

export default function Privacy() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Header */}
      <div style={{
        background: 'var(--yellow)',
        borderBottom: '3px solid var(--border)',
        padding: '20px 32px'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/wordmark-dark.svg" alt="VaultDrive" style={{ height: '32px' }} />
          <a href="/" className="btn btn-white" style={{ padding: '8px 16px', fontSize: '14px' }}>
            ← Back
          </a>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '36px', marginBottom: '8px' }}
        >
          Privacy Policy
        </motion.h1>
        <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
          Last updated: October 2026 • Compliant with GDPR & Irish Data Protection Act 2018
        </p>

        {/* TLDR */}
        <div className="card" style={{ marginBottom: '32px', borderColor: 'var(--green)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--green)' }}>
            🔑 The Short Version
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            VaultDrive stores your files on YOUR device, not our servers. We collect no personal data. 
            WiFi credentials stay on your device. No tracking, no ads, no data sales. Your privacy is 
            the product.
          </p>
        </div>

        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{ marginBottom: '16px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'var(--blue)',
                border: '2px solid var(--border)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <section.icon size={20} color="white" />
              </div>
              <h2 style={{ fontSize: '18px' }}>{section.title}</h2>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.6 }}>
              {section.content}
            </p>
          </motion.div>
        ))}

        {/* Contact */}
        <div className="card" style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>Questions?</h2>
          <p style={{ color: 'var(--muted)' }}>
            Contact us at: <a href="mailto:privacy@vaultdrive.ie" style={{ color: 'var(--blue)' }}>privacy@vaultdrive.ie</a>
          </p>
        </div>
      </div>
    </div>
  )
}

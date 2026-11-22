import React from 'react'
import { motion } from 'motion/react'
import { FileText, Scale, AlertTriangle, CreditCard, Wrench, Gavel } from 'lucide-react'

const sections = [
  {
    icon: FileText,
    title: '1. About These Terms',
    content: 'These terms govern your use of VaultDrive products and services. By purchasing or using VaultDrive, you agree to these terms. VaultDrive is a product of an Irish student enterprise operating under the Student Enterprise Awards programme.'
  },
  {
    icon: Scale,
    title: '2. Your License',
    content: 'When you purchase VaultDrive, you receive a personal, non-transferable license to use the device and its software. You may use it for personal, educational, or commercial purposes. You may not reverse-engineer, resell, or redistribute the firmware.'
  },
  {
    icon: AlertTriangle,
    title: '3. Your Responsibilities',
    content: 'You are responsible for: securing your WiFi network; protecting your VaultDrive password; backing up important files; ensuring you have the right to store any files on the device. VaultDrive is not liable for data loss, unauthorized access due to weak passwords, or damage from misuse.'
  },
  {
    icon: CreditCard,
    title: '4. Purchases & Refunds',
    content: 'Products are sold through authorized retailers. Under EU consumer law, you have a 14-day right of return for online purchases. Faulty products are covered by a 12-month warranty. Contact the retailer for returns and refunds.'
  },
  {
    icon: Wrench,
    title: '5. Technical Support',
    content: 'VaultDrive is provided "as is" with no guarantee of uninterrupted service. Remote access features depend on third-party services (Cloudflare) that may change or discontinue. We provide support via email during business hours but cannot guarantee response times.'
  },
  {
    icon: Gavel,
    title: '6. Governing Law',
    content: 'These terms are governed by the laws of Ireland. Any disputes will be resolved in the courts of Ireland. As a student enterprise, we operate under Irish consumer protection regulations and EU directives including the Digital Content Directive 2019/770.'
  },
  {
    icon: AlertTriangle,
    title: '7. Under-18 Users',
    content: 'VaultDrive may be used by minors with parental consent. Parents/guardians are responsible for supervising minors\' use of the device. We do not knowingly collect data from children under 16. Minors should not share WiFi passwords or VaultDrive access with strangers.'
  },
  {
    icon: FileText,
    title: '8. Changes to Terms',
    content: 'We may update these terms periodically. Continued use of VaultDrive after changes constitutes acceptance. Major changes will be communicated via the VaultDrive website. These terms were last updated in October 2026.'
  }
]

export default function Terms() {
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
          Terms & Conditions
        </motion.h1>
        <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
          Last updated: October 2026 • Irish Consumer Law & EU Digital Content Directive
        </p>

        {/* TLDR */}
        <div className="card" style={{ marginBottom: '32px', borderColor: 'var(--blue)' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--blue)' }}>
            📋 The Short Version
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.6 }}>
            Buy VaultDrive, use it however you want personally. Don't steal our code. 
            Keep your password safe. We'll fix faulty devices. Irish law applies.
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
                background: 'var(--yellow)',
                border: '2px solid var(--border)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <section.icon size={20} color="var(--foreground)" />
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
            Contact us at: <a href="mailto:legal@vaultdrive.ie" style={{ color: 'var(--blue)' }}>legal@vaultdrive.ie</a>
          </p>
        </div>
      </div>
    </div>
  )
}

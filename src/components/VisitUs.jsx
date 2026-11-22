import React from 'react'
import { motion } from 'motion/react'
import { MapPin, Clock, GraduationCap, Check, X } from 'lucide-react'

export default function VisitUs() {
  return (
    <section className="section-yellow wave-top section-padding" style={{
      padding: '120px 0 80px',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why <span style={{ color: 'var(--blue)' }}>VaultDrive?</span>
          </motion.h2>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ marginBottom: '32px', overflow: 'hidden' }}
        >
          <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>VaultDrive vs The Alternatives</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 8px' }}>Feature</th>
                  <th style={{ textAlign: 'center', padding: '12px 8px', color: 'var(--blue)' }}>VaultDrive</th>
                  <th style={{ textAlign: 'center', padding: '12px 8px' }}>NAS Drive</th>
                  <th style={{ textAlign: 'center', padding: '12px 8px' }}>Cloud Storage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price', '€50 once', '€250+', '€144/year'],
                  ['Setup time', '2 minutes', '30+ minutes', 'Instant'],
                  ['Size', 'Pocket', 'Shoebox', 'N/A'],
                  ['Monthly fees', 'None', 'None', '€10-15/month'],
                  ['Works offline', '✓', 'Partial', '✗'],
                  ['No internet needed', '✓', '✗', '✗'],
                  ['Breach-proof', '✓', 'Partial', '✗'],
                  ['USB drive mode', '✓', '✗', '✗'],
                ].map(([feature, vault, nas, cloud], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 8px', fontWeight: 600 }}>{feature}</td>
                    <td style={{ textAlign: 'center', padding: '10px 8px', color: 'var(--green)', fontWeight: 700 }}>{vault}</td>
                    <td style={{ textAlign: 'center', padding: '10px 8px', color: 'var(--muted)' }}>{nas}</td>
                    <td style={{ textAlign: 'center', padding: '10px 8px', color: 'var(--muted)' }}>{cloud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Security Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ marginBottom: '32px', borderColor: 'var(--pink)' }}
        >
          <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--pink)' }}>
            🔒 Why Security Matters
          </h3>
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.6 }}>
            In 2024, AT&T lost data on <strong style={{ color: 'var(--text)' }}>73 million customers</strong>. 
            Microsoft, Dell, and CrowdStrike all suffered major breaches. iCloud and Google scan user files. 
            The most secure cloud is the one you own — and that's VaultDrive.
          </p>
        </motion.div>

        {/* Contact */}
        <div className="grid-2" style={{ alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: '24px' }}
            >
              Get VaultDrive <span style={{ color: 'var(--blue)' }}>today.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.8 }}
            >
              €50 one-time. No subscriptions. No cloud. Your files stay yours forever.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
                className="btn btn-blue" style={{ fontSize: '16px', padding: '16px 32px' }}>
                🛒 Order Online — €50
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{ padding: '32px' }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Contact Us</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <MapPin size={24} color="var(--blue)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 800, marginBottom: '4px' }}>Address</div>
                  <div style={{ color: 'var(--muted)' }}>
                    Athlone Community College<br />
                    Retreat Road, Athlone<br />
                    Co. Westmeath, N37 Y985
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Clock size={24} color="var(--green)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 800, marginBottom: '4px' }}>Support</div>
                  <div style={{ color: 'var(--muted)' }}>Mon–Fri 9am–6pm</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <GraduationCap size={24} color="var(--pink)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontWeight: 800, marginBottom: '4px' }}>Student Price</div>
                  <div style={{ color: 'var(--muted)' }}>€40 with valid student ID</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Under-18 Disclaimer */}
      <div className="container" style={{ marginTop: '32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ borderColor: 'var(--yellow)' }}
        >
          <h3 style={{ fontSize: '16px', marginBottom: '8px', color: 'var(--yellow)' }}>
            ⚠️ Under-18 Users & Data Privacy
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
            VaultDrive is suitable for users of all ages. No personal data is collected from minors 
            through this website or device. WiFi credentials entered during setup are stored only 
            on your local device and never transmitted to us. Parental guidance is recommended for 
            initial setup. We do not knowingly collect data from children under 16 in compliance 
            with GDPR Article 8 and the Irish Data Protection Act 2018.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

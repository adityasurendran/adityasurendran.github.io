import React from 'react'
import { motion } from 'motion/react'
import { Wifi, Usb, Globe, Shield } from 'lucide-react'

const steps = [
  {
    icon: Wifi,
    title: 'Join Setup WiFi',
    description: 'On your phone, connect to "VaultDrive-Setup" (password: vault1234)',
    color: 'var(--blue)'
  },
  {
    icon: Globe,
    title: 'Open Config Page',
    description: 'Open 192.168.4.1 in your browser',
    color: 'var(--primary)'
  },
  {
    icon: Shield,
    title: 'Enter WiFi Details',
    description: 'Type your home WiFi name and password, then save',
    color: 'var(--green)'
  },
  {
    icon: Usb,
    title: 'Access Files',
    description: 'VaultDrive reboots and joins your WiFi. Access from any device!',
    color: 'var(--pink)'
  }
]

export default function Connect() {
  return (
    <section id="connect" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '12px' }}
          >
            Plug in. Connect. <span style={{ color: 'var(--blue)' }}>Done.</span>
          </motion.h2>
          <p style={{ color: 'var(--muted)', fontSize: '18px' }}>
            Set up your VaultDrive in under 2 minutes — no technical skills needed
          </p>
        </div>

        <div className="grid-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card"
              style={{ padding: '24px' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: step.color,
                  border: '2px solid var(--border)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '3px 3px 0 var(--border)'
                }}>
                  <step.icon size={22} color="white" strokeWidth={2.5} />
                </div>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: 'var(--primary)',
                  border: '2px solid var(--border)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '14px'
                }}>
                  {i + 1}
                </div>
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* USB Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{
            marginTop: '32px',
            padding: '24px',
            background: 'var(--primary)',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--foreground)' }}>
            💡 Need to change WiFi later?
          </h3>
          <p style={{ color: 'var(--foreground)', fontSize: '16px' }}>
            Hold the BOOT button while plugging in — VaultDrive enters setup mode again. 
            Or use USB Drive Mode to access files as a flash drive!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

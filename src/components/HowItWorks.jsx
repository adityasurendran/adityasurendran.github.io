import React from 'react'
import { motion } from 'motion/react'
import { Plug, Wifi, FolderOpen, Globe } from 'lucide-react'

const steps = [
  {
    icon: Plug,
    title: 'Plug it in',
    description: 'Connect VaultDrive to any USB wall charger',
    color: 'var(--primary)'
  },
  {
    icon: Wifi,
    title: 'Connect to setup WiFi',
    description: 'Join "VaultDrive-Setup" network on your phone',
    color: 'var(--blue)'
  },
  {
    icon: FolderOpen,
    title: 'Set up WiFi & browse',
    description: 'Open 192.168.4.1, enter your WiFi, done!',
    color: 'var(--green)'
  },
  {
    icon: Globe,
    title: 'Access from anywhere',
    description: 'Optional: set up remote access via Cloudflare',
    color: 'var(--pink)'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="section-blue wave-top wave-bottom" style={{
      padding: '120px 0',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--cream)' }}
          >
            Set up in <span style={{ color: 'var(--primary)' }}>2 minutes</span>
          </motion.h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '18px', marginTop: '12px' }}>
            No technical skills needed — just plug in and go
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
              style={{
                background: 'var(--cream)',
                border: '2px solid var(--border)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '4px 4px 0 var(--border)'
              }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: step.color,
                border: '2px solid var(--border)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '3px 3px 0 var(--border)'
              }}>
                <step.icon size={26} color="white" strokeWidth={2.5} />
              </div>
              
              <div style={{
                display: 'inline-block',
                background: 'var(--primary)',
                border: '2px solid var(--border)',
                borderRadius: '8px',
                padding: '4px 12px',
                fontWeight: 800,
                fontSize: '14px',
                marginBottom: '12px',
                boxShadow: '2px 2px 0 var(--border)'
              }}>
                Step {i + 1}
              </div>
              
              <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--foreground)' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '16px' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* USB Mode Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '40px',
            padding: '20px',
            background: 'var(--primary)',
            border: '2px solid var(--border)',
            borderRadius: '16px',
            boxShadow: '4px 4px 0 var(--border)',
            textAlign: 'center'
          }}
        >
          <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--foreground)' }}>
            💡 Pro Tip: USB Drive Mode
          </h3>
          <p style={{ color: 'var(--foreground)', fontSize: '16px' }}>
            Hold the BOOT button while plugging into any computer — VaultDrive becomes a USB flash drive. Drag and drop files directly!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

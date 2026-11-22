import React from 'react'
import { motion } from 'motion/react'
import { FolderOpen, Globe, RefreshCw, Lock, Usb, CloudOff } from 'lucide-react'

const features = [
  {
    icon: FolderOpen,
    title: 'File Browser',
    description: 'Browse, upload, download, and preview files from any device on your network',
    color: 'var(--blue)'
  },
  {
    icon: Globe,
    title: 'Remote Access',
    description: 'Access your files from anywhere via Cloudflare tunnel — no port forwarding needed',
    color: 'var(--green)'
  },
  {
    icon: Usb,
    title: 'USB Drive Mode',
    description: 'Hold BOOT button and plug into any PC — works as a regular flash drive',
    color: 'var(--primary)'
  },
  {
    icon: Lock,
    title: 'Private & Secure',
    description: 'Your files never touch a cloud server. No account breaches, no tracking',
    color: 'var(--pink)'
  },
  {
    icon: RefreshCw,
    title: 'OTA Updates',
    description: 'Update firmware wirelessly over your network',
    color: 'var(--yellow)'
  },
  {
    icon: CloudOff,
    title: 'Works Offline',
    description: 'No internet needed for local access. Full functionality without any cloud',
    color: 'var(--green)'
  }
]

export default function Features({ isConnected, deviceIP }) {
  return (
    <section id="features" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everything you need. <span style={{ color: 'var(--blue)' }}>Nothing you don't.</span>
          </motion.h2>
          <p style={{ color: 'var(--muted)', fontSize: '18px', maxWidth: '600px', margin: '12px auto 0' }}>
            VaultDrive replaces expensive cloud storage with a one-time €50 device
          </p>
        </div>

        <div className="grid-auto">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card"
              style={{ padding: '28px' }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                background: feature.color,
                border: '2px solid var(--border)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '3px 3px 0 var(--border)'
              }}>
                <feature.icon size={26} color="white" strokeWidth={2.5} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '16px' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="btn-group"
          style={{ marginTop: '48px' }}
        >
          <a
            href={deviceIP ? `http://${deviceIP}` : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-blue"
            style={{ opacity: isConnected ? 1 : 0.5, pointerEvents: isConnected ? 'auto' : 'none' }}
          >
            📁 Open File Manager
          </a>
          <a
            href="https://render.com/deploy?repo=https://github.com/HamzaYslmn/esp32-tunnel"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-green"
          >
            🌐 Setup Remote Access
          </a>
        </motion.div>
      </div>
    </section>
  )
}

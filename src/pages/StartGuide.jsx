import React from 'react'
import { motion } from 'motion/react'
import { ArrowRight, Wifi, Usb, FolderOpen, Shield, Key, AlertTriangle, Phone } from 'lucide-react'

const sections = [
  {
    icon: Wifi,
    title: 'WiFi Setup',
    color: 'var(--blue)',
    content: [
      'Insert the microSD card into VaultDrive',
      'Connect USB-C to a wall charger',
      'Wait 10 seconds for boot',
      'On your phone, join WiFi: VaultDrive-Setup (password: vault1234)',
      'Open 192.168.4.1 in your browser',
      'Enter your home WiFi name and password',
      'Click Save & Reboot',
      'VaultDrive reboots and joins your WiFi (10-20 seconds)'
    ]
  },
  {
    icon: FolderOpen,
    title: 'Accessing Files',
    color: 'var(--green)',
    content: [
      'On any device connected to your WiFi, open a browser',
      'Go to the IP shown on the TFT display (e.g. 192.168.1.100)',
      'Or try: http://vaultdrive.local',
      'Log in with your credentials (admin/admin123 to start)',
      'Browse folders, download files, upload new ones',
      '⚠️ Change default passwords after first login!'
    ]
  },
  {
    icon: Usb,
    title: 'USB Drive Mode',
    color: 'var(--primary)',
    content: [
      'Hold the BOOT button on VaultDrive',
      'While holding BOOT, plug into your computer',
      'Keep holding for 2 seconds, then release',
      'TFT shows "USB DRIVE MODE"',
      'Your computer shows "VaultDrive" as a USB drive',
      'Drag and drop files like any flash drive',
      'Press RESET to exit and reboot to WiFi mode'
    ]
  },
  {
    icon: Key,
    title: 'Login Accounts',
    color: 'var(--pink)',
    content: [
      'Admin: admin / admin123 — Full control (change passwords!)',
      'User: user / user123 — Upload and download',
      'Guest: guest / guest123 — View and download only',
      'Change passwords: WiFi Settings → User Management',
      'Sessions expire after 1 hour for security'
    ]
  },
  {
    icon: Shield,
    title: 'File Encryption',
    color: 'var(--purple)',
    content: [
      'Find the file you want to encrypt',
      'Click the 🔒 button next to it',
      'Enter a strong password',
      'File is encrypted with AES-256',
      'Only someone with the password can decrypt',
      'Encrypted files show .enc extension'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Troubleshooting',
    color: 'var(--yellow)',
    content: [
      'SD not detected → Reinsert card, ensure FAT32 format',
      "Can't connect to WiFi → Use 2.4GHz (not 5GHz), check password",
      "Web page won't load → Check IP on TFT, try vaultdrive.local",
      'Files missing → Refresh page, check SD card via USB mode',
      'Slow performance → Reboot (press RESET)',
      'Factory reset → Hold BOOT, press RESET, release BOOT'
    ]
  }
]

const specs = [
  ['Processor', 'ESP32-S3 (dual-core, 240MHz)'],
  ['Flash / PSRAM', '16MB / 2MB'],
  ['WiFi', '802.11 b/g/n (2.4GHz only)'],
  ['Bluetooth', 'BLE 5.0'],
  ['Display', '1.14" TFT (240×135)'],
  ['Storage', 'microSD FAT32, up to 128GB'],
  ['Power', '5V USB-C (~1W)'],
  ['Size', '60mm × 22mm × 8mm'],
]

export default function StartGuide() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Header */}
      <div style={{
        background: 'var(--yellow)',
        borderBottom: '3px solid var(--border)',
        padding: '20px 32px'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/wordmark-dark.svg" alt="VaultDrive" style={{ height: '36px' }} />
          <a href="/" className="btn btn-white" style={{ padding: '8px 16px', fontSize: '14px' }}>
            ← Back
          </a>
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(32px, 6vw, 48px)', marginBottom: '8px' }}
        >
          User Guide
        </motion.h1>
        <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '40px' }}>
          Everything you need to know about VaultDrive — from setup to advanced features
        </p>

        {/* Quick Start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
          style={{ marginBottom: '32px', background: 'var(--primary)' }}
        >
          <h2 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--foreground)' }}>
            ⚡ Quick Start (2 Minutes)
          </h2>
          <ol style={{ paddingLeft: '24px', fontSize: '16px', lineHeight: 2, color: 'var(--foreground)' }}>
            <li>Insert microSD card into VaultDrive</li>
            <li>Plug into USB wall charger</li>
            <li>Join WiFi: <strong>VaultDrive-Setup</strong> (password: <strong>vault1234</strong>)</li>
            <li>Open <strong>192.168.4.1</strong> in browser</li>
            <li>Enter your WiFi details and save</li>
            <li>Done! Access files at the IP shown on the display</li>
          </ol>
        </motion.div>

        {/* Section Cards */}
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{ marginBottom: '20px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: section.color,
                border: '2px solid var(--border)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '3px 3px 0 var(--border)'
              }}>
                <section.icon size={22} color="white" strokeWidth={2.5} />
              </div>
              <h2 style={{ fontSize: '22px' }}>{section.title}</h2>
            </div>
            <ol style={{ paddingLeft: '24px', fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)' }}>
              {section.content.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{
                  __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--foreground)">$1</strong>')
                }} />
              ))}
            </ol>
          </motion.div>
        ))}

        {/* Specs Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ marginTop: '32px' }}
        >
          <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>Technical Specifications</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <tbody>
                {specs.map(([label, value], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 8px', fontWeight: 600, color: 'var(--foreground)' }}>{label}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--muted)' }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ marginTop: '20px', borderColor: 'var(--blue)' }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--blue)' }}>
            🆘 Need Help?
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '16px' }}>
            Contact support: <strong>support@vaultdrive.ie</strong>
          </p>
          <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
            Have ready: order number, TFT display screenshot, description of the problem, and steps you've tried.
          </p>
        </motion.div>

        {/* Footer links */}
        <div style={{ textAlign: 'center', marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/" className="btn btn-blue">← Home</a>
          <a href="/sdcard" className="btn btn-green">SD Card Guide</a>
          <a href="/privacy" className="btn btn-white">Privacy Policy</a>
          <a href="/terms" className="btn btn-white">Terms</a>
        </div>
      </div>
    </div>
  )
}

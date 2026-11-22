import React from 'react'
import { motion } from 'motion/react'
import { HardDrive, AlertTriangle, Check, X, Download } from 'lucide-react'

const compat = [
  ['2GB – 32GB', '✅', 'Plug and play, no formatting needed'],
  ['64GB', '✅', 'Format as FAT32 (Windows default works)'],
  ['128GB', '✅', 'Format as FAT32 (use Rufus if needed)'],
  ['256GB', '⚠️', 'Must force FAT32 with Rufus or GUIFormat'],
  ['512GB+', '❌', 'Too slow / unreliable on ESP32'],
]

const formatters = [
  {
    name: 'GUIFormat (Easiest)',
    link: 'http://ridgecrop.co.uk/index.htm?guiformat.htm',
    steps: ['Download (no install needed)', 'Select your SD card', 'Allocation unit: 32768', 'Quick Format → Start']
  },
  {
    name: 'Rufus',
    link: 'https://rufus.ie',
    steps: ['Download and open', 'Select SD card', 'File system: FAT32', 'Click START']
  },
  {
    name: 'Windows Built-in (≤32GB only)',
    link: '#',
    steps: ['Right-click SD card → Format', 'File system: FAT32', 'Click Start']
  },
]

const faqs = [
  ['Why can\'t Windows format my 64GB card as FAT32?', 'Windows limits FAT32 formatting to 32GB by default and uses exFAT for larger cards. ESP32 can only read FAT32, so you need a third-party tool like Rufus or GUIFormat.'],
  ['What is the 4GB file limit?', 'FAT32 cannot store a single file larger than 4GB. This means you can\'t store a single video file over 4GB. Split large files or compress them.'],
  ['How do I know my card is FAT32?', 'Right-click the card → Properties → File system. It must say FAT32, NOT exFAT.'],
  ['My card was working but stopped — why?', 'Most likely the card is fake/counterfeit (common with cheap cards from unknown sellers). Buy genuine SanDisk, Samsung, or Kingston cards.'],
  ['Can I use a microSD adapter?', 'Yes, but use a quality adapter. Cheap adapters cause read errors.'],
]

export default function SdGuide() {
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
          SD Card Guide
        </motion.h1>
        <p style={{ color: 'var(--muted)', fontSize: '18px', marginBottom: '32px' }}>
          Compatible cards, formatting instructions, and best practices
        </p>

        {/* Quick Answer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
          style={{ background: 'var(--green)', marginBottom: '24px' }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '8px', color: '#fff' }}>
            ✅ Quick Answer
          </h2>
          <p style={{ fontSize: '16px', color: '#fff', fontWeight: 600 }}>
            Your 64GB card is perfect. Max supported: 128GB. Always format as FAT32.
          </p>
        </motion.div>

        {/* Compatibility Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ marginBottom: '24px' }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HardDrive size={24} color="var(--blue)" /> Card Compatibility
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 8px' }}>Card Size</th>
                  <th style={{ textAlign: 'center', padding: '10px 8px' }}>Works?</th>
                  <th style={{ textAlign: 'left', padding: '10px 8px' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {compat.map(([size, works, notes], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 8px', fontWeight: 600 }}>{size}</td>
                    <td style={{ textAlign: 'center', padding: '10px 8px', fontSize: '20px' }}>{works}</td>
                    <td style={{ padding: '10px 8px', color: 'var(--muted)' }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ marginBottom: '24px', borderColor: 'var(--yellow)' }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--yellow)' }}>
            <AlertTriangle size={24} /> The Windows Problem
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--muted)' }}>
            Windows automatically formats cards <strong>over 32GB</strong> as <strong>exFAT</strong>. 
            VaultDrive (and all ESP32 devices) can only read <strong>FAT32</strong>. 
            If your card says "exFAT" in Properties, it won't work — you need to reformat with Rufus or GUIFormat.
          </p>
          <div style={{ marginTop: '12px', padding: '12px', background: 'rgba(255,214,10,0.2)', borderRadius: '8px', fontSize: '14px' }}>
            <strong>Also:</strong> FAT32 has a 4GB max file size. Split large videos or compress them.
          </div>
        </motion.div>

        {/* Formatters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '24px' }}
        >
          <h2 style={{ fontSize: '22px', marginBottom: '16px' }}>How to Format (Cards Over 32GB)</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {formatters.map((tool, i) => (
              <div key={i} className="card" style={{ marginBottom: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '18px' }}>{tool.name}</h3>
                  {tool.link !== '#' && (
                    <a href={tool.link} target="_blank" rel="noopener noreferrer" className="btn btn-blue" style={{ padding: '8px 16px', fontSize: '13px' }}>
                      <Download size={14} /> Download
                    </a>
                  )}
                </div>
                <ol style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.8 }}>
                  {tool.steps.map((step, j) => (
                    <li key={j}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommended Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ marginBottom: '24px' }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Recommended Cards</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            {[
              ['SanDisk Ultra 64GB', 'Best overall — ~€8', '⭐'],
              ['Samsung EVO Select 64GB', 'Fast — ~€10', '⭐'],
              ['SanDisk Ultra 128GB', 'More storage — ~€14', ''],
              ['Kingston Canvas 64GB', 'Budget — ~€6', ''],
            ].map(([name, desc, badge], i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                background: 'var(--cream)',
                borderRadius: '8px',
                border: '2px solid var(--border)'
              }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{name}</div>
                  <div style={{ fontSize: '14px', color: 'var(--muted)' }}>{desc}</div>
                </div>
                {badge && <span>{badge}</span>}
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ marginBottom: '24px' }}
        >
          <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Frequently Asked Questions</h2>
          {faqs.map(([q, a], i) => (
            <div key={i} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: i < faqs.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontWeight: 700, marginBottom: '6px' }}>{q}</div>
              <div style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>{a}</div>
            </div>
          ))}
        </motion.div>

        {/* Quick Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{ background: 'var(--foreground)', color: 'var(--cream)', marginBottom: '32px' }}
        >
          <h2 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--primary)' }}>Quick Reference</h2>
          <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: 2 }}>
            <div>Max card: <strong style={{ color: 'var(--primary)' }}>128GB</strong></div>
            <div>Format: <strong style={{ color: 'var(--primary)' }}>FAT32 (always!)</strong></div>
            <div>Max file: <strong style={{ color: 'var(--primary)' }}>4GB per file</strong></div>
            <div>Best card: <strong style={{ color: 'var(--primary)' }}>64GB Class 10</strong></div>
            <div>&gt;32GB: <strong style={{ color: 'var(--primary)' }}>Use Rufus or GUIFormat</strong></div>
            <div>Windows default: <strong style={{ color: 'var(--red)' }}>exFAT = WON'T WORK</strong></div>
          </div>
        </motion.div>

        {/* Links */}
        <div style={{ textAlign: 'center', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/" className="btn btn-blue">← Home</a>
          <a href="/start" className="btn btn-white">User Guide</a>
          <a href="/privacy" className="btn btn-white">Privacy</a>
        </div>
      </div>
    </div>
  )
}

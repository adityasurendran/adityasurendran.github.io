import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { RefreshCw, Upload, Usb, Wifi, ExternalLink, CheckCircle, AlertTriangle } from 'lucide-react'

export default function Flash() {
  const [ip, setIp] = useState(() => localStorage.getItem('vd_device_ip') || '192.168.68.137')
  const [latest, setLatest] = useState('...')
  const [latestOk, setLatestOk] = useState(null)

  useEffect(() => {
    fetch('/firmware/version.txt')
      .then(r => r.ok ? r.text() : Promise.reject())
      .then(v => { setLatest(v.trim()); setLatestOk(true) })
      .catch(() => { setLatest('unavailable'); setLatestOk(false) })
  }, [])

  const saveIp = (v) => { setIp(v); localStorage.setItem('vd_device_ip', v) }
  const openDevice = () => { window.location.href = `http://${ip}/update` }

  const card = {
    background: 'var(--card, #fff)',
    border: '2px solid var(--border)',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '20px',
    boxShadow: '4px 4px 0 var(--border)'
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      {/* Header */}
      <div style={{ background: 'var(--yellow)', borderBottom: '3px solid var(--border)', padding: '20px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/wordmark-dark.svg" alt="VaultDrive" style={{ height: '32px' }} />
          <a href="/" className="btn btn-white" style={{ padding: '8px 16px', fontSize: '14px' }}>← Back</a>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '36px', marginBottom: '8px' }}>
          ⬆️ Firmware Recovery
        </motion.h1>
        <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
          Update or rescue your VaultDrive's firmware — even if the device's own pages have broken.
        </p>

        {/* Latest version status */}
        <div style={{ ...card, borderColor: latestOk ? 'var(--green)' : 'var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <RefreshCw size={22} />
            <h2 style={{ fontSize: '20px' }}>VaultDrive Cloud Firmware</h2>
          </div>
          <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--muted)' }}>
            This website is the official firmware host. Every VaultDrive checks here for updates
            and <strong style={{ color: 'var(--border)' }}>updates itself automatically</strong> when a new version is published.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '14px', flexWrap: 'wrap' }}>
            <span className="btn" style={{ background: 'var(--green)', color: '#fff', fontSize: '14px' }}>
              Latest: v{latest}
            </span>
            <a className="btn" style={{ fontSize: '14px' }} href="/firmware/version.txt" target="_blank" rel="noreferrer">
              version.txt <ExternalLink size={14} />
            </a>
            <a className="btn" style={{ fontSize: '14px' }} href="/firmware/latest.bin" download>
              ⬇ latest.bin
            </a>
          </div>
        </div>

        {/* Method 1: open device page */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Wifi size={22} />
            <h2 style={{ fontSize: '20px' }}>Method 1 — Device Update Page (easiest)</h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '14px' }}>
            On the same WiFi as your VaultDrive, enter its address and jump straight to its update page
            (progress bar, one-tap cloud update).
          </p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input
              value={ip}
              onChange={e => saveIp(e.target.value)}
              placeholder="e.g. 192.168.68.137"
              style={{
                flex: 1, minWidth: '200px', padding: '12px 16px', fontSize: '16px', fontWeight: 600,
                border: '2px solid var(--border)', borderRadius: '10px', background: 'var(--cream)', color: 'inherit'
              }}
            />
            <button className="btn btn-blue" onClick={openDevice} style={{ fontSize: '15px' }}>
              Open /update <ExternalLink size={16} />
            </button>
          </div>
        </motion.div>

        {/* Method 2: direct upload */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Upload size={22} />
            <h2 style={{ fontSize: '20px' }}>Method 2 — Direct Upload (if this site's pages are fine but the device's aren't)</h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--muted)', marginBottom: '14px' }}>
            Pick a <code>VaultDrive.ino.bin</code> (download it above) and push it straight to the device.
            The response opens in a new tab.
          </p>
          <form
            action={`http://${ip}/ota/upload`}
            method="POST"
            encType="multipart/form-data"
            target="_blank"
            style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <input
              type="file"
              name="firmware"
              accept=".bin"
              required
              style={{ flex: 1, minWidth: '200px', padding: '10px', border: '2px solid var(--border)', borderRadius: '10px', background: 'var(--cream)' }}
            />
            <button type="submit" className="btn" style={{ background: 'var(--yellow)', fontSize: '15px' }}>
              📤 Flash to {ip}
            </button>
          </form>
        </motion.div>

        {/* Method 3: USB */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={card}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <Usb size={22} />
            <h2 style={{ fontSize: '20px' }}>Method 3 — USB (last resort, always works)</h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7 }}>
            <strong>1.</strong> Hold the <strong>BOOT</strong> button on the VaultDrive<br />
            <strong>2.</strong> Plug in the USB-C cable while holding, then release<br />
            <strong>3.</strong> Flash from a computer:<br />
          </p>
          <code style={{
            display: 'block', background: 'var(--ink)', color: '#FFD60A', padding: '14px 16px',
            borderRadius: '10px', marginTop: '10px', fontSize: '13px', overflowX: 'auto'
          }}>
            arduino-cli upload --fqbn esp32:esp32:esp32s3:FlashSize=16M,PartitionScheme=app3M_fat9M_16MB --port COM6 VaultDrive
          </code>
        </motion.div>

        {/* Safety note */}
        <div style={{ ...card, borderColor: 'var(--green)', background: 'var(--cream)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <CheckCircle size={22} color="var(--green)" />
            <h2 style={{ fontSize: '20px', color: 'var(--green)' }}>Why updates can't brick your VaultDrive</h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7 }}>
            Updates install to the <strong>backup partition</strong> — the running firmware stays untouched
            until the new one is fully downloaded and verified. If anything fails (power loss, bad WiFi,
            wrong file), the device simply reboots into the old firmware. Safe by design.
          </p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <AlertTriangle size={16} />
            <span style={{ fontSize: '14px', color: 'var(--muted)' }}>
              Only flash firmware published on this page. Custom builds: use Method 1 or 3.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

import React, { useRef, useState, useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'motion/react'
import Wordmark from './Wordmark'

/* ---------- moving pieces ---------- */

function ParallaxBlob({ variant, mx, my, depth = 1 }) {
  const x = useTransform([mx, my], ([vx, vy]) => vx * 30 * depth)
  const y = useTransform([mx, my], ([vx, vy]) => vy * 22 * depth)
  return (
    <motion.div style={{ x, y }} className={`blob-wrap ${variant}`}>
      <div className="blob" />
    </motion.div>
  )
}

function Line({ children, delay }) {
  return (
    <span className="line-mask">
      <motion.span
        style={{ display: 'block' }}
        initial={{ y: '115%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/* ---------- 3D device ---------- */

function UsbDevice() {
  return (
    <div className="device3d">
      {/* body */}
      <div className="face f-front">
        <div className="usb-screen">
          <div className="usb-screen-inner">
            <Wordmark size={30} />
          </div>
          <span className="usb-sheen" />
        </div>
        <span className="usb-led" />
        <div className="usb-slots">
          <span className="usb-slot" />
          <span className="usb-slot" />
          <span className="usb-slot" />
        </div>
      </div>
      <div className="face f-back" />
      <div className="face f-left" />
      <div className="face f-right" />
      <div className="face f-top">
        <span className="usb-power" />
      </div>
      <div className="face f-bottom" />

      {/* metal connector */}
      <div className="connector3d">
        <div className="face c-front">
          <span className="usb-hole" />
          <span className="usb-hole" />
        </div>
        <div className="face c-back" />
        <div className="face c-left" />
        <div className="face c-right" />
        <div className="face c-top" />
        <div className="face c-bottom" />
      </div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const [photo, setPhoto] = useState(false)

  useEffect(() => {
    // If a real product render is dropped at /hero-usb.png, use it automatically.
    const img = new Image()
    img.onload = () => setPhoto(true)
    img.src = '/hero-usb.png'
  }, [])

  /* mouse parallax */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 55, damping: 16, mass: 0.7 })
  const sy = useSpring(my, { stiffness: 55, damping: 16, mass: 0.7 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  /* scroll parallax */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const copyY = useTransform([sy, scrollYProgress], ([p, s]) => p * -8 + s * 90)
  const artY = useTransform([sy, scrollYProgress], ([p, s]) => p * -10 + s * -70)
  const sceneFade = useTransform(scrollYProgress, [0, 0.85], [1, 0.35])

  const devX = useTransform(sx, (v) => v * 10)
  const devY = useTransform(sy, (v) => v * 8)
  const tiltX = useTransform(sy, (v) => 7 + v * 5)
  const tiltY = useTransform(sx, (v) => -20 + v * 7)

  return (
    <section className="hero" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
      <ParallaxBlob variant="blob-amber" mx={sx} my={sy} depth={1.35} />
      <ParallaxBlob variant="blob-olive" mx={sx} my={sy} depth={1.1} />
      <ParallaxBlob variant="blob-teal" mx={sx} my={sy} depth={1.6} />
      <ParallaxBlob variant="blob-wine" mx={sx} my={sy} depth={1.15} />
      <ParallaxBlob variant="blob-coral" mx={sx} my={sy} depth={1.9} />
      <ParallaxBlob variant="blob-front" mx={sx} my={sy} depth={2.2} />

      <div className="hero-grain" />
      <div className="hero-vignette" />
      <div className="hero-spot" />
      <div className="hero-bokeh">
        <span className="p p1" /><span className="p p2" /><span className="p p3" />
        <span className="p p4" /><span className="p p5" /><span className="p p6" />
        <span className="p p7" /><span className="p p8" />
      </div>

      <button className="hero-arrow left" aria-label="Previous">‹</button>
      <button className="hero-arrow right" aria-label="Next">›</button>

      <motion.div className="container hero-inner" style={{ opacity: sceneFade }}>
        <motion.div className="hero-copy" style={{ y: copyY }}>
          <h1>
            <Line delay={0.05}>Your files,</Line>
            <Line delay={0.17}>your control.</Line>
          </h1>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#connect" className="btn hero-btn">
              <span>Get started</span>
            </a>
            <p>
              Your own private cloud, on your desk.
              <br />
              No accounts. No subscriptions.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="hero-art" style={{ y: artY }}>
          <div className="scene-scale">
            <motion.div
              className="scene3d"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 65, damping: 16, mass: 1.15, delay: 0.3 }}
              style={{ x: devX, y: devY }}
            >
              {/* ambient shadow + plinth */}
              <div className="device-ambient" />
              <div className="plinth-shadow" />
              <div className="plinth3d">
                <div className="face pl-front" />
                <div className="face pl-back" />
                <div className="face pl-left" />
                <div className="face pl-right" />
                <div className="face pl-top" />
                <div className="face pl-bottom" />
              </div>

              {/* contact shadow on the plinth */}
              <div className="contact-shadow" />
              <div className="device-reflection" />

              {/* device — floats and tilts in 3D */}
              <motion.div
                className="device-float"
                initial={{ rotateZ: photo ? 0 : -16 }}
                animate={photo ? {
                  y: [0, -10, 0],
                  rotateZ: 0,
                } : {
                  y: [0, -12, 0],
                  rotateZ: [-16, -15.2, -16],
                }}
                transition={{ duration: 7.5, ease: 'easeInOut', repeat: Infinity }}
              >
                <motion.div style={{ rotateX: tiltX, rotateY: tiltY }} className="device-tilt">
                  {photo ? (
                    <img className="hero-photo" src="/hero-usb.png" alt="VaultDrive" />
                  ) : (
                    <UsbDevice />
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

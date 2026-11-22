import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Connect from './components/Connect'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Reviews from './components/Reviews'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import Wordmark from './components/Wordmark'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import StartGuide from './pages/StartGuide'
import SdGuide from './pages/SdGuide'
import Flash from './pages/Flash'

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const [deviceIP, setDeviceIP] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(window.location.pathname)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Listen for navigation
    const handlePopState = () => setPage(window.location.pathname)
    window.addEventListener('popstate', handlePopState)

    // Intercept internal link clicks for SPA navigation
    const handleClick = (e) => {
      const link = e.target.closest('a[href]')
      if (!link) return
      const href = link.getAttribute('href')
      // Only intercept internal page routes (not anchors, not external)
      if (href && (href === '/privacy' || href === '/terms' || href === '/start' || href === '/sdcard' || href === '/flash')) {
        e.preventDefault()
        window.history.pushState({}, '', href)
        setPage(href)
        window.scrollTo(0, 0)
      }
    }
    document.addEventListener('click', handleClick)

    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => {
      lenis.destroy()
      clearTimeout(timer)
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const handleConnect = (connected, ip) => {
    setIsConnected(connected)
    setDeviceIP(ip)
  }

  // Route rendering
  if (page === '/privacy') {
    return <Privacy />
  }
  if (page === '/terms') {
    return <Terms />
  }
  if (page === '/start') {
    return <StartGuide />
  }
  if (page === '/sdcard') {
    return <SdGuide />
  }
  if (page === '/flash') {
    return <Flash />
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Connect onConnect={handleConnect} deviceIP={deviceIP} />
      <Features isConnected={isConnected} deviceIP={deviceIP} />
      <HowItWorks />
      <Reviews />
      <VisitUs />
      <Footer />
      <CookieBanner />
    </div>
  )
}

function LoadingScreen() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(160deg, #C2410C 0%, #6E1F08 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Wordmark size={40} />
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: '12px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.6)',
          marginTop: '22px'
        }}>
          Loading
        </div>
      </motion.div>
    </div>
  )
}

export default App

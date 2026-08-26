import React, { useState, useEffect } from 'react'
import logoImg from '../assets/logo.jpg'
import './Navbar.css'

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header className={`nav ${scrolled ? 'solid' : ''}`}>
        {/* Brand Logo & Name */}
        <a href="#overview" className="nlogo">
          <div className="nlogo-img-wrap">
            <img src={logoImg} alt="RevBridge Logo" className="nlogo-img" />
          </div>
          <div className="nlogo-text-group">
            <div className="nln">RevBridge</div>
            <div className="nls">Hospitality Solutions</div>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="nmenu">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#hotels">Properties</a></li>
          <li><a href="#partnership">For Hotels</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right CTA Button */}
        <div className="nav-actions">
          <button
            type="button"
            className="ncta"
            onClick={() => onOpenModal('hotel')}
          >
            Partner With Us
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`ham ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mob ${mobileOpen ? 'open' : ''}`}>
        <button
          type="button"
          className="mobx"
          onClick={() => setMobileOpen(false)}
          aria-label="Close Navigation"
        >
          ✕
        </button>
        <a href="#overview" onClick={() => setMobileOpen(false)}>Overview</a>
        <a href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
        <a href="#hotels" onClick={() => setMobileOpen(false)}>Curated Properties</a>
        <a href="#partnership" onClick={() => setMobileOpen(false)}>For Hotel Owners</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact HQ</a>
        <div className="mob-btns">
          <button
            type="button"
            className="btn-g"
            onClick={() => {
              setMobileOpen(false)
              onOpenModal('hotel')
            }}
          >
            Partner With Us
          </button>
          <button
            type="button"
            className="btn-o"
            onClick={() => {
              setMobileOpen(false)
              onOpenModal('booking')
            }}
          >
            Book A Stay
          </button>
        </div>
      </div>
    </>
  )
}

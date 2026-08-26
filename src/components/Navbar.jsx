import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X, CalendarCheck, Building2 } from 'lucide-react'
import logoImg from '../assets/logo.jpg'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Partner Properties', href: '#portfolio' },
  { label: 'For Hotel Owners', href: '#hotels' },
  { label: 'Book Stays & MICE', href: '#book-stays' },
  { label: 'Why RevBridge', href: '#why-us' },
  { label: 'Contact HQ', href: '#contact' }
]

export default function Navbar({ onOpenModal }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner shell">
        {/* Unified Prismatic Glass Capsule: Logo + RevBridge + All Nav Links */}
        <div className="nav__prismatic-capsule">
          <a href="#top" className="nav__brand">
            <img src={logoImg} alt="RevBridge Logo" className="nav__brand-logo" />
            <span className="nav__brand-text">REVBRIDGE</span>
          </a>

          <span className="nav__brand-divider" aria-hidden="true" />

          <nav className="nav__rail" aria-label="Primary Navigation">
            {NAV_LINKS.map((link, idx) => (
              <span key={link.label} className="nav__slot">
                {idx > 0 && <span className="nav__dot" aria-hidden="true" />}
                <a href={link.href} className="nav__link">
                  {link.label}
                </a>
              </span>
            ))}
          </nav>
        </div>

        {/* Independent Action Controls: Book a Stay + Partner Property */}
        <div className="nav__actions">
          <button 
            type="button" 
            className="nav__login" 
            onClick={() => onOpenModal('booking')}
          >
            <CalendarCheck size={14} />
            <span>Book a Stay</span>
          </button>
          <button
            type="button"
            className="nav__cta"
            onClick={() => onOpenModal('hotel')}
          >
            <Building2 size={14} />
            <span>Partner With Us</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Sheet */}
      {open && (
        <div className="nav__sheet">
          <div className="nav__sheet-links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav__sheet-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="nav__sheet-actions">
            <button
              type="button"
              className="btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setOpen(false)
                onOpenModal('booking')
              }}
            >
              Book Listed Properties
            </button>
            <button
              type="button"
              className="btn-secondary"
              style={{ width: '100%', marginTop: '10px' }}
              onClick={() => {
                setOpen(false)
                onOpenModal('hotel')
              }}
            >
              Partner Your Property (Hotel Owners)
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

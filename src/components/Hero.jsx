import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Phone,
  Mail,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react'
import './Hero.css'

export default function Hero({ onOpenModal }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / 35
      const y = (e.clientY - innerHeight / 2) / 35
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="hero" id="overview">
      {/* Ambient Warm Architectural Lighting */}
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__glow-1" />
        <div className="hero__glow-2" />
        <div className="hero__glow-3" />
      </div>

      <div className="hero__container shell">
        {/* Top Announcement Badge */}
        <div className="hero__badge-wrapper animate-fade-in">
          <div className="badge-mono animate-float hero__live-badge">
            <span className="hero__live-dot" />
            <Sparkles size={13} />
            <span>HOSPITALITY SALES REPRESENTATION &amp; DIRECT BOOKING DESK</span>
          </div>
        </div>

        {/* Core Headline with Floating Badges in the exact line of 'Sales Reach' */}
        <h1 className="hero__title animate-fade-in">
          Bridging Luxury Resorts with <br className="hero__title-br" />
          <span className="hero__title-highlight">
            High-Value Bookings
            <span className="hero__highlight-shimmer" />
          </span>{' '}
          &amp; Pan-India <br className="hero__title-br" />
          <div className="hero__reach-row">
            {/* Left Floating Badge (Hotel Collaboration) */}
            <div
              className="hero__inline-badge hero__inline-badge--left"
              style={{
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`
              }}
            >
              <div className="hero__float-icon hero__float-icon--gold">
                <Building2 size={16} />
              </div>
              <div className="hero__float-content">
                <div className="hero__float-val">Hotel Collaboration</div>
                <div className="hero__float-lbl">Direct MICE &amp; Group Sales</div>
              </div>
            </div>

            <span className="hero__reach-text">Sales Reach</span>

            {/* Right Floating Badge (Direct Stay Bookings) */}
            <div
              className="hero__inline-badge hero__inline-badge--right"
              style={{
                transform: `translate(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px)`
              }}
            >
              <div className="hero__float-icon hero__float-icon--dark">
                <CalendarCheck size={16} />
              </div>
              <div className="hero__float-content">
                <div className="hero__float-val">Direct Stay Bookings</div>
                <div className="hero__float-lbl">Verified Luxury Rates</div>
              </div>
            </div>
          </div>
        </h1>

        {/* Subtitle addressing both Hotel Brands and Bookers */}
        <p className="hero__sub animate-fade-in">
          RevBridge represents independent resorts, mountain chalets, and hotel brands to accelerate direct
          corporate retreats, weddings, and group stays — while offering corporate planners and guests seamless
          direct booking assistance.
        </p>

        {/* Direct Contact Quick Pill */}
        <div className="hero__quick-contact animate-fade-in">
          <span className="hero__quick-label">Direct Inquiries &amp; Bookings:</span>
          <div className="hero__quick-links">
            <a href="tel:+917028027017" className="hero__contact-pill-link">
              <Phone size={13} />
              <span>+91 70280 27017</span>
            </a>
            <span className="hero__quick-sep">•</span>
            <a href="tel:+919370872231" className="hero__contact-pill-link">
              <Phone size={13} />
              <span>+91 93708 72231</span>
            </a>
            <span className="hero__quick-sep">•</span>
            <a href="mailto:sales@revbridge.in" className="hero__contact-pill-link">
              <Mail size={13} />
              <span>sales@revbridge.in</span>
            </a>
          </div>
        </div>

        {/* Dual CTA Actions for the two user types */}
        <div className="hero__actions animate-fade-in">
          <button
            type="button"
            className="btn-primary hero__btn hero__btn--glow"
            onClick={() => onOpenModal('hotel')}
          >
            <Building2 size={18} />
            <span>For Hotels: Partner With Us</span>
            <ArrowRight size={16} className="hero__btn-arrow" />
          </button>

          <button
            type="button"
            className="btn-secondary hero__btn hero__btn--secondary"
            onClick={() => onOpenModal('booking')}
          >
            <CalendarCheck size={18} />
            <span>For Guests: Book Listed Stays</span>
          </button>
        </div>

        {/* Trust Points Strip */}
        <div className="hero__trust-strip animate-fade-in">
          <div className="hero__trust-item">
            <Building2 size={16} className="hero__trust-icon" />
            <span>3+ Premier Partner Properties</span>
          </div>
          <div className="hero__trust-sep" aria-hidden="true">•</div>
          <div className="hero__trust-item">
            <ShieldCheck size={16} className="hero__trust-icon" />
            <span>Pune Corporate Sales HQ</span>
          </div>
          <div className="hero__trust-sep" aria-hidden="true">•</div>
          <div className="hero__trust-item">
            <CheckCircle2 size={16} className="hero__trust-icon" />
            <span>Direct Phone &amp; Email Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

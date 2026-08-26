import React, { useState } from 'react'
import { ArrowRight, Check, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer({ onOpenModal }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
  }

  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <div className="footer__top">
          {/* Brand Col */}
          <div className="footer__brand-col">
            <div className="footer__brand">
              <img src="/logo.jpg" alt="RevBridge Logo" className="footer__brand-logo" />
              <span className="footer__brand-text">REVBRIDGE</span>
            </div>
            <p className="footer__tagline">
              The premier commercial leadership bridge connecting world-class luxury resorts,
              mountain chalets, and hotel portfolios with elite sales management.
            </p>
            <div className="footer__slogan">
              Bridging Today, Building Tomorrow.
            </div>
          </div>

          {/* Contact Details Col (User Requested) */}
          <div className="footer__contact-col">
            <h4 className="footer__col-title">Corporate Office &amp; Inquiries</h4>
            <div className="footer__contact-list">
              {/* Address */}
              <div className="footer__contact-item">
                <MapPin size={18} className="footer__contact-icon" />
                <div className="footer__contact-info">
                  <span className="footer__contact-label">Corporate Address</span>
                  <p className="footer__contact-text">
                    Office No: 433, 4th Floor, Sohrab Hall, Tadiwala Road, Pune - 411001, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="footer__contact-item">
                <Mail size={18} className="footer__contact-icon" />
                <div className="footer__contact-info">
                  <span className="footer__contact-label">Official Email</span>
                  <a href="mailto:sales@revbridge.in" className="footer__contact-link">
                    sales@revbridge.in
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="footer__contact-item">
                <Phone size={18} className="footer__contact-icon" />
                <div className="footer__contact-info">
                  <span className="footer__contact-label">Direct Lines</span>
                  <div className="footer__phone-group">
                    <a href="tel:+917028027017" className="footer__contact-link">
                      +91 70280 27017
                    </a>
                    <span className="footer__phone-sep">•</span>
                    <a href="tel:+919370872231" className="footer__contact-link">
                      +91 93708 72231
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="footer__nav-col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__col-list">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#portfolio">Partner Properties</a></li>
              <li><a href="#hotels">For Hotel Owners</a></li>
              <li><a href="#book-stays">Book Stays &amp; MICE</a></li>
              <li><a href="#why-us">Why RevBridge</a></li>
              <li><a href="#contact">Contact Pune HQ</a></li>
              <li><button type="button" onClick={() => onOpenModal('booking')}>Book a Property</button></li>
              <li><button type="button" onClick={() => onOpenModal('hotel')}>Partner Your Property</button></li>
            </ul>
          </div>

          {/* Newsletter / Executive Briefings */}
          <div className="footer__news-col">
            <h4 className="footer__col-title">Hospitality Revenue Intel</h4>
            <p className="footer__news-desc">
              Receive our briefings on luxury ADR pacing, MICE booking trends, and Indian hospitality sales.
            </p>
            {subscribed ? (
              <div className="footer__news-success">
                <Check size={16} />
                <span>You are subscribed to RevBridge Revenue Briefs.</span>
              </div>
            ) : (
              <form className="footer__news-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter executive email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="footer__news-input"
                  required
                />
                <button type="submit" className="footer__news-btn" aria-label="Subscribe to newsletter">
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            © {new Date().getFullYear()} RevBridge Hospitality Advisory. All rights reserved.
          </div>
          <div className="footer__legal">
            <a href="#top">Privacy Policy</a>
            <span>•</span>
            <a href="#top">Terms of Service</a>
            <span>•</span>
            <a href="#contact">Pune HQ</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

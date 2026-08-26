import React from 'react'
import { MapPin, Phone, Mail, Sparkles, Building2, ArrowRight } from 'lucide-react'
import logoImg from '../assets/logo.jpg'
import './Footer.css'

export default function Footer({ onOpenModal }) {
  return (
    <footer className="footer" id="contact">
      <div className="con">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-col footer-col--brand">
            <div className="footer-logo">
              <div className="footer-logo-img-wrap">
                <img src={logoImg} alt="RevBridge Logo" className="footer-logo-img" />
              </div>
              <div>
                <div className="footer-logo-name">RevBridge</div>
                <div className="footer-logo-sub">Hospitality Solutions</div>
              </div>
            </div>
            <p className="footer-about-text">
              RevBridge is India's dedicated hotel sales and marketing alliance representing a curated
              portfolio of independent luxury resorts and corporate venues across Maharashtra.
            </p>
            <div className="footer-slogan">
              Think Hospitality. <em>Think RevBridge.</em>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#about">About Alliance</a></li>
              <li><a href="#hotels">Curated Properties</a></li>
              <li><a href="#services">MICE &amp; Wedding Solutions</a></li>
              <li><a href="#partnership">For Hotel Owners</a></li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onOpenModal('hotel')}>
                  Partner With Us
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Properties */}
          <div className="footer-col">
            <div className="footer-col-title">Curated Resorts</div>
            <ul className="footer-links">
              <li><a href="#hotels">Aamby Valley City (Lonavala)</a></li>
              <li><a href="#hotels">The Foresta Resort (Mulshi)</a></li>
              <li><a href="#hotels">Ivy Studios (Viman Nagar, Pune)</a></li>
              <li><a href="#services">Corporate Offsites &amp; MICE</a></li>
              <li><a href="#services">Destination Weddings</a></li>
              <li>
                <button type="button" className="footer-link-btn" onClick={() => onOpenModal('booking')}>
                  Direct Booking Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (User Specified HQ) */}
          <div className="footer-col footer-col--contact">
            <div className="footer-col-title">Corporate Headquarters</div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" />
                <div className="footer-contact-text">
                  <strong>Pune Corporate Sales HQ:</strong> <br />
                  Office No: 433, 4th Floor, Sohrab Hall, Tadiwala Road, Pune - 411001, Maharashtra, India
                </div>
              </div>

              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" />
                <div className="footer-contact-text">
                  <strong>Direct Booking &amp; Concierge:</strong> <br />
                  <a href="tel:+917028027017" className="footer-contact-link">+91 70280 27017</a>
                  <span className="footer-contact-sep"> / </span>
                  <a href="tel:+919370872231" className="footer-contact-link">+91 93708 72231</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                <div className="footer-contact-text">
                  <strong>Sales &amp; Partnership Desk:</strong> <br />
                  <a href="mailto:sales@revbridge.in" className="footer-contact-link">sales@revbridge.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {new Date().getFullYear()} RevBridge Hospitality Solutions. All rights reserved.
          </div>
          <div className="footer-tagline-bottom">
            Bridging Today, Building Tomorrow.
          </div>
        </div>
      </div>
    </footer>
  )
}

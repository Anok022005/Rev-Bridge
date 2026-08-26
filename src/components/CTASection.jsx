import React from 'react'
import { Phone, Mail, MapPin, Building2, CalendarCheck, ArrowRight } from 'lucide-react'
import './CTASection.css'

export default function CTASection({ onOpenModal }) {
  return (
    <section className="sec sec-dark cta-sec" id="inquire">
      <div className="con">
        <div className="cta-box">
          <div className="lbl c">Direct Inquiries &amp; Alliances</div>
          <h2 className="ttl" style={{ textAlign: 'center', color: '#ffffff' }}>
            Elevate Your Resort Sales or <em>Plan Your Next Luxury Stay</em>
          </h2>
          <div className="gbar c" />
          <p className="sub" style={{ textAlign: 'center', margin: '0 auto 36px', color: 'rgba(240, 232, 216, 0.85)' }}>
            Speak directly with our commercial leadership team at our Pune corporate sales office or submit
            your group inquiry online.
          </p>

          <div className="cta-actions">
            <button
              type="button"
              className="btn-g"
              onClick={() => onOpenModal('hotel')}
            >
              <Building2 size={15} />
              <span>For Hotels: Partner With Us</span>
            </button>
            <button
              type="button"
              className="btn-o"
              onClick={() => onOpenModal('booking')}
            >
              <CalendarCheck size={15} />
              <span>For Guests: Book Listed Stays</span>
            </button>
          </div>

          <div className="cta-quick-strip">
            <a href="tel:+917028027017" className="cta-strip-item">
              <Phone size={13} />
              <span>+91 70280 27017</span>
            </a>
            <span className="cta-strip-sep">•</span>
            <a href="tel:+919370872231" className="cta-strip-item">
              <Phone size={13} />
              <span>+91 93708 72231</span>
            </a>
            <span className="cta-strip-sep">•</span>
            <a href="mailto:sales@revbridge.in" className="cta-strip-item">
              <Mail size={13} />
              <span>sales@revbridge.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

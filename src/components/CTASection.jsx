import React from 'react'
import { ArrowRight, Building2, CalendarCheck, PhoneCall, Sparkles } from 'lucide-react'
import './CTASection.css'

export default function CTASection({ onOpenModal }) {
  return (
    <section className="cta-section">
      <div className="shell">
        <div className="cta-card">
          <div className="cta-card__badge">
            <Sparkles size={13} />
            <span>START THE CONVERSATION</span>
          </div>

          <h2 className="cta-card__title">
            Grow Your Hotel's Sales Reach Or <br />Book Your Next Luxury Experience
          </h2>

          <p className="cta-card__sub">
            Whether you own a luxury resort seeking dedicated commercial sales representation or you are
            planning a corporate retreat, wedding, or vacation — RevBridge is here to assist you directly.
          </p>

          <div className="cta-card__actions">
            <button
              type="button"
              className="btn-gold"
              onClick={() => onOpenModal('hotel')}
            >
              <Building2 size={18} />
              <span>Partner Your Property (Hotel Owners)</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              className="btn-secondary cta-card__btn-alt"
              onClick={() => onOpenModal('booking')}
            >
              <CalendarCheck size={18} />
              <span>Book Listed Stays &amp; Offsites</span>
            </button>
          </div>

          <div className="cta-card__footer-note">
            <span>Direct Phone: <a href="tel:+917028027017" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>+91 70280 27017</a> / <a href="tel:+919370872231" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>+91 93708 72231</a></span> • <span>Email: <a href="mailto:sales@revbridge.in" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 600 }}>sales@revbridge.in</a></span>
          </div>
        </div>
      </div>
    </section>
  )
}

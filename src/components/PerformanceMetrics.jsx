import React from 'react'
import {
  Building2,
  CalendarCheck,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
  Target,
  Clock
} from 'lucide-react'
import './PerformanceMetrics.css'

const PILLARS = [
  {
    icon: Building2,
    badge: 'FOR HOTELS & RESORTS',
    title: 'Dedicated Commercial Sales Representation',
    desc: 'We act as your dedicated sales office in Pune & Mumbai, actively pitching your property to corporate event planners, MICE agencies, and wedding organizers.'
  },
  {
    icon: CalendarCheck,
    badge: 'FOR GUESTS & COMPANIES',
    title: 'Curated Direct Booking & Offsite Desk',
    desc: 'Get direct corporate rates and personalized coordination for mountain chalets, private pool resorts, and luxury stays across Maharashtra.'
  },
  {
    icon: PhoneCall,
    badge: 'DIRECT ASSISTANCE',
    title: 'Personalized Phone & Email Support',
    desc: 'Speak directly with our reservation team at +91 70280 27017 or email sales@revbridge.in for customized itineraries, quotes, and site visits.'
  },
  {
    icon: ShieldCheck,
    badge: 'AUTHENTIC PARTNERSHIP',
    title: 'Transparent & Aligned Growth',
    desc: 'No hidden agency fees or high third-party commissions. We operate on direct, transparent collaboration focused on real bookings and sustainable ADR.'
  }
]

export default function PerformanceMetrics({ onOpenModal }) {
  return (
    <section className="pillars-section" id="why-us">
      <div className="shell">
        <div className="pillars-header">
          <div className="badge-mono animate-float" style={{ margin: '0 auto 14px' }}>
            <Sparkles size={13} />
            <span>HOW REVBRIDGE DELIVERS VALUE</span>
          </div>
          <h2 className="section-title">Built for Hotel Owners &amp; Discerning Guests</h2>
          <p className="section-sub">
            Bridging premier independent resorts with high-value corporate offsites, weddings, and seamless direct bookings.
          </p>
        </div>

        <div className="pillars-grid">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="pillar-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="pillar-card__top">
                  <div className="pillar-card__icon-box">
                    <Icon size={22} />
                  </div>
                  <span className="pillar-card__badge">{item.badge}</span>
                </div>
                <h3 className="pillar-card__title">{item.title}</h3>
                <p className="pillar-card__desc">{item.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Quick Action Bar */}
        <div className="pillars-action-bar">
          <div className="pillars-action-text">
            <h4>Ready to explore collaboration or plan your next stay?</h4>
            <p>Call our Pune office directly or request a call back within 4 business hours.</p>
          </div>
          <div className="pillars-action-btns">
            <a href="tel:+917028027017" className="btn-secondary pillars-call-btn">
              <PhoneCall size={16} />
              <span>+91 70280 27017</span>
            </a>
            <button
              type="button"
              className="btn-primary"
              onClick={() => onOpenModal && onOpenModal('hotel')}
            >
              <span>Partner Your Property</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

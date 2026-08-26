import React from 'react'
import { Search, Building2, CalendarCheck, PhoneCall, Rocket, ArrowRight, Sparkles } from 'lucide-react'
import './HowItWorks.css'

const STEPS = [
  {
    step: '01',
    title: 'Consultation & Requirements Discovery',
    desc: 'For hotel owners: We assess your room inventory and target ADR. For guests & companies: We note your dates, guest count, and event specifications.',
    meta: 'Step 1: Direct Discovery Call',
    icon: Search
  },
  {
    step: '02',
    title: 'Custom Proposal & Direct Rate Alignment',
    desc: 'For hotel owners: We establish our dedicated sales mandate. For bookers: We provide transparent direct pricing, customized meal plans, and venue options.',
    meta: 'Step 2: Transparent Agreement',
    icon: Building2
  },
  {
    step: '03',
    title: 'Active Sales Outreach & On-Ground Execution',
    desc: 'For hotel owners: We pitch your property to corporate and wedding clients. For bookers: Our coordinator manages your booking and on-ground coordination.',
    meta: 'Step 3: Seamless Experience',
    icon: Rocket
  }
]

export default function HowItWorks({ onOpenModal }) {
  return (
    <section className="how-section" id="how-it-works">
      <div className="shell">
        <div className="how-header">
          <div className="badge-mono animate-float" style={{ margin: '0 auto 12px' }}>
            <Sparkles size={13} />
            <span>TRANSPARENT PROCESS</span>
          </div>
          <h2 className="section-title">A Clear Path for Partners &amp; Bookers</h2>
          <p className="section-sub">
            Whether partnering your property or arranging your next corporate offsite, we keep every step direct and transparent.
          </p>
        </div>

        <div className="how-grid">
          {STEPS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="how-card">
                <div className="how-card__top">
                  <span className="how-card__num">{item.step}</span>
                  <div className="how-card__icon-box">
                    <Icon size={20} />
                  </div>
                </div>
                <h3 className="how-card__title">{item.title}</h3>
                <p className="how-card__desc">{item.desc}</p>
                <div className="how-card__meta">{item.meta}</div>
              </div>
            )
          })}
        </div>

        <div className="how-cta-banner">
          <div className="how-cta-text">
            <h4>Have questions or need a quick quotation?</h4>
            <p>Call our Pune office directly at +91 70280 27017 or submit an online inquiry.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="tel:+917028027017" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <PhoneCall size={16} />
              <span>Call +91 70280 27017</span>
            </a>
            <button type="button" className="btn-primary" onClick={() => onOpenModal('hotel')}>
              <span>Collaborate With Us</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

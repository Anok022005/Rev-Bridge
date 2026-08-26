import React from 'react'
import { CalendarCheck, ShieldCheck, CheckCircle2, ArrowRight, Search, FileText, CheckCircle } from 'lucide-react'
import './HowItWorks.css'

const STEPS = [
  {
    num: '01',
    title: 'Discover & Inquire',
    desc: 'Browse our curated collection of verified luxury resorts or submit your group dates & retreat requirements directly to our Pune sales desk.',
    tag: 'Step 01 • Consultation',
    icon: Search
  },
  {
    num: '02',
    title: 'Direct Property Proposal',
    desc: 'Receive transparent, negotiated property tariffs, custom banquet menus, and room block agreements with 0% online agent markups.',
    tag: 'Step 02 • Direct Contracting',
    icon: FileText
  },
  {
    num: '03',
    title: 'Seamless Event Execution',
    desc: 'Enjoy dedicated relationship manager coordination from arrival to checkout, ensuring unforgettable offsites and flawless hospitality.',
    tag: 'Step 03 • Verified Experience',
    icon: CheckCircle
  }
]

export default function HowItWorks({ onOpenModal }) {
  return (
    <section className="sec sec-dark" id="workflow">
      <div className="con">
        <div className="how-header">
          <div className="lbl c">Streamlined Roadmap</div>
          <h2 className="ttl" style={{ textAlign: 'center' }}>
            How RevBridge <em>Delivers</em>
          </h2>
          <div className="gbar c" />
          <p className="sub" style={{ textAlign: 'center', margin: '0 auto 48px' }}>
            A frictionless commercial bridge designed for hotel owners seeking sales growth and corporate bookers demanding transparent luxury tariffs.
          </p>
        </div>

        <div className="how-grid">
          {STEPS.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div key={step.num} className="how-card glass-card">
                <div className="how-card-header">
                  <span className="how-card-num">{step.num}</span>
                  <div className="how-card-icon">
                    <IconComponent size={20} />
                  </div>
                </div>
                <h3 className="how-card-title">{step.title}</h3>
                <p className="how-card-desc">{step.desc}</p>
                <div className="how-card-tag">{step.tag}</div>
              </div>
            )
          })}
        </div>

        <div className="how-cta-banner">
          <div className="how-cta-text">
            <h4>Ready to Experience RevBridge Hospitality?</h4>
            <p>Connect directly with our Pune sales headquarters for immediate assistance.</p>
          </div>
          <div className="how-cta-actions">
            <button
              type="button"
              className="btn-g"
              onClick={() => onOpenModal('hotel')}
            >
              <span>Partner With Us</span>
            </button>
            <button
              type="button"
              className="btn-o"
              onClick={() => onOpenModal('booking')}
            >
              <span>Book A Stay</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

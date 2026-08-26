import React from 'react'
import { CalendarCheck, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react'
import './HowItWorks.css'

const STEPS = [
  {
    num: '01',
    title: 'Discover & Inquire',
    desc: 'Browse our handpicked luxury resorts or submit your corporate group requirements through our direct booking desk.',
    tag: 'Step 01 • Consultation'
  },
  {
    num: '02',
    title: 'Direct Proposal & Rates',
    desc: 'Receive transparent, negotiated property tariffs and custom banquet agendas with 0% online agent markups.',
    tag: 'Step 02 • Direct Contracting'
  },
  {
    num: '03',
    title: 'Seamless Event Execution',
    desc: 'Enjoy dedicated relationship manager support from arrival to checkout, ensuring memorable stays and flawless retreats.',
    tag: 'Step 03 • Verified Experience'
  }
]

export default function HowItWorks({ onOpenModal }) {
  return (
    <section className="sec sec-dark" id="workflow">
      <div className="con">
        <div className="how-header">
          <div className="lbl c">Streamlined Process</div>
          <h2 className="ttl" style={{ textAlign: 'center' }}>
            How RevBridge <em>Delivers</em>
          </h2>
          <div className="gbar c" />
          <p className="sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
            A seamless commercial gateway designed for hotel owners and corporate event planners alike.
          </p>
        </div>

        <div className="how-grid">
          {STEPS.map((step) => (
            <div key={step.num} className="how-card">
              <div className="how-card-num">{step.num}</div>
              <h3 className="how-card-title">{step.title}</h3>
              <p className="how-card-desc">{step.desc}</p>
              <div className="how-card-tag">{step.tag}</div>
            </div>
          ))}
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

import React, { useState } from 'react'
import {
  Building2,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  LineChart,
  PhoneCall,
  Sparkles,
  Award
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import './DualPerspective.css'

export default function DualPerspective({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('hotel') // 'hotel' or 'booking'

  return (
    <section className="dual-perspective" id="hotels">
      <div className="shell">
        <div className="dual-perspective__header">
          <div className="badge-mono animate-float" style={{ margin: '0 auto 12px' }}>
            <Sparkles size={13} />
            <span>TAILORED HOSPITALITY SOLUTIONS</span>
          </div>
          <h2 className="section-title">Designed For Property Owners &amp; Direct Bookers</h2>
          <p className="section-sub">
            Whether you are a resort owner looking to expand corporate sales or a planner booking
            luxury retreats across Maharashtra, RevBridge is your trusted bridge.
          </p>

          {/* Interactive Switcher Pill */}
          <div className="perspective-switch">
            <button
              type="button"
              className={`perspective-switch__btn ${activeTab === 'hotel' ? 'active' : ''}`}
              onClick={() => setActiveTab('hotel')}
            >
              <Building2 size={17} />
              <span>For Hotels &amp; Resorts (Collaborate)</span>
            </button>
            <button
              type="button"
              className={`perspective-switch__btn ${activeTab === 'booking' ? 'active' : ''}`}
              onClick={() => setActiveTab('booking')}
            >
              <CalendarCheck size={17} />
              <span>For Guests &amp; Corporate Bookers</span>
            </button>
          </div>
        </div>

        {/* Dynamic Perspective Content */}
        <div className="perspective-content">
          {activeTab === 'hotel' ? (
            <div className="perspective-pane animate-fade-in">
              {/* Feature Grid for Hotels */}
              <div className="perspective-grid">
                <SpotlightCard className="perspective-card">
                  <div className="perspective-card__icon-box">
                    <Zap size={22} />
                  </div>
                  <h3 className="perspective-card__title">Pan-India Corporate &amp; MICE Reach</h3>
                  <p className="perspective-card__desc">
                    We actively represent your property across key corporate hubs in Pune and Mumbai,
                    securing high-margin corporate offsites, annual conferences, and destination weddings.
                  </p>
                  <ul className="perspective-card__list">
                    <li><CheckCircle2 size={15} /> Direct outreach to corporate event planners &amp; travel desks</li>
                    <li><CheckCircle2 size={15} /> Proactive lead generation for off-season and weekday dates</li>
                  </ul>
                </SpotlightCard>

                <SpotlightCard className="perspective-card">
                  <div className="perspective-card__icon-box">
                    <LineChart size={22} />
                  </div>
                  <h3 className="perspective-card__title">Direct Booking Focus &amp; ADR Lift</h3>
                  <p className="perspective-card__desc">
                    Reduce over-dependence on discounted OTA channels. We drive high-value direct inquiries
                    that protect your property's average daily room rate (ADR) and profit margins.
                  </p>
                  <ul className="perspective-card__list">
                    <li><CheckCircle2 size={15} /> Higher profit margins on direct group bookings</li>
                    <li><CheckCircle2 size={15} /> Tailored room package strategies for luxury chalets &amp; suites</li>
                  </ul>
                </SpotlightCard>

                <SpotlightCard className="perspective-card">
                  <div className="perspective-card__icon-box">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="perspective-card__title">Dedicated Sales Representation</h3>
                  <p className="perspective-card__desc">
                    Gain a professional commercial representation team without the heavy overhead of hiring,
                    training, and managing an internal multi-city sales force.
                  </p>
                  <ul className="perspective-card__list">
                    <li><CheckCircle2 size={15} /> Flexible, performance-aligned partnership terms</li>
                    <li><CheckCircle2 size={15} /> Transparent reporting on client inquiries and closed bookings</li>
                  </ul>
                </SpotlightCard>
              </div>

              {/* Comparison Matrix for Hotels */}
              <div className="perspective-matrix">
                <div className="matrix-col matrix-col--bad">
                  <h4 className="matrix-title">Traditional In-House Sales Hiring</h4>
                  <ul className="matrix-list">
                    <li><XCircle size={16} /> High fixed monthly salary &amp; travel overheads with uncertain ROI</li>
                    <li><XCircle size={16} /> Limited to a single person's local contact radius</li>
                    <li><XCircle size={16} /> Heavy time investment in hiring, onboarding, and monitoring</li>
                    <li><XCircle size={16} /> Vulnerable to sudden staff attrition during peak season</li>
                  </ul>
                </div>

                <div className="matrix-col matrix-col--good">
                  <div className="matrix-badge">REVBRIDGE ALLIANCE</div>
                  <h4 className="matrix-title">RevBridge Sales Representation</h4>
                  <ul className="matrix-list">
                    <li><CheckCircle2 size={16} /> Dedicated commercial team actively pitching your property</li>
                    <li><CheckCircle2 size={16} /> Established corporate relationships across Maharashtra &amp; beyond</li>
                    <li><CheckCircle2 size={16} /> Aligned incentives focused on real room nights &amp; banquet revenue</li>
                    <li><CheckCircle2 size={16} /> Rapid onboarding and commercial strategy launch in 48 hours</li>
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="perspective-bottom-cta">
                <button type="button" className="btn-primary" onClick={() => onOpenModal('hotel')}>
                  <span>Partner Your Property with RevBridge</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="perspective-pane animate-fade-in" id="book-stays">
              {/* Feature Grid for Bookers */}
              <div className="perspective-grid">
                <SpotlightCard className="perspective-card">
                  <div className="perspective-card__icon-box">
                    <Award size={22} />
                  </div>
                  <h3 className="perspective-card__title">Handpicked Luxury Properties</h3>
                  <p className="perspective-card__desc">
                    Book verified premier resorts — including Aamby Valley City, The Foresta Resort Mulshi,
                    and Meritas Countryside Resort Lonavala — with complete confidence in quality and amenities.
                  </p>
                  <ul className="perspective-card__list">
                    <li><CheckCircle2 size={15} /> Private pool chalets, mountain view suites &amp; scenic lawns</li>
                    <li><CheckCircle2 size={15} /> Ideal venues for family reunions, corporate offsites &amp; celebrations</li>
                  </ul>
                </SpotlightCard>

                <SpotlightCard className="perspective-card">
                  <div className="perspective-card__icon-box">
                    <PhoneCall size={22} />
                  </div>
                  <h3 className="perspective-card__title">Direct Coordinator Support</h3>
                  <p className="perspective-card__desc">
                    Skip anonymous booking portals. Talk directly with our hospitality coordinators via phone
                    or email for customized meal plans, conference setups, and special room arrangements.
                  </p>
                  <ul className="perspective-card__list">
                    <li><CheckCircle2 size={15} /> Call directly: +91 70280 27017 / +91 93708 72231</li>
                    <li><CheckCircle2 size={15} /> Fast turnaround on group quotes and site visit coordination</li>
                  </ul>
                </SpotlightCard>

                <SpotlightCard className="perspective-card">
                  <div className="perspective-card__icon-box">
                    <ShieldCheck size={22} />
                  </div>
                  <h3 className="perspective-card__title">Direct Rates &amp; Group Perks</h3>
                  <p className="perspective-card__desc">
                    Enjoy transparent pricing directly from the property management, with exclusive group discounts
                    and bespoke add-ons tailored to your retreat or event.
                  </p>
                  <ul className="perspective-card__list">
                    <li><CheckCircle2 size={15} /> No hidden platform convenience fees</li>
                    <li><CheckCircle2 size={15} /> Dedicated assistance from booking to check-out</li>
                  </ul>
                </SpotlightCard>
              </div>

              {/* Comparison Matrix for Bookers */}
              <div className="perspective-matrix">
                <div className="matrix-col matrix-col--bad">
                  <h4 className="matrix-title">Booking via Generic Online Portals</h4>
                  <ul className="matrix-list">
                    <li><XCircle size={16} /> Zero human assistance for group room allocation and banquet needs</li>
                    <li><XCircle size={16} /> Impersonal customer care bots during scheduling changes</li>
                    <li><XCircle size={16} /> Inflated third-party convenience fees and markup rates</li>
                    <li><XCircle size={16} /> No customized corporate conference or wedding packages</li>
                  </ul>
                </div>

                <div className="matrix-col matrix-col--good">
                  <div className="matrix-badge">REVBRIDGE DIRECT DESK</div>
                  <h4 className="matrix-title">Booking via RevBridge Direct Desk</h4>
                  <ul className="matrix-list">
                    <li><CheckCircle2 size={16} /> Dedicated hospitality coordinator managing your entire itinerary</li>
                    <li><CheckCircle2 size={16} /> Direct telephone support (+91 7028027017 / +91 9370872231)</li>
                    <li><CheckCircle2 size={16} /> Tailored packages for corporate offsites, banquets &amp; families</li>
                    <li><CheckCircle2 size={16} /> Direct property rates and personalized on-ground coordination</li>
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="perspective-bottom-cta">
                <button type="button" className="btn-primary" onClick={() => onOpenModal('booking')}>
                  <span>Inquire for Stays, Offsites &amp; Events</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

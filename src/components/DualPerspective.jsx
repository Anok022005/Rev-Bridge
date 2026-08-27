import React, { useState } from 'react'
import { Building2, CalendarCheck, Check, ArrowRight, ShieldCheck, TrendingUp, Users, DollarSign } from 'lucide-react'
import './DualPerspective.css'

export default function DualPerspective({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('hotels')

  return (
    <section className="sec sec-dark dual-sec" id="partnership">
      <div className="con">
        <div className="dual-header">
          <div className="lbl c">Two Tailored Tracks</div>
          <h2 className="ttl" style={{ textAlign: 'center' }}>
            Built for <em>Hotel Owners</em> &amp; <em>Corporate Bookers</em>
          </h2>
          <div className="gbar c" />
          <p className="sub" style={{ textAlign: 'center', margin: '0 auto 36px' }}>
            Whether you own an independent luxury resort seeking dedicated sales representation, or you are planning
            a high-stakes corporate retreat, RevBridge delivers specialized commercial execution.
          </p>

          {/* Track Switcher */}
          <div className="dual-switch">
            <button
              type="button"
              className={`dual-switch-btn ${activeTab === 'hotels' ? 'active' : ''}`}
              onClick={() => setActiveTab('hotels')}
            >
              <Building2 size={15} />
              <span>For Hotel &amp; Resort Owners</span>
            </button>
            <button
              type="button"
              className={`dual-switch-btn ${activeTab === 'guests' ? 'active' : ''}`}
              onClick={() => setActiveTab('guests')}
            >
              <CalendarCheck size={15} />
              <span>For Corporate Planners &amp; Guests</span>
            </button>
          </div>
        </div>

        {/* Tab Content 1: For Hotels */}
        {activeTab === 'hotels' ? (
          <div className="dual-content">
            <div className="dual-card-grid">
              <div className="dual-feature-card">
                <div className="dual-feature-num">01</div>
                <h3 className="dual-feature-title">Pan-India Sales Force</h3>
                <p className="dual-feature-desc">
                  We deploy an active B2B corporate sales presence across key feeder hubs including Pune, Mumbai, and Gujarat.
                </p>
                <ul className="dual-feature-list">
                  <li><Check size={13} /> Active Corporate RFP representation</li>
                  <li><Check size={13} /> MICE travel desk contracting</li>
                  <li><Check size={13} /> Elite wedding planner network</li>
                </ul>
              </div>

              <div className="dual-feature-card">
                <div className="dual-feature-num">02</div>
                <h3 className="dual-feature-title">Zero Fixed Payroll Burden</h3>
                <p className="dual-feature-desc">
                  Replace expensive fixed regional sales teams and metro office overheads with a performance-driven revenue structure.
                </p>
                <ul className="dual-feature-list">
                  <li><Check size={13} /> Immediate sales desk activation</li>
                  <li><Check size={13} /> Transparent monthly performance reviews</li>
                  <li><Check size={13} /> Focus on high ADR &amp; weekday occupancy</li>
                </ul>
              </div>

              <div className="dual-feature-card">
                <div className="dual-feature-num">03</div>
                <h3 className="dual-feature-title">Complete Brand Preservation</h3>
                <p className="dual-feature-desc">
                  Your resort maintains 100% brand identity and direct guest relations — we act as your dedicated sales arm.
                </p>
                <ul className="dual-feature-list">
                  <li><Check size={13} /> Direct resort voucher confirmation</li>
                  <li><Check size={13} /> Strict rate integrity protection</li>
                  <li><Check size={13} /> Long-term institutional trust</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          /* Tab Content 2: For Bookers */
          <div className="dual-content">
            <div className="dual-card-grid">
              <div className="dual-feature-card">
                <div className="dual-feature-num">01</div>
                <h3 className="dual-feature-title">Direct Negotiated Tariffs</h3>
                <p className="dual-feature-desc">
                  Get verified luxury property rates with zero online travel agent markup or middleman fees.
                </p>
                <ul className="dual-feature-list">
                  <li><Check size={13} /> Best rate guarantee directly from resorts</li>
                  <li><Check size={13} /> Complimentary room upgrades when available</li>
                  <li><Check size={13} /> Direct tax invoices from the property</li>
                </ul>
              </div>

              <div className="dual-feature-card">
                <div className="dual-feature-num">02</div>
                <h3 className="dual-feature-title">Dedicated Corporate Concierge</h3>
                <p className="dual-feature-desc">
                  Single point of contact for corporate offsites, banqueting, AV setups, team outings, and room allocations.
                </p>
                <ul className="dual-feature-list">
                  <li><Check size={13} /> Custom offsite agenda planning</li>
                  <li><Check size={13} /> Pre-vetted boardrooms and convention halls</li>
                  <li><Check size={13} /> On-ground event coordination</li>
                </ul>
              </div>

              <div className="dual-feature-card">
                <div className="dual-feature-num">03</div>
                <h3 className="dual-feature-title">Verified Luxury Guarantee</h3>
                <p className="dual-feature-desc">
                  Every listed resort in our alliance is personally inspected for hygiene, service standards, and culinary excellence.
                </p>
                <ul className="dual-feature-list">
                  <li><Check size={13} /> Verified guest amenities &amp; safety</li>
                  <li><Check size={13} /> 24/7 dedicated support desk</li>
                  <li><Check size={13} /> Flexible cancellation terms for groups</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

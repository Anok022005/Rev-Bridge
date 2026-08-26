import React from 'react'
import { Building2, CalendarCheck, ShieldCheck, Award, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import './AboutSection.css'

export default function AboutSection({ onOpenModal }) {
  return (
    <section className="sec sec-dark about-sec" id="about">
      <div className="con">
        <div className="about-grid">
          {/* Left Column */}
          <div className="about-left">
            <div className="lbl">About The Alliance</div>
            <h2 className="ttl">
              Think Hospitality. <br />
              <em>Think RevBridge.</em>
            </h2>
            <div className="gbar" />

            <p className="about-lead">
              RevBridge is India's dedicated hotel sales leadership alliance based in Pune, Maharashtra.
              We represent handpicked independent luxury resorts, mountain sanctuaries, and corporate business hotels
              with direct corporate offsites, destination weddings, and leisure guests.
            </p>

            <p className="sub">
              By acting as an integrated commercial sales extension for independent properties, we eliminate fixed
              corporate sales overheads for hotel owners while offering event planners and guests guaranteed
              direct-from-property tariffs with zero intermediary markups.
            </p>

            {/* Feature Checklist */}
            <div className="about-checklist">
              <div className="about-check-item">
                <CheckCircle2 size={16} className="about-check-icon" />
                <span>Dedicated Regional B2B Corporate Sales Presence</span>
              </div>
              <div className="about-check-item">
                <CheckCircle2 size={16} className="about-check-icon" />
                <span>100% Direct Property Vouchers &amp; Billing</span>
              </div>
              <div className="about-check-item">
                <CheckCircle2 size={16} className="about-check-icon" />
                <span>Zero Broker Commission / Zero Middleman Markup</span>
              </div>
            </div>

            <div className="about-actions">
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
                <span>For Guests: Direct Booking</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Glowing Stat Cards */}
          <div className="about-right">
            <div className="about-card glass-card">
              <div className="about-card-top">
                <span className="about-card-num">01</span>
                <div className="about-card-icon-wrap">
                  <TrendingUp size={20} />
                </div>
              </div>
              <div className="about-card-title">Commercial Representation</div>
              <p className="about-card-text">
                Active regional corporate contracting and MICE travel desk representation across Pune, Mumbai, and feeder markets.
              </p>
            </div>

            <div className="about-card glass-card">
              <div className="about-card-top">
                <span className="about-card-num">02</span>
                <div className="about-card-icon-wrap">
                  <ShieldCheck size={20} />
                </div>
              </div>
              <div className="about-card-title">Direct Booking Desk</div>
              <p className="about-card-text">
                Direct negotiated resort tariffs, custom banquet agendas, and rapid inquiry fulfillment within 2 hours.
              </p>
            </div>

            <div className="about-card glass-card">
              <div className="about-card-top">
                <span className="about-card-num">03</span>
                <div className="about-card-icon-wrap">
                  <Award size={20} />
                </div>
              </div>
              <div className="about-card-title">Verified Luxury Portfolio</div>
              <p className="about-card-text">
                Handpicked, quality-inspected properties across Lonavala, Mulshi, and Pune business corridors.
              </p>
            </div>

            <div className="about-card glass-card">
              <div className="about-card-top">
                <span className="about-card-num">04</span>
                <div className="about-card-icon-wrap">
                  <Sparkles size={20} />
                </div>
              </div>
              <div className="about-card-title">Zero Broker Markup</div>
              <p className="about-card-text">
                Direct resort vouchers, transparent contracts, and dedicated relationship manager from inquiry to checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

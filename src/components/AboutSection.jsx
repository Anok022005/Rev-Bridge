import React from 'react'
import { Building2, CalendarCheck, ShieldCheck, Award, ArrowRight } from 'lucide-react'
import './AboutSection.css'

export default function AboutSection({ onOpenModal }) {
  return (
    <section className="sec sec-dark about-sec" id="about">
      <div className="con">
        <div className="about-grid">
          {/* Left Column */}
          <div className="about-left">
            <div className="lbl">About RevBridge</div>
            <h2 className="ttl">
              Think Hospitality. <br />
              <em>Think RevBridge.</em>
            </h2>
            <div className="gbar" />
            <p className="about-lead">
              RevBridge is a premier hotel sales leadership alliance based in Pune, Maharashtra. We bridge
              handpicked luxury resorts, serene mountain sanctuaries, and independent hotel brands with high-value
              corporate offsites, grand destination weddings, and direct leisure travelers.
            </p>
            <p className="sub">
              By acting as an integrated commercial sales extension for independent properties, we eliminate fixed
              corporate sales payrolls for hotel owners while offering corporate bookers and guests direct-from-property
              rates with zero intermediary markups.
            </p>

            <div className="about-actions">
              <button
                type="button"
                className="btn-g"
                onClick={() => onOpenModal('hotel')}
              >
                <span>For Hotels: Partner With Us</span>
              </button>
              <button
                type="button"
                className="btn-o"
                onClick={() => onOpenModal('booking')}
              >
                <span>For Guests: Direct Booking</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Stat/Pillar Cards */}
          <div className="about-right">
            <div className="about-card">
              <div className="about-card-num">01</div>
              <div className="about-card-title">Commercial Representation</div>
              <p className="about-card-text">
                Dedicated regional sales representation across Pune, Mumbai, and feeder markets for luxury resorts.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-num">02</div>
              <div className="about-card-title">Direct Booking Desk</div>
              <p className="about-card-text">
                Instant inquiry coordination, verified luxury tariffs, and bespoke itinerary planning for corporate groups.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-num">03</div>
              <div className="about-card-title">Curated Destinations</div>
              <p className="about-card-text">
                Handpicked verified properties in Lonavala, Mulshi, Khandala, and scenic Western Ghats corridors.
              </p>
            </div>

            <div className="about-card">
              <div className="about-card-num">04</div>
              <div className="about-card-title">Zero Broker Markup</div>
              <p className="about-card-text">
                Transparent billing, direct resort vouchers, and dedicated relationship manager from inquiry to checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import {
  Sparkles,
  ShieldCheck,
  Building2,
  Check,
  PhoneCall,
  CalendarCheck,
  MapPin,
  Users
} from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import './BentoGrid.css'

const INQUIRY_SEGMENTS = [
  {
    id: 'offsite',
    label: 'Corporate Offsites & MICE',
    desc: 'Annual conferences, leadership summits & team-building retreats',
    typicalKeys: '20–100+ Rooms',
    support: 'Custom banquets, conference AV & team activities'
  },
  {
    id: 'wedding',
    label: 'Destination Weddings',
    desc: 'Grand lawn ceremonies, lakeside mandaps & full resort buyouts',
    typicalKeys: '30–150+ Rooms',
    support: 'Lawn decor tie-ups, catering coordination & hospitality desk'
  },
  {
    id: 'staycation',
    label: 'Family & Luxury Staycations',
    desc: 'Weekend chalets, private pool suites & peaceful nature getaways',
    typicalKeys: '1–5 Chalets',
    support: 'Guaranteed best direct rates & personalized check-in support'
  },
  {
    id: 'csuite',
    label: 'Executive Leadership Retreats',
    desc: 'High-privacy hillside chalets with curated gourmet dining',
    typicalKeys: '5–15 Suites',
    support: 'Confidential meeting setups & dedicated butler services'
  }
]

export default function BentoGrid({ onOpenModal }) {
  const [selectedSegment, setSelectedSegment] = useState('offsite')
  const currentSegment = INQUIRY_SEGMENTS.find((s) => s.id === selectedSegment) || INQUIRY_SEGMENTS[0]

  return (
    <section className="bento-section" id="features">
      <div className="shell">
        <div className="bento-section__header">
          <div className="badge-mono animate-float" style={{ margin: '0 auto 12px' }}>
            <Sparkles size={13} />
            <span>COMMERCIAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">Dedicated Sales Power &amp; Guest Coordination</h2>
          <p className="section-sub">
            Bridging premier independent resorts with high-value corporate offsites, weddings, and seamless direct bookings.
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Interactive Segment Selector (Span 2 Cols) */}
          <SpotlightCard className="bento-card bento-card--large">
            <div className="bento-card__badge">
              <Building2 size={13} />
              <span>COMMERCIAL SALES REPRESENTATION</span>
            </div>

            <div className="bento-card__content">
              <h3 className="bento-card__title">Specialized Group Sales Across Key Segments</h3>
              <p className="bento-card__desc">
                We represent partner properties directly to corporate travel heads, event managers, and wedding planners,
                securing high-margin group room blocks throughout the year.
              </p>

              {/* Interactive Segment Box */}
              <div className="bento-interactive-box">
                <div className="bento-box-label">EXPLORE SEGMENT SUPPORT:</div>
                <div className="bento-filter-chips">
                  {INQUIRY_SEGMENTS.map((segment) => (
                    <button
                      key={segment.id}
                      type="button"
                      className={`bento-chip ${selectedSegment === segment.id ? 'active' : ''}`}
                      onClick={() => setSelectedSegment(segment.id)}
                    >
                      {segment.label}
                    </button>
                  ))}
                </div>

                <div className="bento-match-result">
                  <div className="bento-result-left">
                    <span className="bento-result-tag">{currentSegment.label}</span>
                    <h4 className="bento-result-name">{currentSegment.desc}</h4>
                    <span className="bento-result-meta">
                      Scope: {currentSegment.typicalKeys} • {currentSegment.support}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 2: Direct Booking Desk */}
          <SpotlightCard className="bento-card">
            <div className="bento-card__badge">
              <PhoneCall size={13} />
              <span>DIRECT GUEST DESK</span>
            </div>
            <div className="bento-card__content">
              <h3 className="bento-card__title">Personalized Call &amp; Email Booking Support</h3>
              <p className="bento-card__desc">
                Skip anonymous portals. Speak directly with our reservation desk in Pune for instant property recommendations and customized quotes.
              </p>

              <div className="bento-pipeline-mock">
                <div className="bento-pipeline-row">
                  <div className="bento-pipeline-status bento-pipeline-status--won">PHONE</div>
                  <div className="bento-pipeline-text">
                    <strong>+91 70280 27017</strong>
                    <span>Direct Call Assistance</span>
                  </div>
                </div>

                <div className="bento-pipeline-row">
                  <div className="bento-pipeline-status bento-pipeline-status--won">EMAIL</div>
                  <div className="bento-pipeline-text">
                    <strong>sales@revbridge.in</strong>
                    <span>Fast RFP &amp; Quote Response</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: Transparent Partnership Assurance */}
          <SpotlightCard className="bento-card">
            <div className="bento-card__badge">
              <ShieldCheck size={13} />
              <span>AUTHENTIC ALLIANCE</span>
            </div>
            <div className="bento-card__content">
              <h3 className="bento-card__title">Direct Collaboration &amp; Zero Hidden Fees</h3>
              <p className="bento-card__desc">
                We work as a transparent sales partner for hotel owners, and provide verified best rates directly for travelers and corporate organizers.
              </p>

              <div className="bento-escrow-list">
                <div className="bento-escrow-item">
                  <Check size={16} className="bento-check" />
                  <span>Direct Property Management Rates</span>
                </div>
                <div className="bento-escrow-item">
                  <Check size={16} className="bento-check" />
                  <span>Dedicated Event &amp; Stay Coordinator</span>
                </div>
                <div className="bento-escrow-item">
                  <Check size={16} className="bento-check" />
                  <span>48-Hour Onboarding for New Hotels</span>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 4: Key Corporate Feeder Hubs */}
          <SpotlightCard className="bento-card bento-card--large">
            <div className="bento-card__badge">
              <MapPin size={13} />
              <span>REGIONAL CORPORATE REACH</span>
            </div>
            <div className="bento-card__content">
              <h3 className="bento-card__title">Active Commercial Channels Across Major Corporate Hubs</h3>
              <p className="bento-card__desc">
                RevBridge actively pitches partner resorts to enterprise clients, HR heads, and event organizers situated across Maharashtra and Western India.
              </p>

              <div className="bento-market-tags">
                <div className="bento-market-tag">
                  <span className="bento-market-city">Pune Tech &amp; Auto Corridors</span>
                  <span className="bento-market-role">Hinjawadi, Kharadi, Magarpatta IT Parks</span>
                </div>
                <div className="bento-market-tag">
                  <span className="bento-market-city">Mumbai Financial Hubs</span>
                  <span className="bento-market-role">BKC, Lower Parel &amp; Andheri Commercial</span>
                </div>
                <div className="bento-market-tag">
                  <span className="bento-market-city">Gujarat &amp; Western India</span>
                  <span className="bento-market-role">Ahmedabad &amp; Surat Wedding Planners</span>
                </div>
                <div className="bento-market-tag">
                  <span className="bento-market-city">Pan-India Corporate Desks</span>
                  <span className="bento-market-role">Enterprise Offsites &amp; Summits</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { MapPin, Sparkles, Clock, Compass, ShieldCheck, ArrowUpRight } from 'lucide-react'
import './UpcomingProperties.css'

const UPCOMING_DESTINATIONS = [
  {
    id: 'karjat',
    destination: 'Karjat',
    state: 'Maharashtra',
    propertyType: 'Riverside Nature Sanctuary & Wellness Retreat',
    tagline: 'Private Riverfront Cottages & Forest Trail Outings',
    status: 'Onboarding in Progress',
    launchDate: 'Launching Q3 2026',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Riverfront Timber Cottages & Private Decks',
      'Open-Air Amphitheatre for Offsites',
      'Curated Trekking & Forest Wellness Trails',
      'Close highway access from Mumbai & Pune'
    ]
  },
  {
    id: 'goa',
    destination: 'Goa',
    state: 'Goa Coast',
    propertyType: 'Coastal Luxury Beachfront Resort & Event Lawn',
    tagline: 'Private Beach Access & Grand Sunset Wedding Decks',
    status: 'Commercial Sales Finalized',
    launchDate: 'Launching Q4 2026',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      'Private Beachfront Access & Sunset Lounges',
      'Grand Destination Wedding Lawns for 600+ Guests',
      'Sea-Facing Private Pool Villas',
      'Turnkey Event Banqueting & Coastal Dining'
    ]
  },
  {
    id: 'mahabaleshwar',
    destination: 'Mahabaleshwar',
    state: 'Maharashtra',
    propertyType: 'Mountain Ridge Suites & Valley View Estate',
    tagline: 'Heritage Cloud-View Suites & Valley Banquet Lawns',
    status: 'Integration in Progress',
    launchDate: 'Launching Q4 2026',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    highlights: [
      '360° Misty Valley & Mountain Ridge Vistas',
      'Executive Leadership Retreat Boardrooms',
      'Heated Infinity Pool & Strawberry Valley Lawn',
      'Bespoke Family Suites & Fine Dining'
    ]
  }
]

export default function UpcomingProperties() {
  return (
    <section className="sec sec-card upcoming-sec" id="upcoming">
      <div className="con">
        <div className="upcoming-header">
          <div className="lbl c">Expanding Alliance</div>
          <h2 className="ttl" style={{ textAlign: 'center' }}>
            Upcoming Destinations &amp; <em>Properties</em>
          </h2>
          <div className="gbar c" />
          <p className="sub" style={{ textAlign: 'center', margin: '0 auto 44px' }}>
            Expanding our curated commercial sales network into premier leisure, corporate retreat, and wedding
            corridors across Karjat, Goa, and Mahabaleshwar.
          </p>
        </div>

        <div className="upcoming-grid">
          {UPCOMING_DESTINATIONS.map((item) => (
            <article key={item.id} className="upcoming-card glass-card">
              <div className="upcoming-img-wrap">
                <img src={item.image} alt={item.propertyType} className="upcoming-img" />
                <div className="upcoming-img-scrim" />

                {/* Top Floating Badges */}
                <div className="upcoming-top-badges">
                  <span className="upcoming-dest-badge">
                    <MapPin size={11} />
                    {item.destination} • {item.state}
                  </span>
                  <span className="upcoming-launch-badge">
                    <Clock size={11} />
                    {item.launchDate}
                  </span>
                </div>

                <div className="upcoming-status-pill">
                  <span className="upcoming-status-dot" />
                  <span>{item.status}</span>
                </div>
              </div>

              <div className="upcoming-body">
                <div className="upcoming-dest-title">{item.destination}</div>
                <h3 className="upcoming-prop-type">{item.propertyType}</h3>
                <p className="upcoming-tagline">{item.tagline}</p>

                <div className="upcoming-highlights-title">Key Planned Inclusions</div>
                <ul className="upcoming-highlights-list">
                  {item.highlights.map((h, idx) => (
                    <li key={idx}>
                      <span className="upcoming-check-dot" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="upcoming-card-footer">
                  <div className="upcoming-verified-tag">
                    <ShieldCheck size={13} />
                    <span>Exclusive Alliance Contract</span>
                  </div>
                  <span className="upcoming-soon-text">Coming Soon</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

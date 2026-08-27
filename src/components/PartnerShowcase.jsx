import React, { useState } from 'react'
import { MapPin, Users, Sparkles, Check, Phone, ArrowRight, ExternalLink, CalendarCheck, ShieldCheck } from 'lucide-react'
import './PartnerShowcase.css'

const PROPERTIES = [
  {
    id: 'aamby-valley',
    name: 'Aamby Valley City',
    tagline: '10,000-Acre Master Planned Mountain Luxury Township & MICE Haven',
    location: 'Lonavala, Maharashtra',
    category: 'Luxury Township & MICE Destination',
    destTag: 'Lonavala',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'India’s premier independent luxury township featuring timber chalets, Spanish cottages, 18-hole championship golf course, private airstrip, and world-class banquet convention arenas for grand offsites and weddings.',
    amenities: [
      '18-Hole Championship Golf Course & Private Airstrip',
      'Water Sports Arena & Adventure Activity Park',
      'Over 10 Multi-Cuisine Gourmet Restaurants',
      'Convention Arenas for up to 3,000+ Delegates',
      'Timber Chalets & Spanish Lake Cottages'
    ],
    capacity: '50 to 3,000+ Guests',
    officialUrl: 'https://www.aambyvalley.com'
  },
  {
    id: 'the-foresta-mulshi',
    name: 'The Foresta Resort',
    tagline: 'Eco-Luxury Nature Sanctuary & Corporate Retreat by Mulshi Lake',
    location: 'Mulshi, Pune Outskirts, Maharashtra',
    category: 'Nature Sanctuary & Executive Retreat',
    destTag: 'Mulshi',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Nestled amidst the lush valleys and tranquil waters of Mulshi, The Foresta Resort offers serene lake-view suites, open manicured lawns, state-of-the-art corporate boardrooms, and organic farm-to-table dining.',
    amenities: [
      'Panoramic Mulshi Lake View Luxury Suites',
      'Infinity Pool overlooking Western Ghats Peaks',
      'Acoustic Boardrooms for Leadership Offsites',
      'Open Landscaped Lawns for 500+ Attendees',
      'Curated Trekking & Wellness Nature Trails'
    ],
    capacity: '20 to 500 Guests',
    officialUrl: null
  },
  {
    id: 'ivy-studios',
    name: 'Hotel Ivy Studios',
    tagline: 'Contemporary Business Hotel & Suites by Lotus Group • 2 km from Airport',
    location: 'Viman Nagar, Pune, Maharashtra',
    category: 'Corporate Hotel & Executive Suites',
    destTag: 'Pune',
    images: [
      'https://hotelivystudios.com/wp-content/uploads/2023/07/1-1.png',
      'https://hotelivystudios.com/wp-content/uploads/2023/07/2-1.png',
      'https://hotelivystudios.com/wp-content/uploads/2023/07/3-1.png',
      'https://hotelivystudios.com/wp-content/uploads/2023/07/4-1.png'
    ],
    desc: 'Run by the Lotus Group with over 25 years of hospitality experience, Hotel Ivy Studios offers contemporary Suite, Superior, and Executive accommodations, a 5th-floor open sky terrace, state-of-the-art conference banquets, and gourmet dining just 2 km from Pune International Airport.',
    amenities: [
      'Luxury Suite, Superior & Executive Rooms',
      '5th-Floor Open Sky Terrace for Private & Corporate Events',
      'Equipped Air-Conditioned Conference Banquet Hall',
      'In-House Multi-Cuisine Restaurant with Buffet Dining',
      '2 km from Pune Airport • Near Phoenix Market City'
    ],
    capacity: '10 to 200 Guests',
    officialUrl: 'https://hotelivystudios.com/'
  }
]

const FILTERS = ['All Properties', 'Lonavala', 'Mulshi', 'Pune']

export default function PartnerShowcase({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All Properties')
  const [activePhotoIdx, setActivePhotoIdx] = useState({
    'aamby-valley': 0,
    'the-foresta-mulshi': 0,
    'ivy-studios': 0
  })

  const filteredProperties = PROPERTIES.filter((prop) => {
    if (activeFilter === 'All Properties') return true
    return prop.destTag === activeFilter
  })

  const handlePhotoSelect = (propId, photoIdx) => {
    setActivePhotoIdx((prev) => ({ ...prev, [propId]: photoIdx }))
  }

  return (
    <section className="sec sec-dark" id="hotels">
      <div className="con">
        {/* Section Header */}
        <div className="hotels-header">
          <div className="lbl c">Curated Portfolio</div>
          <h2 className="ttl" style={{ textAlign: 'center' }}>
            Handpicked Luxury Resorts &amp; <em>Retreats</em>
          </h2>
          <div className="gbar c" />
          <p className="sub" style={{ textAlign: 'center', margin: '0 auto 36px' }}>
            Explore our verified collection of independent luxury resorts and business suites across Maharashtra.
            Book directly through our Pune sales desk with guaranteed zero intermediary markup.
          </p>

          {/* Filter Bar with Smooth Pill Indicator */}
          <div className="hotels-filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`hotels-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="hotels-grid">
          {filteredProperties.map((prop) => {
            const currentImgIdx = activePhotoIdx[prop.id] || 0
            const currentImgUrl = prop.images[currentImgIdx]

            return (
              <article key={prop.id} className="hotel-card glass-card">
                {/* Top Image Box */}
                <div className="hotel-img-box">
                  <img src={currentImgUrl} alt={prop.name} className="hotel-img" />
                  <div className="hotel-img-scrim" />

                  {/* Top Badges */}
                  <div className="hotel-badges">
                    <span className="hotel-dest-badge">
                      <MapPin size={11} />
                      {prop.location}
                    </span>
                    <span className="hotel-cat-badge">{prop.category}</span>
                  </div>

                  {/* Photo Switcher Bar */}
                  <div className="hotel-photo-bar">
                    <span className="hotel-capacity">
                      <Users size={12} />
                      {prop.capacity}
                    </span>
                    <div className="hotel-thumbs">
                      {prop.images.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className={`hotel-thumb ${idx === currentImgIdx ? 'active' : ''}`}
                          onClick={() => handlePhotoSelect(prop.id, idx)}
                          aria-label={`View photo ${idx + 1} of ${prop.name}`}
                        >
                          <img src={img} alt="" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="hotel-body">
                  <div className="hotel-title-row">
                    <div>
                      <h3 className="hotel-name">{prop.name}</h3>
                      <div className="hotel-tagline">{prop.tagline}</div>
                    </div>
                    {prop.officialUrl && (
                      <a
                        href={prop.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hotel-ext-link"
                        title="Official Property Website"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  <p className="hotel-desc">{prop.desc}</p>

                  <div className="hotel-amenities-title">Resort Highlights</div>
                  <ul className="hotel-amenities-list">
                    {prop.amenities.map((amenity, i) => (
                      <li key={i}>
                        <Check size={14} className="amenity-check" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Bottom Meta */}
                  <div className="hotel-card-actions">
                    <div className="hotel-verified-badge">
                      <ShieldCheck size={14} className="amenity-check" />
                      <span>Verified Alliance Property</span>
                    </div>
                    <div className="hotel-rate-pill">
                      <span>0% Broker Markup</span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import React, { useState } from 'react'
import { MapPin, Users, Sparkles, Check, Phone, ArrowRight, ExternalLink, CalendarCheck } from 'lucide-react'
import './PartnerShowcase.css'

const PROPERTIES = [
  {
    id: 'aamby-valley',
    name: 'Aamby Valley City',
    tagline: '10,000-Acre Master Planned Luxury Resort Township',
    location: 'Lonavala, Maharashtra',
    category: 'Luxury Township & MICE Destination',
    destTag: 'Lonavala',
    eventTags: ['Corporate MICE', 'Weddings', 'Luxury Stays'],
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'India’s premier independent luxury township featuring timber chalets, Spanish cottages, 18-hole championship golf course, private airstrip, and world-class banquet convention arenas for grand offsites and weddings.',
    amenities: [
      '18-Hole Championship Golf Course',
      'Private Airstrip & Helipads',
      'Water Sports & Adventure Park',
      'Over 10 Multi-Cuisine Restaurants',
      'Convention Arenas for up to 3,000+ Guests'
    ],
    capacity: '50 to 3,000+ Delegates',
    officialUrl: 'https://www.aambyvalley.com'
  },
  {
    id: 'the-foresta-mulshi',
    name: 'The Foresta Resort',
    tagline: 'Eco-Luxury Nature Sanctuary & Corporate Retreat',
    location: 'Mulshi, Pune Outskirts, Maharashtra',
    category: 'Nature Retreat & Private Offsites',
    destTag: 'Mulshi',
    eventTags: ['Corporate MICE', 'Weddings', 'Luxury Stays'],
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Nestled amidst the lush valleys and tranquil waters of Mulshi, The Foresta Resort offers serene lake-view suites, open manicured lawns, state-of-the-art corporate boardrooms, and organic farm-to-table dining.',
    amenities: [
      'Scenic Mulshi Lake View Cottages',
      'Infinity Pool overlooking Western Ghats',
      'Acoustic Corporate Boardrooms',
      'Lawn Capacity for 500+ Guests',
      'Curated Trekking & Wellness Trails'
    ],
    capacity: '20 to 500 Guests',
    officialUrl: null
  },
  {
    id: 'ivy-studios',
    name: 'Ivy Studios',
    tagline: 'Premium Business Hotel & Executive Serviced Suites',
    location: 'Viman Nagar, Pune, Maharashtra',
    category: 'Executive Hotel & Corporate Studios',
    destTag: 'Viman Nagar',
    eventTags: ['Corporate MICE', 'Executive Stays', 'Luxury Stays'],
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
    ],
    desc: 'Situated in the prime business corridor of Viman Nagar, Ivy Studios offers contemporary executive studio suites, fully equipped corporate boardrooms, gourmet dining, and 5-minute proximity to Pune International Airport and EON IT Park.',
    amenities: [
      'Executive Studio Suites with Kitchenettes',
      'Acoustic Corporate Boardrooms & Banquet Hall',
      'Rooftop Multi-Cuisine Restaurant & Café',
      '5-Minute Proximity to Pune International Airport',
      'Proximity to Phoenix Marketcity & EON IT Park'
    ],
    capacity: '10 to 150 Delegates / Guests',
    officialUrl: null
  }
]

const FILTERS = ['All Properties', 'Lonavala', 'Mulshi', 'Viman Nagar', 'Corporate MICE', 'Weddings']

export default function PartnerShowcase({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All Properties')
  const [activePhotoIdx, setActivePhotoIdx] = useState({
    'aamby-valley': 0,
    'the-foresta-mulshi': 0,
    'ivy-studios': 0
  })

  const filteredProperties = PROPERTIES.filter((prop) => {
    if (activeFilter === 'All Properties') return true
    if (activeFilter === 'Lonavala' || activeFilter === 'Mulshi' || activeFilter === 'Viman Nagar') {
      return prop.destTag === activeFilter
    }
    return prop.eventTags.includes(activeFilter)
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
            Explore our curated collection of verified independent luxury resorts across Maharashtra.
            Book directly through our Pune commercial desk with zero broker markup.
          </p>

          {/* Filter Bar */}
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
              <article key={prop.id} className="hotel-card">
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
                        title="Official Resort Portal"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <p className="hotel-desc">{prop.desc}</p>

                  <div className="hotel-amenities-title">Resort Key Highlights</div>
                  <ul className="hotel-amenities-list">
                    {prop.amenities.map((amenity, i) => (
                      <li key={i}>
                        <Check size={14} className="amenity-check" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Bottom Actions */}
                  <div className="hotel-card-actions">
                    <button
                      type="button"
                      className="btn-book"
                      onClick={() => onOpenModal('booking')}
                    >
                      <CalendarCheck size={13} />
                      <span>Book Direct Rates</span>
                    </button>
                    <a
                      href="tel:+917028027017"
                      className="hotel-call-link"
                      title="Direct Concierge Line"
                    >
                      <Phone size={13} />
                      <span>+91 70280 27017</span>
                    </a>
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

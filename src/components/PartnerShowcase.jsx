import React, { useState } from 'react'
import {
  MapPin,
  Sparkles,
  CheckCircle2,
  Award,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  Camera
} from 'lucide-react'
import './PartnerShowcase.css'

const PARTNER_HOTELS = [
  {
    id: 'aamby-valley',
    number: '01',
    name: 'Aamby Valley City & Luxury Resort',
    tagline: '10,000-Acre Integrated Mountain Township & Luxury Accommodations',
    location: 'Sahyadri Mountains, Lonavala / Pune, Maharashtra',
    category: 'Ultra-Luxury Mountain Township',
    websiteUrl: 'https://www.aambyvalley.com/accommodations.html',
    photos: [
      {
        title: 'Burmese Chalets (Hilltop Solitude)',
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
      },
      {
        title: 'Spanish & Swiss Hillside Cottages',
        url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80'
      },
      {
        title: 'Waterfront Cabana with Plunge Pool',
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
      },
      {
        title: 'Hermitage 180° VIP Mountain Villas',
        url: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80'
      }
    ],
    tags: ['10,000 Acres', 'Burmese Chalets', 'Spanish Cottages', 'Waterfront Cabanas'],
    description:
      'Spanning 10,000 pristine acres in the Sahyadri mountains with views of Koraigarh Fort. Features hilltop Burmese chalets, Spanish forest cottages, Swiss cottages with private gardens, Aussie pinewood suites, and waterfront cabanas on stilts with plunge pools.',
    highlights: [
      'Burmese Chalets — Hilltop Mountain Solitude',
      'Spanish & Swiss Cottages with Private Gardens',
      'Waterfront Cabanas with Private Plunge Pool',
      'Hermitage Hilltop Suites with 180° Panoramic Views'
    ],
    impact: '+$6.4M Pipeline',
    mandate: 'MICE, Destination Weddings & Leisure'
  },
  {
    id: 'the-foresta',
    number: '02',
    name: 'The Foresta Resort Mulshi',
    tagline: 'Secluded Rainforest Chalets & Private Pool Retreat',
    location: 'Ravade Village, Paud, Mulshi Valley, Pune, Maharashtra',
    category: 'Boutique Rainforest Retreat',
    websiteUrl: 'https://www.theforesta.in',
    photos: [
      {
        title: 'Infinity Pool & Mulshi Valley',
        url: 'https://theforesta.in/wp-content/uploads/2026/03/imgi_51_00001-scaled-1.jpg'
      },
      {
        title: 'Red Brick Private Pool Chalet',
        url: 'https://theforesta.in/wp-content/uploads/2026/06/DSC07775-1-1024x576.webp'
      },
      {
        title: 'Swiss Forest View Suite',
        url: 'https://theforesta.in/wp-content/uploads/2026/06/KL_01807-1-1024x576.webp'
      },
      {
        title: 'Event Lawns & Outdoor Dining',
        url: 'https://theforesta.in/wp-content/uploads/2026/04/Foresta-2-1024x682.jpg'
      }
    ],
    tags: ['Private Pool Chalets', '$280–$750 ADR', 'C-Suite Offsites', 'Mulshi Rainforest'],
    description:
      'Bespoke boutique resort nestled in the Mulshi rainforest. Celebrated for private pool chalets, panoramic mountain balconies, and lush event lawns dedicated to C-suite offsites and luxury staycations.',
    highlights: [
      'Red Brick Private Pool Chalets (Exclusive)',
      'Swiss Mountain View Balcony Suites',
      'Forest Canopy Valley Rooms',
      'Open-Air Banquet & Event Lawns'
    ],
    impact: '+42% RevPAR Surge',
    mandate: 'Corporate Offsites & Leisure'
  },
  {
    id: 'meritas-countryside',
    number: '03',
    name: 'Meritas Countryside Resort',
    tagline: 'Tranquil Mid-Scale Resort with 31 Rooms, Pool & Open Lawns',
    location: 'Nangargaon, Lonavala – 410401, Maharashtra, India',
    category: 'Lonavala Boutique Resort',
    websiteUrl: 'https://meritashotels.com/meritas-countryside-resort-lonavala/',
    photos: [
      {
        title: 'Resort Pool & Garden Facade',
        url: 'https://meritashotels.com/wp-content/uploads/2023/03/Countryside-resort-by-Meritas-Lonavala.jpg'
      },
      {
        title: 'Deluxe Room Contemporary Suite',
        url: 'https://meritashotels.com/wp-content/uploads/2023/03/Standard-Room-@-Countryside-resort-by-Meritas.jpg'
      },
      {
        title: 'Classic Balcony Room',
        url: 'https://meritashotels.com/wp-content/uploads/2023/03/Classic-@-Countryside-resort-by-Meritas.jpg'
      },
      {
        title: 'Superior Suite & Lawns',
        url: 'https://meritashotels.com/wp-content/uploads/2023/03/Standard-room...jpg'
      }
    ],
    tags: ['31 Luxury Rooms', '4 Wings', 'Swimming Pool & Jacuzzi', 'Lonavala Valley'],
    description:
      'Situated in the serene, peaceful vicinity of Lonavala surrounded by lush greenery. Spread over 4 distinct wings with 31 rooms across Deluxe, Classic, and Superior categories, featuring a pool, jacuzzi, and multi-cuisine dining.',
    highlights: [
      '31 Boutique Rooms Across 4 Resort Wings',
      'Swimming Pool & Relaxing Jacuzzi',
      'Deluxe, Classic & Superior Room Categories',
      'Multi-Cuisine Restaurant & In-Room Dining'
    ],
    impact: '+38% Direct Booking Yield',
    mandate: 'Leisure Groups & Offsites'
  }
]

export default function PartnerShowcase({ onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [activePhotoIdx, setActivePhotoIdx] = useState({ 0: 0, 1: 0, 2: 0 })
  const total = PARTNER_HOTELS.length

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % total)
  }

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + total) % total)
  }

  const handleSelectPhoto = (hotelIndex, photoIndex, e) => {
    e.stopPropagation()
    setActivePhotoIdx((prev) => ({ ...prev, [hotelIndex]: photoIndex }))
  }

  return (
    <section className="peek-showcase-section" id="portfolio">
      <div className="shell">
        {/* Top Header Row */}
        <div className="peek-header">
          <div className="peek-header__text">
            <div className="badge-mono animate-float">
              <Sparkles size={13} />
              <span>COLLABORATED PROPERTIES</span>
            </div>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              Luxury Resorts &amp; Hospitality Partners
            </h2>
            <p className="section-sub">
              Verified luxury properties currently powered by RevBridge commercial sales leadership.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="peek-controls">
            <div className="peek-counter">
              <span className="peek-counter-curr">0{activeIdx + 1}</span>
              <span className="peek-counter-sep">/</span>
              <span className="peek-counter-total">0{total}</span>
            </div>

            <div className="peek-dots">
              {PARTNER_HOTELS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`peek-dot ${idx === activeIdx ? 'peek-dot--active' : ''}`}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Jump to hotel ${idx + 1}`}
                />
              ))}
            </div>

            <div className="peek-arrows">
              <button
                type="button"
                className="peek-arrow-btn"
                onClick={handlePrev}
                aria-label="Previous Hotel"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                className="peek-arrow-btn peek-arrow-btn--next"
                onClick={handleNext}
                aria-label="Next Hotel"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Track with Glimpse/Peek of Adjacent Cards */}
      <div className="peek-carousel-wrapper">
        <div
          className="peek-carousel-track"
          style={{
            transform: `translateX(calc(-${activeIdx} * (var(--card-width) + var(--card-gap))))`
          }}
        >
          {PARTNER_HOTELS.map((hotel, idx) => {
            const isActive = idx === activeIdx
            const currentPhotoIndex = activePhotoIdx[idx] || 0
            const currentPhoto = hotel.photos[currentPhotoIndex]

            return (
              <div
                key={hotel.id}
                className={`peek-card ${isActive ? 'peek-card--active' : 'peek-card--inactive'}`}
                onClick={() => !isActive && setActiveIdx(idx)}
                role="button"
                tabIndex={0}
                aria-label={`View ${hotel.name}`}
              >
                {/* Peek overlay for inactive card */}
                {!isActive && (
                  <div className="peek-card__click-overlay">
                    <span className="peek-card__click-hint">
                      <span>Click to view</span>
                      <ChevronRight size={14} />
                    </span>
                  </div>
                )}

                {/* Card Top Image & Photo Switcher */}
                <div className="peek-card__image-wrap">
                  <img
                    key={currentPhoto.url}
                    src={currentPhoto.url}
                    alt={`${hotel.name} - ${currentPhoto.title}`}
                    className="peek-card__img"
                  />
                  <div className="peek-card__image-scrim" />

                  {/* Top Badges */}
                  <div className="peek-card__img-badges">
                    <span className="peek-card__num">{hotel.number}</span>
                    <span className="peek-card__category">
                      <Sparkles size={11} />
                      {hotel.category}
                    </span>
                  </div>

                  {/* Impact Metric Chip */}
                  <div className="peek-card__impact">
                    <Sparkles size={12} />
                    <span>{hotel.impact}</span>
                  </div>

                  {/* Real Photo Thumbnail Switcher Bar on Image */}
                  <div className="peek-card__photo-bar">
                    <div className="peek-card__photo-caption">
                      <Camera size={12} />
                      <span>{currentPhoto.title}</span>
                    </div>
                    <div className="peek-card__photo-thumbs">
                      {hotel.photos.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          className={`peek-card__photo-thumb ${pIdx === currentPhotoIndex ? 'active' : ''}`}
                          onClick={(e) => handleSelectPhoto(idx, pIdx, e)}
                          aria-label={`View photo: ${photo.title}`}
                        >
                          <img src={photo.url} alt={photo.title} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="peek-card__body">
                  <div className="peek-card__left">
                    <div className="peek-card__location">
                      <MapPin size={13} />
                      <span>{hotel.location}</span>
                    </div>

                    <div className="peek-card__title-row">
                      <h3 className="peek-card__title">{hotel.name}</h3>
                      {hotel.websiteUrl && (
                        <a
                          href={hotel.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="peek-card__site-link"
                          onClick={(e) => e.stopPropagation()}
                          title="Visit Official Property Website"
                        >
                          <span>Official Website</span>
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>

                    <p className="peek-card__tagline">{hotel.tagline}</p>

                    <div className="peek-card__tags">
                      {hotel.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="peek-card__tag">{tag}</span>
                      ))}
                    </div>

                    <p className="peek-card__desc">{hotel.description}</p>
                  </div>

                  <div className="peek-card__right">
                    <div className="peek-card__highlights">
                      <div className="peek-card__highlights-title">Stay Highlights</div>
                      {hotel.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="peek-card__highlight-row">
                          <CheckCircle2 size={14} className="peek-card__check" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="peek-card__mandate">
                      <Award size={15} className="peek-card__mandate-icon" />
                      <span>{hotel.mandate}</span>
                    </div>

                    <div className="peek-card__btn-group">
                      <button
                        type="button"
                        className="btn-primary peek-card__cta"
                        onClick={(e) => {
                          e.stopPropagation()
                          onOpenModal('booking')
                        }}
                      >
                        <span>Book &amp; Inquire Stay</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

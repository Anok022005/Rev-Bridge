import React from 'react'
import { Briefcase, HeartHandshake, Sparkles, Building2, ArrowRight } from 'lucide-react'
import './BentoGrid.css'

const SERVICES = [
  {
    num: '01',
    title: 'Corporate Offsites & MICE',
    desc: 'Turnkey conference planning, high-capacity convention halls, executive boardrooms, team-building activities, and residential group arrangements.',
    highlights: ['Multi-Acre Arenas', 'Acoustic Boardrooms', 'Curated Team Activities', 'Corporate Billing Desk'],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '02',
    title: 'Destination Weddings & Galas',
    desc: 'Bespoke celebration venues with panoramic mountain vistas, open manicured lawns, luxury bridal suites, and tailored culinary arrangements.',
    highlights: ['Lawn Capacity 1000+ Guests', 'Poolside Sangeet Decks', 'Luxury Room Blocks', 'Dedicated Event Manager'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '03',
    title: 'Leisure Stays & Staycations',
    desc: 'Direct reservations at premier hillside villas, scenic lakefront chalets, and family holiday resorts with exclusive property-direct perks.',
    highlights: ['Zero Booking Fees', 'Verified Luxury Standards', 'Private Chalet Rentals', 'Complimentary Inclusions'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    num: '04',
    title: 'Commercial Representation',
    desc: 'Active regional sales contracting, corporate corporate client engagement, and revenue leadership across Pune, Mumbai, and pan-India feeder markets.',
    highlights: ['B2B Sales Outreach', 'Corporate RFP Pipeline', 'Rate Integrity Management', '0% Fixed Payroll Overhead'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  }
]

export default function BentoGrid({ onOpenModal }) {
  return (
    <section className="sec sec-dark" id="services">
      <div className="con">
        <div className="services-header">
          <div className="lbl c">Capabilities &amp; Solutions</div>
          <h2 className="ttl" style={{ textAlign: 'center' }}>
            Comprehensive <em>Hospitality Solutions</em>
          </h2>
          <div className="gbar c" />
          <p className="sub" style={{ textAlign: 'center', margin: '0 auto 40px' }}>
            From high-stakes leadership offsites to grand celebration weddings and commercial hotel growth,
            RevBridge bridges every hospitality need with precision.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc) => (
            <div key={svc.num} className="service-card">
              <div className="service-card-img-wrap">
                <img src={svc.image} alt={svc.title} className="service-card-img" />
                <div className="service-card-img-scrim" />
                <span className="service-card-num">{svc.num}</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-desc">{svc.desc}</p>
                <div className="service-card-tags">
                  {svc.highlights.map((h, i) => (
                    <span key={i} className="service-tag">{h}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="service-card-btn"
                  onClick={() => onOpenModal('booking')}
                >
                  <span>Inquire Solution</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

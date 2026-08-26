import React from 'react'
import { Star, Quote, Building2, UserCheck } from 'lucide-react'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    quote: 'RevBridge matched us with an exceptional Director of Sales in under 48 hours. Within our first season, direct MICE and buyout revenue increased by $1.9M while cutting our OTA commission expenses in half.',
    author: 'Matteo Bellini',
    role: 'Managing Director & Asset Partner',
    property: 'Castello Di San Pietro, Tuscany (48 Keys, $1,100 ADR)',
    type: 'Hotel'
  },
  {
    quote: 'Stepping out of the rigid corporate hotel chain structure to represent two curated luxury boutique resorts via RevBridge was the best career move I’ve made. Complete autonomy, direct GM relationships, and unmatched commission upside.',
    author: 'Elena Rostova',
    role: 'Commercial Sales Director',
    property: 'Ex-Four Seasons & Belmond Sales Leader',
    type: 'Talent'
  },
  {
    quote: 'Traditional headhunting firms wanted a $40k upfront non-refundable retainer for a 6-month search. RevBridge introduced us to three top-caliber candidates in 3 days, backed by a performance escrow guarantee.',
    author: 'Jonathan Sterling',
    role: 'General Manager',
    property: 'The Highwood Alpine Sanctuary, Aspen (62 Keys)',
    type: 'Hotel'
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="shell">
        <div className="testimonials-header">
          <span className="section-tag">[ LEADERSHIP PERSPECTIVES ]</span>
          <h2 className="section-title">Endorsed by General Managers &amp; Commercial Leaders</h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-card__stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="testimonial-star">
                    <Star size={13} fill="currentColor" />
                  </span>
                ))}
              </div>
              <p className="testimonial-card__quote">"{item.quote}"</p>
              
              <div className="testimonial-card__author-box">
                <div className="testimonial-card__avatar">
                  {item.type === 'Hotel' ? <Building2 size={16} /> : <UserCheck size={16} />}
                </div>
                <div className="testimonial-card__meta">
                  <h4 className="testimonial-card__author">{item.author}</h4>
                  <p className="testimonial-card__role">{item.role}</p>
                  <p className="testimonial-card__prop">{item.property}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

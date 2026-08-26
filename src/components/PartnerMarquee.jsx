import React from 'react'
import { Sparkles, Hotel, Palmtree, Mountain, Compass } from 'lucide-react'
import './PartnerMarquee.css'

const PARTNER_BADGES = [
  { name: 'Aamby Valley City', type: '10,000-Acre Township & Golf', icon: Mountain },
  { name: 'The Foresta Resort Mulshi', type: 'Rainforest Private Pool Chalets', icon: Palmtree },
  { name: 'Meritas Countryside Resort', type: 'Lonavala Boutique Resort & Pool', icon: Hotel },
  { name: 'Meritas Hotels & Resorts', type: 'Hospitality Portfolio Alliance', icon: Sparkles },
  { name: 'Sahyadri Luxury Retreats', type: 'Western Ghats Destination Keys', icon: Mountain },
  { name: 'Maharashtra MICE Alliances', type: 'Weddings & Corporate Offsites', icon: Compass }
]

export default function PartnerMarquee() {
  return (
    <section className="marquee-section">
      <div className="shell marquee-section__header">
        <p className="marquee-section__label">
          COMMERCIAL SALES LEADERSHIP ACROSS PREMIER INDIAN RESORTS &amp; HOSPITALITY PARTNERS
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {PARTNER_BADGES.concat(PARTNER_BADGES).concat(PARTNER_BADGES).map((item, index) => {
            const Icon = item.icon
            return (
              <div key={`${item.name}-${index}`} className="marquee-card">
                <div className="marquee-card__icon">
                  <Icon size={16} />
                </div>
                <div className="marquee-card__info">
                  <span className="marquee-card__name">{item.name}</span>
                  <span className="marquee-card__type">{item.type}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

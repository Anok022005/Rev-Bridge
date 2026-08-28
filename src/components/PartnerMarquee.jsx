import React from 'react'
import { Sparkles, MapPin, Building2, ShieldCheck } from 'lucide-react'
import './PartnerMarquee.css'

const TICKER_ITEMS = [
  'AAMBY VALLEY CITY • LONAVALA',
  'THE FORESTA RESORT • MULSHI',
  'HOTEL LOTUS IVY • VIMAN NAGAR PUNE',
  'CORPORATE OFFSITES & CONFERENCES',
  'DESTINATION WEDDINGS & PRIVATE CELEBRATIONS',
  'PUNE CORPORATE SALES ALLIANCE',
  'DIRECT LUXURY BOOKINGS • 0% MARKUP',
  'MICE & BANQUET REPRESENTATION'
]

export default function PartnerMarquee() {
  return (
    <div className="ticker" aria-label="Destination and Services Marquee">
      <div className="ttr">
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, index) => (
          <span key={index} className="ti">
            <span className="ti-dot" />
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import { MapPin, Sparkles } from 'lucide-react'
import './UpcomingProperties.css'

const UPCOMING_PROPERTIES = [
  {
    id: 'karjat',
    destination: 'Karjat',
    state: 'Maharashtra',
    tag: 'Upcoming Property',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'goa',
    destination: 'Goa',
    state: 'Goa Coast',
    tag: 'Upcoming Property',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'mahabaleshwar',
    destination: 'Mahabaleshwar',
    state: 'Maharashtra',
    tag: 'Upcoming Property',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85'
  }
]

export default function UpcomingProperties() {
  return (
    <section className="sec upcoming-sec" id="upcoming">
      <div className="con">
        <div className="upcoming-header">
          <div className="lbl c">Expanding Alliance</div>
          <h2 className="ttl" style={{ textAlign: 'center' }}>
            Upcoming <em>Properties</em>
          </h2>
          <div className="gbar c" />
        </div>

        <div className="upcoming-grid-minimal">
          {UPCOMING_PROPERTIES.map((item) => (
            <div key={item.id} className="upcoming-card-minimal">
              <div className="upcoming-img-box">
                <img src={item.image} alt={`${item.destination} Upcoming Property`} className="upcoming-img-full" />
                <div className="upcoming-img-gradient" />
                
                <div className="upcoming-content-overlay">
                  <span className="upcoming-badge-minimal">
                    <Sparkles size={11} />
                    {item.tag}
                  </span>
                  <h3 className="upcoming-dest-name">{item.destination}</h3>
                  <div className="upcoming-loc-text">
                    <MapPin size={13} />
                    <span>{item.state}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

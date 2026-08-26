import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, MapPin, Building2, CalendarCheck } from 'lucide-react'
import './Hero.css'

const SLIDES = [
  {
    id: 1,
    title: 'Aamby Valley City',
    tagline: '10,000-Acre Luxury Resort & Master Township',
    location: 'Lonavala • Western Ghats, Maharashtra',
    category: 'Curated Luxury Township & MICE Destination',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85',
    alt: 'Aamby Valley Luxury Resort'
  },
  {
    id: 2,
    title: 'The Foresta Resort',
    tagline: 'Eco-Luxury Nature Sanctuary & Corporate Retreat',
    location: 'Mulshi • Pune Outskirts, Maharashtra',
    category: 'Private Lakeside Offsites & Weddings',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=85',
    alt: 'The Foresta Resort Mulshi'
  },
  {
    id: 3,
    title: 'Ivy Studios',
    tagline: 'Premium Business Hotel & Executive Serviced Suites',
    location: 'Viman Nagar • Pune Airport Hub, Maharashtra',
    category: 'Corporate Stays & Executive Conferences',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85',
    alt: 'Ivy Studios Viman Nagar Pune'
  }
]

export default function Hero({ onOpenModal }) {
  const [curr, setCurr] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurr((prev) => (prev + 1) % SLIDES.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurr((prev) => (prev + 1) % SLIDES.length)
  }

  const prevSlide = () => {
    setCurr((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  return (
    <section className="hero" id="overview">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === curr ? 'active' : ''}`}
          aria-hidden={index !== curr}
        >
          <img src={slide.image} alt={slide.alt} className="simg" />
          <div className="sov" />
          <div className="sinf">
            <div className="sbadge">
              <span>{slide.category}</span>
            </div>
            <h1 className="shot">{slide.title}</h1>
            <div className="sloc">
              <MapPin size={13} />
              <span>{slide.location}</span>
            </div>
            <p className="stagline">{slide.tagline}</p>
            <div className="sbtns">
              <button
                type="button"
                className="btn-g"
                onClick={() => onOpenModal('booking')}
              >
                <CalendarCheck size={14} />
                <span>Book This Resort</span>
              </button>
              <button
                type="button"
                className="btn-o"
                onClick={() => onOpenModal('hotel')}
              >
                <Building2 size={14} />
                <span>Hotel Owners: Partner With Us</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Slide Arrows */}
      <button
        type="button"
        className="sarr prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        className="sarr next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="sdots" role="tablist">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`sdot ${idx === curr ? 'on' : ''}`}
            onClick={() => setCurr(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

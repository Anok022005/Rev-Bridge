import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, MapPin, Building2, CalendarCheck, ShieldCheck, ArrowUpRight } from 'lucide-react'
import './Hero.css'

const SLIDES = [
  {
    id: 1,
    title: 'Aamby Valley City',
    tagline: '10,000-Acre Master Planned Mountain Luxury Township & MICE Haven',
    location: 'Lonavala • Western Ghats, Maharashtra',
    category: 'Master Resort Township & Championship Golf',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85',
    capacity: 'Up to 3,000+ Guests',
    highlight: 'Private Airstrip & 18-Hole Golf Course'
  },
  {
    id: 2,
    title: 'The Foresta Resort',
    tagline: 'Eco-Luxury Nature Sanctuary & Corporate Retreat by Mulshi Lake',
    location: 'Mulshi • Pune Outskirts, Maharashtra',
    category: 'Lakeside Sanctuary & Executive Offsites',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=85',
    capacity: '20 to 500 Guests',
    highlight: 'Infinity Pool & Acoustic Boardrooms'
  },
  {
    id: 3,
    title: 'Hotel Lotus Ivy',
    tagline: 'Contemporary Business Hotel & Suites • 2 km from Pune Airport',
    location: 'Viman Nagar • Pune Business Corridor, Maharashtra',
    category: 'Corporate Hotel & Executive Serviced Suites',
    image: 'https://hotelivystudios.com/wp-content/uploads/2023/07/1-1.png',
    capacity: '10 to 200 Guests',
    highlight: '5th Floor Open Sky Terrace & Conference Hall'
  }
]

export default function Hero({ onOpenModal }) {
  const [curr, setCurr] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)
    const interval = 50 // update every 50ms
    const totalTime = 7000 // 7s per slide
    const increment = (interval / totalTime) * 100

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurr((current) => (current + 1) % SLIDES.length)
          return 0
        }
        return prev + increment
      })
    }, interval)

    return () => clearInterval(progressTimer)
  }, [curr])

  const nextSlide = () => {
    setProgress(0)
    setCurr((prev) => (prev + 1) % SLIDES.length)
  }

  const prevSlide = () => {
    setProgress(0)
    setCurr((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  }

  const goToSlide = (index) => {
    setProgress(0)
    setCurr(index)
  }

  return (
    <section className="hero" id="overview">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === curr ? 'active' : ''}`}
          aria-hidden={index !== curr}
        >
          <img src={slide.image} alt={slide.title} className="simg" />
          <div className="sov" />
          <div className="hero-specular-grid" />

          <div className="sinf">
            {/* Live Trust Badge */}
            <div className="hero-live-badge">
              <span className="hero-live-dot" />
              <span>Verified Hospitality Alliance • Direct Property Rates</span>
            </div>

            <div className="sbadge">
              <span>{slide.category}</span>
            </div>

            <h1 className="shot">{slide.title}</h1>

            <div className="sloc">
              <MapPin size={14} />
              <span>{slide.location}</span>
              <span className="sloc-sep">•</span>
              <span className="sloc-highlight">{slide.highlight}</span>
            </div>

            <p className="stagline">{slide.tagline}</p>
          </div>
        </div>
      ))}

      {/* Floating Interactive Slide Strip (Extraordinary feature) */}
      <div className="hero-preview-strip">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={`hero-preview-card ${idx === curr ? 'active' : ''}`}
            onClick={() => goToSlide(idx)}
          >
            <div className="hero-preview-thumb">
              <img src={s.image} alt={s.title} />
            </div>
            <div className="hero-preview-info">
              <div className="hero-preview-num">0{idx + 1}</div>
              <div className="hero-preview-title">{s.title}</div>
            </div>
            {idx === curr && (
              <div
                className="hero-preview-progress"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="hero-arrows-wrap">
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
      </div>
    </section>
  )
}

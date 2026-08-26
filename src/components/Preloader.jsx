import React, { useState, useEffect } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import logoImg from '../assets/logo.jpg'
import './Preloader.css'

export default function Preloader() {
  const [entered, setEntered] = useState(false)
  const [removed, setRemoved] = useState(false)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 45
      const y = (e.clientY - window.innerHeight / 2) / 45
      setMouseOffset({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleEnter = () => {
    setEntered(true)
    setTimeout(() => {
      setRemoved(true)
    }, 950)
  }

  if (removed) return null

  return (
    <div className={`luxury-preloader ${entered ? 'luxury-preloader--exit' : ''}`}>
      {/* Background Architectural Grid & Radial Ambient Aurora */}
      <div className="preloader-bg" aria-hidden="true">
        <div className="preloader-aurora preloader-aurora--1" />
        <div className="preloader-aurora preloader-aurora--2" />
        <div className="preloader-aurora preloader-aurora--3" />
        <div className="preloader-grid-lines" />
      </div>

      {/* Rotating Sacred Geometry / Astrolabe Orbital Rings */}
      <div
        className="preloader-astrolabe"
        style={{
          transform: `translate(calc(-50% + ${mouseOffset.x * 0.5}px), calc(-50% + ${mouseOffset.y * 0.5}px))`
        }}
        aria-hidden="true"
      >
        <div className="astrolabe-ring astrolabe-ring--outer" />
        <div className="astrolabe-ring astrolabe-ring--mid" />
        <div className="astrolabe-ring astrolabe-ring--inner" />
        <div className="astrolabe-ring astrolabe-ring--dashed" />
        <div className="astrolabe-glow-core" />
      </div>

      {/* Central Interactive Content */}
      <div
        className="preloader-card"
        style={{
          transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px)`
        }}
      >
        {/* Floating Prismatic Glass Logo Medallion */}
        <div className="preloader-logo-frame">
          <div className="preloader-logo-ring-pulse" />
          <div className="preloader-logo-inner">
            <img
              src={logoImg}
              alt="RevBridge Official Seal"
              className="preloader-logo-img"
            />
          </div>
          <div className="preloader-logo-specular" />
        </div>

        {/* Brand Name Typography with Shimmer */}
        <div className="preloader-brand-wrapper">
          <h1 className="preloader-brand-title">
            <span className="brand-char">R</span>
            <span className="brand-char">E</span>
            <span className="brand-char">V</span>
            <span className="brand-char">B</span>
            <span className="brand-char">R</span>
            <span className="brand-char">I</span>
            <span className="brand-char">D</span>
            <span className="brand-char">G</span>
            <span className="brand-char">E</span>
            <span className="brand-shimmer-sweep" />
          </h1>
        </div>

        {/* Category Pill */}
        <div className="preloader-category-pill">
          <span className="pill-dot" />
          <span>Hospitality Leadership &amp; Resort Alliance</span>
          <span className="pill-dot" />
        </div>

        {/* Slogan */}
        <p className="preloader-slogan">
          Bridging Today, Building Tomorrow.
        </p>

        {/* Elegant Diamond Divider */}
        <div className="preloader-divider">
          <div className="preloader-divider-line" />
          <div className="preloader-divider-diamond" />
          <div className="preloader-divider-line" />
        </div>

        {/* Bespoke Interactive Enter Button */}
        <button
          type="button"
          className="preloader-enter-btn"
          onClick={handleEnter}
        >
          <div className="btn-aurora-glow" />
          <div className="btn-specular-sheen" />
          <div className="btn-content">
            <span className="btn-text">Enter Platform</span>
            <div className="btn-arrow-circle">
              <ArrowRight size={14} />
            </div>
          </div>
        </button>

        <div className="preloader-hint">
          Click to enter the official commercial hospitality portal
        </div>
      </div>
    </div>
  )
}

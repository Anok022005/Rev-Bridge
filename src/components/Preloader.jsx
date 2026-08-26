import React, { useState } from 'react'
import logoImg from '../assets/logo.jpg'
import './Preloader.css'

export default function Preloader() {
  const [gone, setGone] = useState(false)

  const handleEnter = () => {
    setGone(true)
  }

  if (gone) return null

  return (
    <div id="preloader" className={gone ? 'gone' : ''}>
      <div className="pl-logo">
        <div className="pl-img-wrap">
          <img src={logoImg} alt="RevBridge Logo" className="pl-img" />
        </div>
        <div className="pl-name">RevBridge</div>
        <div className="pl-sub">Hospitality Leadership &amp; Resort Alliance</div>
        <div className="pl-tagline">Bridging Today, Building Tomorrow.</div>
      </div>

      <div className="pl-bar" />

      <button type="button" className="pl-enter" onClick={handleEnter}>
        <span>Enter Platform</span>
      </button>
    </div>
  )
}

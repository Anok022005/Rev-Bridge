import React, { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const glowRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    if (!dot || !ring || !glow) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let glowX = mouseX
    let glowY = mouseY

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    // Detect hover over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, .hotel-card, .about-card, .how-card, .hero-preview-card')
      if (target) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    let animationId
    const loop = () => {
      // Fluid Spring LERP Physics
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`

      glowX += (mouseX - glowX) * 0.08
      glowY += (mouseY - glowY) * 0.08
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`

      animationId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)
    animationId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      {/* Outer Soft Aurora Aura */}
      <div
        ref={glowRef}
        className={`cursor-aurora ${isHovered ? 'cursor-aurora--hover' : ''}`}
        aria-hidden="true"
      />
      {/* Dynamic Magnetic Expanding Ring */}
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovered ? 'cursor-ring--hover' : ''} ${isClicked ? 'cursor-ring--click' : ''}`}
        aria-hidden="true"
      >
        <div className="cursor-ring-pulse" />
      </div>
      {/* Central Precision Sapphire Pinpoint */}
      <div
        ref={dotRef}
        className={`cursor-dot ${isHovered ? 'cursor-dot--hover' : ''}`}
        aria-hidden="true"
      />
    </>
  )
}

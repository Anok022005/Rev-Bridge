import React, { useEffect, useRef } from 'react'
import './AmbientCanvas.css'

export default function AmbientCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Dynamic Luxury Royal Blue & Ruby Red Dust Particles
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 28))
    const particles = []

    for (let i = 0; i < particleCount; i++) {
      const isRed = Math.random() > 0.75
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius: Math.random() * 2.2 + 1.2,
        radius: Math.random() * 2.2 + 1.2,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        alpha: Math.random() * 0.4 + 0.15,
        color: isRed ? '220, 38, 38' : '30, 64, 175'
      })
    }

    let mouse = { x: width / 2, y: height / 2, active: false, radius: 180 }
    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw subtle interactive cursor ambient light halo (Royal Blue + Crimson)
      if (mouse.active) {
        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        )
        cursorGlow.addColorStop(0, 'rgba(30, 64, 175, 0.06)')
        cursorGlow.addColorStop(0.6, 'rgba(220, 38, 38, 0.02)')
        cursorGlow.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = cursorGlow
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Update and draw floating particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Gentle interactive physics with mouse
        if (mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            p.x -= (dx / dist) * force * 1.5
            p.y -= (dy / dist) * force * 1.5
            p.radius = p.baseRadius * (1 + force * 0.8)
          } else {
            p.radius = p.baseRadius
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
        ctx.fill()
      })

      // Draw interactive constellation web between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            const threadAlpha = (1 - dist / 130) * 0.15
            ctx.strokeStyle = `rgba(30, 64, 175, ${threadAlpha})`
            ctx.lineWidth = 0.85
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="ambient-canvas" aria-hidden="true" />
}

import React, { useState, useEffect } from 'react'
import {
  X,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import './ConsultationModal.css'

const PROPERTIES = [
  'Aamby Valley City & Luxury Resort, Lonavala',
  'The Foresta Resort Mulshi, Pune',
  'Meritas Countryside Resort, Lonavala',
  'Other / Multiple Properties'
]

export default function ConsultationModal({ isOpen, initialTrack = 'hotel', onClose }) {
  const [track, setTrack] = useState(initialTrack) // 'hotel' or 'booking'
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property: PROPERTIES[0],
    hotelName: '',
    hotelLocation: '',
    roomCount: '',
    stayDates: '',
    guestCount: '',
    eventType: 'Leisure Stay',
    message: ''
  })

  useEffect(() => {
    setTrack(initialTrack === 'talent' ? 'booking' : initialTrack)
    setSubmitted(false)
  }, [initialTrack, isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success animate-fade-in">
            <div className="modal-success__icon">
              <CheckCircle2 size={42} />
            </div>
            <h3 className="modal-success__title">
              {track === 'hotel' ? 'Collaboration Request Received' : 'Booking Inquiry Received'}
            </h3>
            <p className="modal-success__desc">
              Thank you, <strong>{formData.name || 'Partner'}</strong>. Our commercial team has received your details.
              We will contact you shortly via phone or email to assist you.
            </p>

            <div className="modal-success__contact-box">
              <span className="modal-success__contact-title">Need Immediate Assistance?</span>
              <div className="modal-success__contact-links">
                <a href="tel:+917028027017" className="modal-quick-link">
                  <Phone size={14} />
                  <span>+91 70280 27017</span>
                </a>
                <a href="tel:+919370872231" className="modal-quick-link">
                  <Phone size={14} />
                  <span>+91 93708 72231</span>
                </a>
                <a href="mailto:sales@revbridge.in" className="modal-quick-link">
                  <Mail size={14} />
                  <span>sales@revbridge.in</span>
                </a>
              </div>
            </div>

            <button type="button" className="btn-primary" onClick={onClose} style={{ marginTop: '20px' }}>
              Back to Website
            </button>
          </div>
        ) : (
          <div className="modal-content animate-fade-in">
            {/* Header */}
            <div className="modal-header">
              <div className="badge-mono" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                <Sparkles size={12} />
                <span>DIRECT REVBRIDGE DESK</span>
              </div>
              <h2 className="modal-title">
                {track === 'hotel' ? 'Partner Your Property' : 'Book a Partner Stay'}
              </h2>
              <p className="modal-sub">
                {track === 'hotel'
                  ? 'Collaborate with RevBridge for commercial sales representation, corporate offsites, and group bookings.'
                  : 'Inquire directly for exclusive corporate retreats, weddings, or luxury leisure stays at our partner resorts.'}
              </p>

              {/* Quick Contact Bar */}
              <div className="modal-direct-bar">
                <span>Direct Inquiries:</span>
                <a href="tel:+917028027017" className="modal-direct-link">
                  <Phone size={12} /> +91 70280 27017
                </a>
                <a href="tel:+919370872231" className="modal-direct-link">
                  <Phone size={12} /> +91 93708 72231
                </a>
                <a href="mailto:sales@revbridge.in" className="modal-direct-link">
                  <Mail size={12} /> sales@revbridge.in
                </a>
              </div>
            </div>

            {/* Track Switcher */}
            <div className="modal-track-switch">
              <button
                type="button"
                className={`modal-track-btn ${track === 'hotel' ? 'active' : ''}`}
                onClick={() => setTrack('hotel')}
              >
                <Building2 size={16} />
                <span>For Hotel / Resort Owners</span>
              </button>
              <button
                type="button"
                className={`modal-track-btn ${track === 'booking' ? 'active' : ''}`}
                onClick={() => setTrack('booking')}
              >
                <CalendarCheck size={16} />
                <span>Book Listed Property</span>
              </button>
            </div>

            {/* Form */}
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="modal-name">Your Full Name *</label>
                  <input
                    id="modal-name"
                    type="text"
                    name="name"
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="modal-phone">Phone Number *</label>
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="modal-email">Email Address *</label>
                <input
                  id="modal-email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Fields for Hotel Owners */}
              {track === 'hotel' && (
                <div className="form-row animate-fade-in">
                  <div className="form-group">
                    <label htmlFor="modal-hotelName">Hotel / Resort Name *</label>
                    <input
                      id="modal-hotelName"
                      type="text"
                      name="hotelName"
                      placeholder="e.g. Royal Valley Resort"
                      value={formData.hotelName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modal-hotelLocation">Location &amp; Room Keys</label>
                    <input
                      id="modal-hotelLocation"
                      type="text"
                      name="hotelLocation"
                      placeholder="e.g. Lonavala, 45 Keys"
                      value={formData.hotelLocation}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              {/* Fields for Booking Guests / Corporate Planners */}
              {track === 'booking' && (
                <div className="animate-fade-in">
                  <div className="form-group">
                    <label htmlFor="modal-property">Select Property *</label>
                    <select
                      id="modal-property"
                      name="property"
                      value={formData.property}
                      onChange={handleChange}
                      className="modal-select"
                    >
                      {PROPERTIES.map((prop) => (
                        <option key={prop} value={prop}>
                          {prop}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="modal-eventType">Inquiry Type</label>
                      <select
                        id="modal-eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="modal-select"
                      >
                        <option value="Leisure Stay">Leisure Stay / Family Getaway</option>
                        <option value="Corporate Offsite">Corporate Offsite / Conference</option>
                        <option value="Destination Wedding">Destination Wedding / Event</option>
                        <option value="Group Booking">Group Booking (10+ Rooms)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="modal-stayDates">Dates &amp; Guest Count</label>
                      <input
                        id="modal-stayDates"
                        type="text"
                        name="stayDates"
                        placeholder="e.g. Next weekend, ~25 guests"
                        value={formData.stayDates}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="modal-message">Requirements / Specific Notes</label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows="3"
                  placeholder={
                    track === 'hotel'
                      ? 'Tell us about your property and what sales support you are looking for...'
                      : 'Tell us your budget, number of rooms, meal requirements, or any special requests...'
                  }
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-primary modal-submit-btn">
                <span>{track === 'hotel' ? 'Submit Collaboration Request' : 'Send Booking Inquiry'}</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

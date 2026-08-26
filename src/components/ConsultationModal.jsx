import React, { useState, useEffect } from 'react'
import { X, Building2, CalendarCheck, CheckCircle2, Phone, Mail, Sparkles, Send } from 'lucide-react'
import './ConsultationModal.css'

export default function ConsultationModal({ isOpen, onClose, initialTrack = 'hotel' }) {
  const [track, setTrack] = useState(initialTrack)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyOrCompany: '',
    datesOrRequirement: '',
    guestsCount: '15-50 Guests',
    notes: ''
  })

  useEffect(() => {
    setTrack(initialTrack)
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="vmodal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="vmodal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="vmodal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="vmodal-header">
              <div className="lbl">Direct Concierge Desk</div>
              <h2 className="vmodal-title">
                {track === 'hotel'
                  ? 'Resort Commercial Partnership'
                  : 'Inquire & Book Direct Resort Stays'}
              </h2>
              <div className="gbar" style={{ margin: '12px 0 16px' }} />
              <p className="vmodal-sub">
                {track === 'hotel'
                  ? 'Connect with our Pune sales office to activate dedicated regional representation across Maharashtra and pan-India feeder markets.'
                  : 'Get verified luxury resort rates, MICE banquet quotes, and wedding packages with zero intermediary markups.'}
              </p>

              {/* Quick direct contact strip inside modal */}
              <div className="vmodal-direct-bar">
                <span>Immediate Desk:</span>
                <a href="tel:+917028027017" className="vmodal-direct-link">
                  <Phone size={11} />
                  <span>+91 70280 27017</span>
                </a>
                <span className="vmodal-direct-sep">•</span>
                <a href="mailto:sales@revbridge.in" className="vmodal-direct-link">
                  <Mail size={11} />
                  <span>sales@revbridge.in</span>
                </a>
              </div>
            </div>

            {/* Track Switcher */}
            <div className="vmodal-switch">
              <button
                type="button"
                className={`vmodal-switch-btn ${track === 'hotel' ? 'active' : ''}`}
                onClick={() => setTrack('hotel')}
              >
                <Building2 size={14} />
                <span>Hotel Partnership</span>
              </button>
              <button
                type="button"
                className={`vmodal-switch-btn ${track === 'booking' ? 'active' : ''}`}
                onClick={() => setTrack('booking')}
              >
                <CalendarCheck size={14} />
                <span>Guest / MICE Booking</span>
              </button>
            </div>

            {/* Form */}
            <form className="vmodal-form" onSubmit={handleSubmit}>
              <div className="vform-row">
                <div className="vform-group">
                  <label>Your Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="vform-group">
                  <label>Contact Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="vform-row">
                <div className="vform-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="vform-group">
                  <label>
                    {track === 'hotel' ? 'Resort / Property Name *' : 'Company or Event Name *'}
                  </label>
                  <input
                    type="text"
                    name="propertyOrCompany"
                    required
                    placeholder={track === 'hotel' ? 'e.g. Mountain Villa Resort' : 'e.g. Infosys / Family Wedding'}
                    value={formData.propertyOrCompany}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="vform-row">
                <div className="vform-group">
                  <label>
                    {track === 'hotel' ? 'Location & Room Inventory' : 'Approximate Dates & Destination'}
                  </label>
                  <input
                    type="text"
                    name="datesOrRequirement"
                    placeholder={track === 'hotel' ? 'e.g. Lonavala • 45 Rooms' : 'e.g. Nov 15-18 • Lonavala / Mulshi'}
                    value={formData.datesOrRequirement}
                    onChange={handleChange}
                  />
                </div>
                <div className="vform-group">
                  <label>{track === 'hotel' ? 'Primary Need' : 'Estimated Group Size'}</label>
                  {track === 'hotel' ? (
                    <select
                      name="guestsCount"
                      value={formData.guestsCount}
                      onChange={handleChange}
                      className="vmodal-select"
                    >
                      <option value="Pan-India Corporate Representation">Pan-India Corporate Representation</option>
                      <option value="MICE & Group Sales Contracting">MICE &amp; Group Sales Contracting</option>
                      <option value="Wedding & Banquet Pipeline">Wedding &amp; Banquet Pipeline</option>
                      <option value="Full Commercial Advisory">Full Commercial Advisory</option>
                    </select>
                  ) : (
                    <select
                      name="guestsCount"
                      value={formData.guestsCount}
                      onChange={handleChange}
                      className="vmodal-select"
                    >
                      <option value="15-50 Guests">15-50 Guests (Intimate Offsite)</option>
                      <option value="50-150 Guests">50-150 Guests (Corporate Retreat)</option>
                      <option value="150-500+ Guests">150-500+ Guests (Convention / Wedding)</option>
                      <option value="Individual Family Vacation">Individual Family Vacation</option>
                    </select>
                  )}
                </div>
              </div>

              <div className="vform-group">
                <label>Specific Requirements or Questions (Optional)</label>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Tell us any specific requirements (AV setup, banquet style, food preferences)..."
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-g vmodal-submit">
                <Send size={14} />
                <span>
                  {track === 'hotel' ? 'Submit Partnership Request' : 'Request Direct Tariff Quote'}
                </span>
              </button>
            </form>
          </>
        ) : (
          /* Submission Success State */
          <div className="vmodal-success">
            <div className="vmodal-success-icon">
              <CheckCircle2 size={48} />
            </div>
            <div className="lbl c">Inquiry Received</div>
            <h3 className="vmodal-title" style={{ textAlign: 'center', marginBottom: '8px' }}>
              Thank You, {formData.name || 'Valued Guest'}
            </h3>
            <p className="vmodal-sub" style={{ textAlign: 'center', marginBottom: '24px' }}>
              Your inquiry has been routed to our Pune commercial sales desk. One of our dedicated account
              managers will reach out to you within 2 hours with customized details.
            </p>

            <div className="vmodal-success-box">
              <div className="vmodal-success-box-title">Need Immediate Coordination?</div>
              <div className="vmodal-success-links">
                <a href="tel:+917028027017" className="btn-g">
                  <Phone size={13} />
                  <span>Call +91 70280 27017</span>
                </a>
                <a
                  href={`https://wa.me/917028027017?text=Hi%20RevBridge%2C%20I%20just%20submitted%20an%20inquiry%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-o"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <button type="button" className="btn-o" onClick={onClose} style={{ marginTop: '16px' }}>
              <span>Close Window</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

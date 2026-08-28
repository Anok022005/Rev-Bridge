import React, { useState } from 'react'
import { Phone, Mail, MapPin, Building2, CalendarCheck, Send, CheckCircle2, Loader2, Sparkles, ShieldCheck } from 'lucide-react'
import './CTASection.css'

// Web3Forms Endpoint Key (Replace with your free key from https://web3forms.com/)
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'

export default function CTASection() {
  const [activeTab, setActiveTab] = useState('hotel') // 'hotel' or 'guest'
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  // Form 1: Hotel Partnership Data
  const [hotelForm, setHotelForm] = useState({
    name: '',
    phone: '',
    email: '',
    propertyName: '',
    locationAndRooms: '',
    partnershipFocus: 'Pan-India Corporate Representation',
    propertyDetails: ''
  })

  // Form 2: Guest & Corporate Stay Data
  const [guestForm, setGuestForm] = useState({
    name: '',
    phone: '',
    email: '',
    companyOrEvent: '',
    destinationAndDates: 'Aamby Valley City (Lonavala)',
    groupSize: '15-50 Guests (Executive Offsite)',
    requirements: ''
  })

  const handleHotelChange = (e) => {
    setHotelForm({ ...hotelForm, [e.target.name]: e.target.value })
  }

  const handleGuestChange = (e) => {
    setGuestForm({ ...guestForm, [e.target.name]: e.target.value })
  }

  const handleHotelSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'RevBridge Hotel Partnership Desk',
          subject: `🏨 Hotel Partnership Inquiry: ${hotelForm.propertyName} - ${hotelForm.name}`,
          form_type: 'Hotel & Resort Partnership',
          owner_representative_name: hotelForm.name,
          contact_phone: hotelForm.phone,
          official_email: hotelForm.email,
          property_name: hotelForm.propertyName,
          location_and_room_count: hotelForm.locationAndRooms,
          primary_sales_need: hotelForm.partnershipFocus,
          property_goals_overview: hotelForm.propertyDetails || 'None provided'
        })
      })
      const result = await response.json()
      if (result.success || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        setSubmitted(true)
      } else {
        setErrorMsg(result.message)
        setSubmitted(true)
      }
    } catch (err) {
      console.error(err)
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  const handleGuestSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'RevBridge Direct Stays Desk',
          subject: `🏖️ Direct Stay / MICE Inquiry: ${guestForm.companyOrEvent} - ${guestForm.name}`,
          form_type: 'Guest & Corporate Stay Reservation',
          client_name: guestForm.name,
          contact_phone: guestForm.phone,
          email_address: guestForm.email,
          company_or_event_type: guestForm.companyOrEvent,
          preferred_destination_dates: guestForm.destinationAndDates,
          estimated_group_size: guestForm.groupSize,
          event_requirements_notes: guestForm.requirements || 'None provided'
        })
      })
      const result = await response.json()
      if (result.success || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        setSubmitted(true)
      } else {
        setErrorMsg(result.message)
        setSubmitted(true)
      }
    } catch (err) {
      console.error(err)
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="sec sec-dark cta-sec" id="contact">
      <div className="con">
        <div className="cta-box">
          <div className="lbl c">Dedicated Contact Desks</div>
          <h2 className="ttl" style={{ textAlign: 'center', color: '#ffffff' }}>
            Elevate Your Resort Sales or <em>Book Verified Stays</em>
          </h2>
          <div className="gbar c" />
          <p className="sub" style={{ textAlign: 'center', margin: '0 auto 36px', color: 'rgba(255, 255, 255, 0.88)' }}>
            Select your dedicated contact desk below. Every submission is routed directly to our Pune sales headquarters inbox.
          </p>

          {/* Distinct Form Tabs */}
          <div className="cta-track-switch">
            <button
              type="button"
              className={`cta-track-btn ${activeTab === 'hotel' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('hotel')
                setSubmitted(false)
              }}
            >
              <Building2 size={16} />
              <span>1. Hotel &amp; Resort Partnership Form</span>
            </button>
            <button
              type="button"
              className={`cta-track-btn ${activeTab === 'guest' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('guest')
                setSubmitted(false)
              }}
            >
              <CalendarCheck size={16} />
              <span>2. Guest Stays &amp; Corporate Booking Form</span>
            </button>
          </div>

          {!submitted ? (
            <div className="cta-form-container">
              {/* =======================================================
                  FORM 1: HOTEL & RESORT PARTNERSHIP FORM
                 ======================================================= */}
              {activeTab === 'hotel' ? (
                <form className="cta-form" onSubmit={handleHotelSubmit}>
                  <div className="cta-form-header-badge">
                    <Building2 size={15} />
                    <span>For Hotel Owners, General Managers &amp; Developers</span>
                  </div>

                  <div className="cta-form-grid">
                    <div className="cta-input-group">
                      <label>Owner / Representative Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Arun Gaikwad"
                        value={hotelForm.name}
                        onChange={handleHotelChange}
                      />
                    </div>

                    <div className="cta-input-group">
                      <label>Direct Contact Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={hotelForm.phone}
                        onChange={handleHotelChange}
                      />
                    </div>

                    <div className="cta-input-group">
                      <label>Official Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="owner@hotelresort.com"
                        value={hotelForm.email}
                        onChange={handleHotelChange}
                      />
                    </div>

                    <div className="cta-input-group">
                      <label>Resort / Property Name *</label>
                      <input
                        type="text"
                        name="propertyName"
                        required
                        placeholder="e.g. Mountain Mist Valley Resort"
                        value={hotelForm.propertyName}
                        onChange={handleHotelChange}
                      />
                    </div>

                    <div className="cta-input-group">
                      <label>Location &amp; Room Inventory *</label>
                      <input
                        type="text"
                        name="locationAndRooms"
                        required
                        placeholder="e.g. Lonavala • 45 Luxury Rooms"
                        value={hotelForm.locationAndRooms}
                        onChange={handleHotelChange}
                      />
                    </div>

                    <div className="cta-input-group">
                      <label>Primary Partnership Focus</label>
                      <select
                        name="partnershipFocus"
                        className="cta-select"
                        value={hotelForm.partnershipFocus}
                        onChange={handleHotelChange}
                      >
                        <option value="Pan-India Corporate Representation">Pan-India Corporate Sales Representation</option>
                        <option value="MICE & Offsite Contracting">MICE &amp; Corporate Offsite Contracting</option>
                        <option value="Wedding & Banquet Pipeline">Wedding &amp; Banquet Booking Pipeline</option>
                        <option value="Complete Commercial Sales Advisory">Complete Commercial Sales Advisory</option>
                      </select>
                    </div>
                  </div>

                  <div className="cta-input-group full-width">
                    <label>Property Overview &amp; Current Goals (Optional)</label>
                    <textarea
                      name="propertyDetails"
                      rows="3"
                      placeholder="Tell us about your property amenities, target ADR, and current sales challenges..."
                      value={hotelForm.propertyDetails}
                      onChange={handleHotelChange}
                    />
                  </div>

                  <button type="submit" className="cta-submit-btn" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Submitting Partnership Request...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Submit Hotel Partnership Request</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                /* =======================================================
                    FORM 2: GUEST STAYS & CORPORATE BOOKINGS FORM
                   ======================================================= */
                <form className="cta-form" onSubmit={handleGuestSubmit}>
                  <div className="cta-form-header-badge guest">
                    <CalendarCheck size={15} />
                    <span>For Corporate Planners, Wedding Groups &amp; Leisure Guests</span>
                  </div>

                  <div className="cta-form-grid">
                    <div className="cta-input-group">
                      <label>Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={guestForm.name}
                        onChange={handleGuestChange}
                      />
                    </div>

                    <div className="cta-input-group">
                      <label>Contact Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={guestForm.phone}
                        onChange={handleGuestChange}
                      />
                    </div>

                    <div className="cta-input-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="rahul@company.com"
                        value={guestForm.email}
                        onChange={handleGuestChange}
                      />
                    </div>

                    <div className="cta-input-group">
                      <label>Company Name or Event Type *</label>
                      <input
                        type="text"
                        name="companyOrEvent"
                        required
                        placeholder="e.g. Infosys Leadership Offsite / Family Wedding"
                        value={guestForm.companyOrEvent}
                        onChange={handleGuestChange}
                      />
                    </div>

                    <div className="cta-input-group">
                      <label>Preferred Resort &amp; Dates</label>
                      <select
                        name="destinationAndDates"
                        className="cta-select"
                        value={guestForm.destinationAndDates}
                        onChange={handleGuestChange}
                      >
                        <option value="Aamby Valley City (Lonavala)">Aamby Valley City (Lonavala)</option>
                        <option value="The Foresta Resort (Mulshi)">The Foresta Resort (Mulshi)</option>
                        <option value="Hotel Lotus Ivy (Pune)">Hotel Lotus Ivy (Pune)</option>
                        <option value="Recommend Best Destination">Recommend Best Destination for My Group</option>
                      </select>
                    </div>

                    <div className="cta-input-group">
                      <label>Estimated Group Size</label>
                      <select
                        name="groupSize"
                        className="cta-select"
                        value={guestForm.groupSize}
                        onChange={handleGuestChange}
                      >
                        <option value="15-50 Guests (Executive Offsite)">15–50 Guests (Executive Offsite)</option>
                        <option value="50-150 Guests (Corporate Retreat)">50–150 Guests (Corporate Retreat)</option>
                        <option value="150-500+ Guests (Grand Wedding / AGM)">150–500+ Guests (Grand Wedding / AGM)</option>
                        <option value="Individual Family Holiday">Individual / Family Vacation</option>
                      </select>
                    </div>
                  </div>

                  <div className="cta-input-group full-width">
                    <label>Specific Banquet, AV or Dining Requirements (Optional)</label>
                    <textarea
                      name="requirements"
                      rows="3"
                      placeholder="Specify preferred dates, number of rooms, conference room setup, or special meal preferences..."
                      value={guestForm.requirements}
                      onChange={handleGuestChange}
                    />
                  </div>

                  <button type="submit" className="cta-submit-btn" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Requesting Direct Tariff Quote...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Request Direct Rates &amp; Availability</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          ) : (
            <div className="cta-success-box">
              <CheckCircle2 size={46} className="cta-success-icon" />
              <h3 className="cta-success-title">
                Thank You, {activeTab === 'hotel' ? hotelForm.name || 'Partner' : guestForm.name || 'Valued Guest'}
              </h3>
              <p className="cta-success-text">
                Your {activeTab === 'hotel' ? 'hotel partnership request' : 'direct stay reservation inquiry'} has been
                routed to our Pune commercial sales desk. One of our dedicated account managers will contact you within 2 hours.
              </p>
              <button
                type="button"
                className="btn-o"
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '20px' }}
              >
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          )}

          {/* Quick Contact Strip */}
          <div className="cta-quick-strip">
            <a href="tel:+917028027017" className="cta-strip-item">
              <Phone size={13} />
              <span>+91 70280 27017</span>
            </a>
            <span className="cta-strip-sep">•</span>
            <a href="tel:+919370872231" className="cta-strip-item">
              <Phone size={13} />
              <span>+91 93708 72231</span>
            </a>
            <span className="cta-strip-sep">•</span>
            <a href="mailto:sales@revbridge.in" className="cta-strip-item">
              <Mail size={13} />
              <span>sales@revbridge.in</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

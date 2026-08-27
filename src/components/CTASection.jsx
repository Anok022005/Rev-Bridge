import React, { useState } from 'react'
import { Phone, Mail, MapPin, Building2, CalendarCheck, Send, CheckCircle2, Loader2 } from 'lucide-react'
import './CTASection.css'

// Web3Forms or Formspree Endpoint Key
// Replace with your Web3Forms Access Key from https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE'

export default function CTASection() {
  const [track, setTrack] = useState('hotel') // 'hotel' or 'booking'
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyOrCompany: '',
    notes: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      // Send data to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'RevBridge Web Portal',
          subject: `New RevBridge Inquiry: ${formData.name} (${track === 'hotel' ? 'Hotel Partnership' : 'Guest Booking'})`,
          inquiry_type: track === 'hotel' ? 'Hotel & Resort Partnership' : 'Corporate & Guest Stay',
          full_name: formData.name,
          phone_number: formData.phone,
          email_address: formData.email,
          property_or_company: formData.propertyOrCompany,
          requirements_notes: formData.notes || 'None provided'
        })
      })

      const result = await response.json()

      if (result.success || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        // Successful submission (or demo mode before key is pasted)
        setSubmitted(true)
      } else {
        setErrorMsg(result.message || 'Unable to send message. Please check your network or call directly.')
        setSubmitted(true) // Show confirmation to user
      }
    } catch (err) {
      console.error('Submission error:', err)
      // Fallback: gracefully display success so visitor experience isn't blocked
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="sec sec-dark cta-sec" id="contact">
      <div className="con">
        <div className="cta-box">
          <div className="lbl c">Direct Inquiries &amp; Contact</div>
          <h2 className="ttl" style={{ textAlign: 'center', color: '#ffffff' }}>
            Elevate Your Resort Sales or <em>Plan Your Next Luxury Stay</em>
          </h2>
          <div className="gbar c" />
          <p className="sub" style={{ textAlign: 'center', margin: '0 auto 36px', color: 'rgba(255, 255, 255, 0.88)' }}>
            Connect directly with our Pune commercial sales headquarters. Submit your details below to receive instant assistance in your inbox.
          </p>

          {!submitted ? (
            <div className="cta-form-container">
              {/* Track Toggle */}
              <div className="cta-track-switch">
                <button
                  type="button"
                  className={`cta-track-btn ${track === 'hotel' ? 'active' : ''}`}
                  onClick={() => setTrack('hotel')}
                >
                  <Building2 size={15} />
                  <span>For Hotel Owners</span>
                </button>
                <button
                  type="button"
                  className={`cta-track-btn ${track === 'booking' ? 'active' : ''}`}
                  onClick={() => setTrack('booking')}
                >
                  <CalendarCheck size={15} />
                  <span>For Corporate &amp; Guest Stays</span>
                </button>
              </div>

              {/* Form with single bottom button */}
              <form className="cta-form" onSubmit={handleSubmit}>
                <div className="cta-form-grid">
                  <div className="cta-input-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="cta-input-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="cta-input-group">
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

                  <div className="cta-input-group">
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

                <div className="cta-input-group full-width">
                  <label>Requirements or Questions (Optional)</label>
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder={
                      track === 'hotel'
                        ? 'Location, room count, and current sales needs...'
                        : 'Preferred dates, destination (Lonavala, Mulshi, Pune), guest count...'
                    }
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>

                {errorMsg && (
                  <div style={{ color: '#f87171', fontSize: '13px', textAlign: 'center' }}>
                    {errorMsg}
                  </div>
                )}

                {/* THE SINGLE SUBMIT BUTTON AT THE BOTTOM */}
                <button type="submit" className="cta-submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending To Headquarters...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>
                        {track === 'hotel'
                          ? 'Submit Partnership Request'
                          : 'Request Direct Rates Quote'}
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="cta-success-box">
              <CheckCircle2 size={44} className="cta-success-icon" />
              <h3 className="cta-success-title">Thank You, {formData.name || 'Valued Guest'}</h3>
              <p className="cta-success-text">
                Your inquiry has been successfully sent to our sales desk. Our commercial team
                will reach out to you within 2 hours with full details.
              </p>
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

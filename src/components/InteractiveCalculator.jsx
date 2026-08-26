import React, { useState } from 'react'
import { Calculator, ArrowRight, DollarSign, TrendingUp, Sparkles, Building, User } from 'lucide-react'
import './InteractiveCalculator.css'

export default function InteractiveCalculator({ onOpenModal }) {
  const [calcMode, setCalcMode] = useState('hotel')

  // Hotel Calculator State
  const [rooms, setRooms] = useState(65)
  const [adr, setAdr] = useState(750)
  const [occupancy, setOccupancy] = useState(68)

  // Talent Calculator State
  const [accounts, setAccounts] = useState(2)
  const [avgDealSize, setAvgDealSize] = useState(120000)
  const [closedDeals, setClosedDeals] = useState(8)

  // Calculations for Hotel
  const annualAvailableRoomNights = rooms * 365
  const currentTotalRevenue = annualAvailableRoomNights * (occupancy / 100) * adr
  // Estimated direct revenue lift from specialized sales director (18% direct shift + 12% group rate lift)
  const directRevenueLift = Math.round(currentTotalRevenue * 0.16)
  const otaCommissionSaved = Math.round(currentTotalRevenue * 0.045) // saving 4.5% net by shifting from OTAs to direct corporate/travel advisor
  const micePipelineGains = Math.round(rooms * 12500)
  const totalFinancialImpact = directRevenueLift + otaCommissionSaved + micePipelineGains
  const revparLiftPercent = Math.min(42, Math.round(18 + (adr / 100)))

  // Calculations for Sales Talent
  const monthlyRetainerPerAccount = 6500
  const annualRetainerIncome = accounts * monthlyRetainerPerAccount * 12
  const commissionRate = 0.08 // 8% commission on generated group & direct sales
  const annualCommissionIncome = Math.round(closedDeals * avgDealSize * commissionRate)
  const totalTalentEarnings = annualRetainerIncome + annualCommissionIncome

  return (
    <section className="calculator-section" id="calculator">
      <div className="shell">
        <div className="calculator-header">
          <span className="section-tag">[ INTERACTIVE REVENUE SIMULATOR ]</span>
          <h2 className="section-title">Calculate Your Financial Upside</h2>
          <p className="section-sub">
            Real-time projection model based on historical RevBridge placement data across 450+ luxury hospitality assets.
          </p>

          {/* Mode Switch */}
          <div className="calc-mode-switch">
            <button
              type="button"
              className={`calc-mode-btn ${calcMode === 'hotel' ? 'active' : ''}`}
              onClick={() => setCalcMode('hotel')}
            >
              <Building size={16} />
              <span>For Hotels &amp; Resorts</span>
            </button>
            <button
              type="button"
              className={`calc-mode-btn ${calcMode === 'talent' ? 'active' : ''}`}
              onClick={() => setCalcMode('talent')}
            >
              <User size={16} />
              <span>For Sales Directors</span>
            </button>
          </div>
        </div>

        <div className="calculator-card">
          {calcMode === 'hotel' ? (
            <div className="calc-grid animate-fade-in">
              {/* Sliders Column */}
              <div className="calc-inputs">
                <h3 className="calc-inputs-title">Property Baseline Parameters</h3>

                {/* Slider 1: Rooms */}
                <div className="calc-group">
                  <div className="calc-label-row">
                    <label htmlFor="calc-rooms">Number of Keys / Suites</label>
                    <span className="calc-val-badge">{rooms} Keys</span>
                  </div>
                  <input
                    id="calc-rooms"
                    type="range"
                    min="15"
                    max="350"
                    step="5"
                    value={rooms}
                    onChange={(e) => setRooms(Number(e.target.value))}
                    className="calc-range"
                  />
                  <div className="calc-range-ticks">
                    <span>15 Keys</span>
                    <span>150 Keys</span>
                    <span>350 Keys</span>
                  </div>
                </div>

                {/* Slider 2: ADR */}
                <div className="calc-group">
                  <div className="calc-label-row">
                    <label htmlFor="calc-adr">Average Daily Rate (ADR)</label>
                    <span className="calc-val-badge">${adr} / night</span>
                  </div>
                  <input
                    id="calc-adr"
                    type="range"
                    min="200"
                    max="2200"
                    step="50"
                    value={adr}
                    onChange={(e) => setAdr(Number(e.target.value))}
                    className="calc-range"
                  />
                  <div className="calc-range-ticks">
                    <span>$200</span>
                    <span>$1,000</span>
                    <span>$2,200+</span>
                  </div>
                </div>

                {/* Slider 3: Occupancy */}
                <div className="calc-group">
                  <div className="calc-label-row">
                    <label htmlFor="calc-occ">Average Annual Occupancy</label>
                    <span className="calc-val-badge">{occupancy}%</span>
                  </div>
                  <input
                    id="calc-occ"
                    type="range"
                    min="35"
                    max="92"
                    step="1"
                    value={occupancy}
                    onChange={(e) => setOccupancy(Number(e.target.value))}
                    className="calc-range"
                  />
                  <div className="calc-range-ticks">
                    <span>35%</span>
                    <span>65%</span>
                    <span>92%</span>
                  </div>
                </div>
              </div>

              {/* Output Results Column */}
              <div className="calc-results">
                <div className="calc-results-header">
                  <span className="calc-results-tag">ESTIMATED ANNUAL FINANCIAL IMPACT</span>
                  <div className="calc-big-num">${totalFinancialImpact.toLocaleString()}</div>
                  <p className="calc-big-sub">Projected Net Commercial Value Added to Property</p>
                </div>

                <div className="calc-breakdown">
                  <div className="calc-stat-row">
                    <span className="calc-stat-name">Direct Booking &amp; Buyout Lift</span>
                    <span className="calc-stat-figure">+${directRevenueLift.toLocaleString()}</span>
                  </div>
                  <div className="calc-stat-row">
                    <span className="calc-stat-name">OTA Commission &amp; Intermediary Savings</span>
                    <span className="calc-stat-figure">+${otaCommissionSaved.toLocaleString()}</span>
                  </div>
                  <div className="calc-stat-row">
                    <span className="calc-stat-name">MICE &amp; Corporate Pipeline Activation</span>
                    <span className="calc-stat-figure">+${micePipelineGains.toLocaleString()}</span>
                  </div>
                  <div className="calc-stat-row calc-stat-row--highlight">
                    <span className="calc-stat-name">Projected RevPAR Lift</span>
                    <span className="calc-stat-figure">+{revparLiftPercent}%</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-primary"
                  style={{ width: '100%', marginTop: '24px' }}
                  onClick={() => onOpenModal('hotel')}
                >
                  <span>Request Full Commercial Audit</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="calc-grid animate-fade-in">
              {/* Talent Sliders */}
              <div className="calc-inputs">
                <h3 className="calc-inputs-title">Sales Director Earning Variables</h3>

                <div className="calc-group">
                  <div className="calc-label-row">
                    <label htmlFor="calc-acc">Represented Boutique Accounts</label>
                    <span className="calc-val-badge">{accounts} Luxury Properties</span>
                  </div>
                  <input
                    id="calc-acc"
                    type="range"
                    min="1"
                    max="4"
                    step="1"
                    value={accounts}
                    onChange={(e) => setAccounts(Number(e.target.value))}
                    className="calc-range"
                  />
                  <div className="calc-range-ticks">
                    <span>1 Property</span>
                    <span>2 Properties</span>
                    <span>4 Properties</span>
                  </div>
                </div>

                <div className="calc-group">
                  <div className="calc-label-row">
                    <label htmlFor="calc-deals">Annual Closed Group / MICE Deals</label>
                    <span className="calc-val-badge">{closedDeals} Deals</span>
                  </div>
                  <input
                    id="calc-deals"
                    type="range"
                    min="2"
                    max="24"
                    step="1"
                    value={closedDeals}
                    onChange={(e) => setClosedDeals(Number(e.target.value))}
                    className="calc-range"
                  />
                  <div className="calc-range-ticks">
                    <span>2 Deals</span>
                    <span>12 Deals</span>
                    <span>24 Deals</span>
                  </div>
                </div>

                <div className="calc-group">
                  <div className="calc-label-row">
                    <label htmlFor="calc-deal-val">Average Deal Contract Value</label>
                    <span className="calc-val-badge">${avgDealSize.toLocaleString()}</span>
                  </div>
                  <input
                    id="calc-deal-val"
                    type="range"
                    min="30000"
                    max="350000"
                    step="10000"
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                    className="calc-range"
                  />
                  <div className="calc-range-ticks">
                    <span>$30k</span>
                    <span>$180k</span>
                    <span>$350k+</span>
                  </div>
                </div>
              </div>

              {/* Talent Results */}
              <div className="calc-results">
                <div className="calc-results-header">
                  <span className="calc-results-tag">PROJECTED ANNUAL COMPENSATION</span>
                  <div className="calc-big-num">${totalTalentEarnings.toLocaleString()}</div>
                  <p className="calc-big-sub">Retainers + Escrow-Protected Commissions</p>
                </div>

                <div className="calc-breakdown">
                  <div className="calc-stat-row">
                    <span className="calc-stat-name">Guaranteed Retainer Base</span>
                    <span className="calc-stat-figure">${annualRetainerIncome.toLocaleString()}</span>
                  </div>
                  <div className="calc-stat-row">
                    <span className="calc-stat-name">Performance Incentive Pool</span>
                    <span className="calc-stat-figure">${annualCommissionIncome.toLocaleString()}</span>
                  </div>
                  <div className="calc-stat-row calc-stat-row--highlight">
                    <span className="calc-stat-name">Autonomy &amp; Flexibility Index</span>
                    <span className="calc-stat-figure">100% Independent</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-gold"
                  style={{ width: '100%', marginTop: '24px' }}
                  onClick={() => onOpenModal('talent')}
                >
                  <span>Apply for Verified Representation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

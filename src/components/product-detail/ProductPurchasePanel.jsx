import { useMemo, useState } from 'react'
import './ProductPurchasePanel.css'

const weights = [
  { id: '100', label: '100 gram', price: 128 },
  { id: '250', label: '250 gram', price: 299 },
  { id: '500', label: '500 gram', price: 549 },
  { id: '1kg', label: '1 kg', price: 1049 },
]

export default function ProductPurchasePanel() {
  const [weightId, setWeightId] = useState('100')
  const selected = useMemo(
    () => weights.find((w) => w.id === weightId) ?? weights[0],
    [weightId],
  )

  return (
    <div className="purchase-panel">
      <h1 className="purchase-panel__title">70% Dark Himalayan Sea Salt Bar</h1>

      <div className="purchase-panel__row">
        <label className="visually-hidden" htmlFor="weight-select">
          Select weight
        </label>
        <select
          id="weight-select"
          className="purchase-panel__select"
          value={weightId}
          onChange={(e) => setWeightId(e.target.value)}
        >
          {weights.map((w) => (
            <option key={w.id} value={w.id}>
              {w.label}
            </option>
          ))}
        </select>
        <span className="purchase-panel__price">₹{selected.price.toFixed(2)}</span>
      </div>

      <p className="purchase-panel__shipping">
        Artisanal delivery — shipping across India. Bringing the rich indulgence of premium chocolates to your
        doorstep, meticulously packed to preserve freshness and texture!{' '}
        <a href="#support" className="purchase-panel__shipping-link">
          Chat with us
        </a>
      </p>

      <div className="purchase-panel__benefits">
        <div className="purchase-panel__benefit">
          <span className="purchase-panel__benefit-icon" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
              <path d="M12 11v-1" />
            </svg>
          </span>
          <span className="purchase-panel__benefit-label">Pure Cocoa</span>
        </div>
        <div className="purchase-panel__benefit">
          <span className="purchase-panel__benefit-icon" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3c-4 4-8 6-8 11a4 4 0 0 0 8 0 4 4 0 0 0 8 0c0-5-4-7-8-11Z" />
            </svg>
          </span>
          <span className="purchase-panel__benefit-label">70% Cocoa</span>
        </div>
        <div className="purchase-panel__benefit">
          <span className="purchase-panel__benefit-icon" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 15h16M6 9h12M8 3h8" />
              <path d="M2 19h20" strokeDasharray="2 3" />
            </svg>
          </span>
          <span className="purchase-panel__benefit-label">Artisanal</span>
        </div>
        <div className="purchase-panel__benefit">
          <span className="purchase-panel__benefit-icon" aria-hidden>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <path d="M8 12h8M12 8v8" strokeDasharray="2 2" opacity="0.5" />
            </svg>
          </span>
          <span className="purchase-panel__benefit-label">Single Origin</span>
        </div>
      </div>

      <div className="purchase-panel__actions">
        <a
          className="purchase-panel__btn purchase-panel__btn--primary"
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp us
        </a>
        <a className="purchase-panel__btn purchase-panel__btn--primary" href="tel:+919971095414">
          Call us
        </a>
      </div>

      <p className="purchase-panel__sku">
        <strong>SKU:</strong> CHOCO-DARK-01
      </p>

      <div className="purchase-panel__desc">
        <h2 className="purchase-panel__desc-title">Description</h2>
        <p>
          Our 70% Dark Himalayan Sea Salt Bar is handcrafted with ethically sourced single-origin cocoa beans. 
          Indulge in the perfect balance of intense cocoa and subtle hand-harvested sea salt crystals. 
          Each bar is meticulously tempered to ensure a glossy finish and a clean snap, 
          making it an ideal treat for the true chocolate connoisseur.
        </p>
      </div>
    </div>
  )
}

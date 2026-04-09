import { useState } from 'react'
import './ProductTabsSection.css'

const descriptionBody = (
  <>
    <h3 className="product-tabs__card-heading">70% Dark Himalayan Sea Salt Bar</h3>
    <p>
      Our 70% Dark Himalayan Sea Salt Bar is a masterpiece of balance and intensity. 
      The deep, woody notes of the dark chocolate are interrupted by the sudden, 
      sparkling snap of hand-harvested pink salt crystals, creating a multi-sensory tasting experience. 
      Perfect for pairing with coffee or as a sophisticated evening treat.
    </p>
    <p>
      We use a slow-conching process that refines the texture to a silky-smooth finish, 
      ensuring that every bite melts evenly. Store in a cool, dry place (16-20°C) to prevent 
      blooming and maintain the chocolate’s aromatic complexity.
    </p>
    <p>
      From artisanal gifting to personal indulgence, this bar represents the pinnacle 
      of chocolate craftsmanship that you can trust for flavour and quality.
    </p>
  </>
)

const benefitsBody = (
  <>
    <h3 className="product-tabs__card-heading">Why you&apos;ll love it</h3>
    <ul className="product-tabs__list">
      <li>Intense 70% cocoa solids for a deep, complex flavour profile.</li>
      <li>Hand-harvested Himalayan salt provides a sophisticated textural contrast.</li>
      <li>Single-origin cocoa sourced from ethical, sustainable farms.</li>
      <li>Clean ingredient list with no artificial emulsifiers or palm oil.</li>
    </ul>
  </>
)

export default function ProductTabsSection() {
  const [tab, setTab] = useState('description')

  return (
    <section className="product-tabs" aria-label="Product information">
      <div className="product-tabs__bar" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'description'}
          className={`product-tabs__tab ${tab === 'description' ? 'is-active' : ''}`}
          onClick={() => setTab('description')}
        >
          Description
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'benefits'}
          className={`product-tabs__tab ${tab === 'benefits' ? 'is-active' : ''}`}
          onClick={() => setTab('benefits')}
        >
          Benefits
        </button>
      </div>

      <div
        className="product-tabs__panel"
        role="tabpanel"
        id={`panel-${tab}`}
      >
        <div
          key={tab}
          className="product-tabs__card"
        >
          {tab === 'description' ? descriptionBody : benefitsBody}
        </div>
      </div>
    </section>
  )
}

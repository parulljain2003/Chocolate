import { useState } from 'react'
import './ProductTabsSection.css'

const descriptionBody = (
  <>
    <h3 className="product-tabs__card-heading">Premium Jumbo Almond</h3>
    <p>
      Carefully sourced and sized for that satisfying crunch, our Premium Jumbo Almonds deliver a
      naturally sweet, buttery profile. They are ideal for health-conscious households who want clean
      snacking without compromising on taste — whether tossed into salads, folded into desserts, or
      enjoyed straight from the pack.
    </p>
    <p>
      Each batch is checked for freshness and uniformity so you get consistent quality in every order.
      Store in a cool, dry place away from direct sunlight to keep the natural oils balanced and the
      crunch intact.
    </p>
    <p>
      From festive gifting to everyday nutrition, these almonds are a versatile pantry staple you
      can trust for both flavour and wholesomeness.
    </p>
  </>
)

const benefitsBody = (
  <>
    <h3 className="product-tabs__card-heading">Why you&apos;ll love them</h3>
    <ul className="product-tabs__list">
      <li>Natural source of protein, fibre, and vitamin E to support daily wellness.</li>
      <li>Jumbo size means fewer pieces per serving — great for portion-aware snacking.</li>
      <li>No added colours; gently processed to preserve aroma and crunch.</li>
      <li>Works across smoothies, granola, curries, and premium mithai preparations.</li>
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

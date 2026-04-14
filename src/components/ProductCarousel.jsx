import { useRef } from 'react'
import { Link } from 'react-router-dom'
import chocolatePng from '@assest/pct-3.png' 
import './ProductCarousel.css'

const products = [
  {
    id: '1',
    brand: 'VYOM BLISS',
    title: '70% Dark Himalayan Sea Salt Bar 100g',
    rating: '4.9',
    mrp: 450,
    price: 395,
    per100: 395,
    off: 12,
    badge: 'Premium',
  },
  {
    id: '2',
    brand: 'VYOM BLISS',
    title: 'Belgian Milk Chocolate Hazelnut Praline',
    rating: '4.8',
    mrp: 599,
    price: 499,
    per100: 499,
    off: 16,
    badge: 'Bestseller',
  },
  {
    id: '3',
    brand: 'VYOM BLISS',
    title: 'Single Origin Madagascar Dark 85%',
    rating: '5.0',
    mrp: 650,
    price: 550,
    per100: 550,
    off: 15,
    badge: 'Limited',
  },
  {
    id: '4',
    brand: 'VYOM BLISS',
    title: 'Ruby Chocolate with Dried Raspberries',
    rating: '4.8',
    mrp: 550,
    price: 475,
    per100: 475,
    off: 13,
    badge: 'New',
  },
  {
    id: '5',
    brand: 'VYOM BLISS',
    title: 'Caramelised Pecan White Chocolate',
    rating: '4.7',
    mrp: 525,
    price: 450,
    per100: 450,
    off: 14,
    badge: 'Artisanal',
  },
  {
    id: '6',
    brand: 'VYOM BLISS',
    title: 'Assorted Truffle Box - 12 Pieces',
    rating: '4.9',
    mrp: 1200,
    price: 999,
    per100: 999,
    off: 16,
    badge: 'High demand',
  },
]

function formatInr(n) {
  return n.toLocaleString('en-IN')
}

export default function ProductCarousel() {
  const scrollerRef = useRef(null)

  const scrollByDir = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector('.product-card')
    const step = card ? card.offsetWidth + 20 : 300
    el.scrollBy({ left: step * dir, behavior: 'smooth' })
  }

  return (
    <section
      className="product-section"
      id="products"
      aria-labelledby="products-heading"
    >
      <div className="container">
        <h2 id="products-heading" className="product-section__title">
          Top selling products
        </h2>

        <div className="product-section__wrap">
          <button
            type="button"
            className="product-section__arrow"
            aria-label="Previous products"
            onClick={() => scrollByDir(-1)}
          >
            ‹
          </button>

          <div className="product-section__scroller" ref={scrollerRef}>
            {products.map((p) => (
              <article key={p.id} className="product-card">
                <Link
                  to="/product"
                  className="product-card__link"
                  aria-label={`View ${p.title}`}
                >
                  <div className="product-card__media">
                    <span className="product-card__badge product-card__badge--left">
                      {p.badge}
                    </span>
                    {p.off != null && (
                      <span className="product-card__badge product-card__badge--right">
                        {p.off}% off
                      </span>
                    )}
                    <img
                      src={chocolatePng}
                      alt=""
                      className="product-card__img"
                    />
                  </div>
                  <div className="product-card__body">
                    <div className="product-card__row">
                      <span className="product-card__brand">{p.brand}</span>
                      <span className="product-card__meta">
                        <span className="product-card__rating">
                          ★ {p.rating}
                        </span>
                        <span className="product-card__wish" aria-hidden>
                          ♡
                        </span>
                      </span>
                    </div>
                    <h3 className="product-card__title">{p.title}</h3>
                    <div className="product-card__price-row">
                      <span className="product-card__mrp">
                        MRP:{' '}
                        <span className="product-card__strike">
                          ₹{formatInr(p.mrp)}
                        </span>
                      </span>
                      <span className="product-card__price">₹{formatInr(p.price)}</span>
                    </div>
                    <p className="product-card__per">(₹{formatInr(p.per100)} / 100g)</p>
                  </div>
                </Link>
                <div className="product-card__footer">
                  <button type="button" className="product-card__cta">
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="product-section__arrow product-section__arrow--next"
            aria-label="Next products"
            onClick={() => scrollByDir(1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

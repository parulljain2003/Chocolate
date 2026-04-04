import { useRef } from 'react'
import { Link } from 'react-router-dom'
import walnutAvif from '@assest/walnut.avif'
import './ProductCarousel.css'

const products = [
  {
    id: '1',
    brand: 'Dry Delight Anmol',
    title: 'Premium Medjool Dates 500gm',
    rating: '4.9',
    mrp: 1579,
    price: 856,
    per100: 171,
    off: 45,
    badge: 'Premium',
  },
  {
    id: '2',
    brand: 'Dry Delight Anmol',
    title: 'Jumbo Walnut Kernel Natural 500gm',
    rating: '4.8',
    mrp: 1499,
    price: 972,
    per100: 194,
    off: 35,
    badge: 'Premium',
  },
  {
    id: '3',
    brand: 'Dry Delight Anmol',
    title: 'Jumbo Mamra Almonds 500gm',
    rating: '5.0',
    mrp: 3389,
    price: 2737,
    per100: 547,
    off: 19,
    badge: 'Premium',
  },
  {
    id: '4',
    brand: 'Dry Delight Anmol',
    title: 'Jumbo Cashew W180 500gm',
    rating: '4.8',
    mrp: 1499,
    price: 910,
    per100: 182,
    off: 39,
    badge: 'Premium',
  },
  {
    id: '5',
    brand: 'Dry Delight',
    title: 'Daily Needs Pack 1kg (Mixed)',
    rating: '4.7',
    mrp: 1656,
    price: 1656,
    per100: 166,
    off: null,
    badge: 'Bestseller',
  },
  {
    id: '6',
    brand: 'Snack Rite',
    title: 'Roasted & Salted Cashew 150gm',
    rating: '4.8',
    mrp: 738,
    price: 395,
    per100: 132,
    off: 46,
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
                      src={walnutAvif}
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

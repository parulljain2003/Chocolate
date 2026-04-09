import { useRef } from 'react'
import categoryPng from '@assest/img-1.webp'
import './CategorySection.css'

const categories = [
  { name: 'Dark Chocolate', color: '#7d5a44' },
  { name: 'Milk Chocolate', color: '#2d5a5c' },
  { name: 'White Chocolate', color: '#4a5c3a' },
  { name: 'Ruby Chocolate', color: '#a67c52' },
  { name: 'Couverture Chocolate', color: '#5c3540' },
  { name: 'Organic Chocolate', color: '#6b4c2e' },
]

export default function CategorySection() {
  const scrollerRef = useRef(null)

  const scrollByDir = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.min(el.clientWidth * 0.85, 400) * dir
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="category-section" aria-labelledby="category-heading">
      <div className="container">
        <h2 id="category-heading" className="category-section__title">
          Shop by category
        </h2>
        <div className="category-section__wrap">
          <button
            type="button"
            className="category-section__arrow category-section__arrow--prev"
            aria-label="Previous categories"
            onClick={() => scrollByDir(-1)}
          >
            ‹
          </button>
          <div className="category-section__scroller" ref={scrollerRef}>
            {categories.map((c) => (
              <article
                key={c.name}
                className="category-card"
                style={{ '--card-bg': c.color }}
              >
                <div className="category-card__inner">
                  <div className="category-card__img-wrap">
                    <img
                      src={categoryPng}
                      alt=""
                      className="category-card__img"
                    />
                  </div>
                  <h3 className="category-card__name">{c.name}</h3>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            className="category-section__arrow category-section__arrow--next"
            aria-label="Next categories"
            onClick={() => scrollByDir(1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

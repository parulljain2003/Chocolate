import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import productPng from '@assest/product.png'
import './FeaturedCarousel.css'

const items = [
  { id: '1', title: 'Kitchen Essentials' },
  { id: '2', title: 'Snack Rite' },
  { id: '3', title: 'Anmol Premium' },
  { id: '4', title: 'Bactopure' },
  { id: '5', title: 'Daily Nutrition' },
]

export default function FeaturedCarousel() {
  const [active, setActive] = useState(2)
  const trackRef = useRef(null)
  const firstPaint = useRef(true)

  const scrollToIndex = useCallback((i, instant) => {
    const track = trackRef.current
    const el = track?.children[i]
    if (!el) return
    el.scrollIntoView({
      behavior: instant ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [])

  useLayoutEffect(() => {
    scrollToIndex(active, firstPaint.current)
    firstPaint.current = false
  }, [active, scrollToIndex])

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % items.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const description =
    'Unleash your inner chef with our premium recipe-ready range of pre-chopped dry fruits, nuts, and more — curated for modern kitchens in a warm golden palette.'

  return (
    <section className="featured-section" aria-labelledby="featured-heading">
      <div className="container">
        <h2 id="featured-heading" className="featured-section__title">
          Featured product
        </h2>

        <div className="featured-carousel">
          <button
            type="button"
            className="featured-carousel__nav featured-carousel__nav--prev"
            aria-label="Previous"
            onClick={() =>
              setActive((i) => (i - 1 + items.length) % items.length)
            }
          >
            ‹
          </button>

          <div className="featured-carousel__viewport">
            <div className="featured-carousel__track" ref={trackRef}>
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className={`featured-card-wrap ${i === active ? 'is-active' : ''}`}
                >
                  <article className="featured-card">
                    <div className="featured-card__media">
                      <img src={productPng} alt="" />
                    </div>
                    <h3 className="featured-card__name">{item.title}</h3>
                    <button
                      type="button"
                      className="featured-card__hit"
                      aria-label={`Show ${item.title}`}
                      onClick={() => setActive(i)}
                    />
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="featured-carousel__nav featured-carousel__nav--next"
            aria-label="Next"
            onClick={() => setActive((i) => (i + 1) % items.length)}
          >
            ›
          </button>
        </div>

        <p className="featured-section__desc">{description}</p>
      </div>
    </section>
  )
}

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import productPng from '@assest/pct--2.jpeg'
import './FeaturedCarousel.css'

const items = [
  { id: '1', title: 'Salted Dark' },
  { id: '2', title: 'Ruby Berry' },
  { id: '3', title: 'Almond Silk' },
  { id: '4', title: 'Nutty Praline' },
  { id: '5', title: 'Vanilla Bean' },
]

export default function FeaturedCarousel() {
  const [active, setActive] = useState(2)
  const trackRef = useRef(null)
  const firstPaint = useRef(true)

  const scrollToIndex = useCallback((i, instant) => {
    const track = trackRef.current
    if (!track) return
    const el = track.children[i]
    if (!el) return

    const scrollPos = el.offsetLeft - (track.offsetWidth - el.offsetWidth) / 2
    track.scrollTo({
      left: scrollPos,
      behavior: instant ? 'auto' : 'smooth',
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
    'Indulge in our exquisite collection of handcrafted artisanal chocolates, from intense dark single-origin bars to creamy sea-salt caramels, meticulously tempered for the perfect snap.'

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

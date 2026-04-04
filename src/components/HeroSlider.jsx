import { useEffect, useState } from 'react'
import './HeroSlider.css'

const slides = [
  {
    id: 1,
    title: 'Golden Harvest Sale',
    subtitle: 'Up to 60% off + extra 10% off',
    code: 'GOLD10',
    image: '/assets/hero-1.jpg',
  },
  {
    id: 2,
    title: 'Premium Jumbo Nuts',
    subtitle: 'Rare crop, natural taste',
    code: 'JUMBO',
    image: '/assets/hero-2.jpg',
  },
  {
    id: 3,
    title: 'Dates & Berries',
    subtitle: 'Shop combos & save more',
    code: 'COMBO',
    image: '/assets/hero-3.jpg',
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    setImgError(false)
  }, [index])

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length)
        setFade(true)
      }, 280)
    }, 5500)
    return () => clearInterval(t)
  }, [])

  const go = (i) => {
    setFade(false)
    setTimeout(() => {
      setIndex(i)
      setFade(true)
    }, 200)
  }

  const slide = slides[index]

  return (
    <section className="hero-section container" aria-label="Promotions">
      <div className={`hero-slider ${fade ? 'hero-slider--visible' : ''}`}>
        <div className="hero-slider__bg" aria-hidden />
        <div className="hero-slider__float hero-slider__float--1" aria-hidden>
          🥜
        </div>
        <div className="hero-slider__float hero-slider__float--2" aria-hidden>
          🌰
        </div>
        <div className="hero-slider__float hero-slider__float--3" aria-hidden>
          🫘
        </div>
        <div className="hero-slider__float hero-slider__float--4" aria-hidden>
          🍇
        </div>

        <div className="hero-slider__grid">
          <div className="hero-slider__visual">
            <div className="hero-slider__image-wrap">
              {!imgError && (
                <img
                  src={slide.image}
                  alt=""
                  className="hero-slider__image"
                  onError={() => setImgError(true)}
                />
              )}
              {imgError && (
                <div className="hero-slider__image-fallback">
                  <span className="hero-slider__fallback-icon" aria-hidden>
                    🌰
                  </span>
                  <span>
                    Add <code>hero-{slide.id}.jpg</code> to <code>public/assets/</code>
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="hero-slider__content">
            <h2 className="hero-slider__title">{slide.title}</h2>
            <p className="hero-slider__subtitle">{slide.subtitle}</p>
            <p className="hero-slider__code">
              Use code: <strong>{slide.code}</strong>
            </p>
            <a href="#products" className="hero-slider__cta">
              Shop now
            </a>
          </div>
        </div>

        <div className="hero-slider__dots" role="tablist" aria-label="Slides">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              className={`hero-slider__dot ${i === index ? 'hero-slider__dot--active' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { useMemo, useState } from 'react'
import chocolatePng from '@assest/pct-3.png'
import './ProductGallery.css'

const defaultThumbs = Array.from({ length: 5 }, () => chocolatePng)

export default function ProductGallery({ images }) {
  const resolved = useMemo(
    () => (images?.length ? images : defaultThumbs),
    [images],
  )
  const [active, setActive] = useState(0)
  const mainSrc = resolved[active] ?? resolved[0]

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <span className="product-gallery__zoom-badge" title="Hover to zoom">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <div className="product-gallery__brand">Cocoa Delight</div>
        <div className="product-gallery__stage">
          <div className="product-gallery__zoom-wrap">
            <img src={mainSrc} alt="" className="product-gallery__img" />
          </div>
        </div>
      </div>
      <ul className="product-gallery__thumbs">
        {resolved.map((src, i) => (
          <li key={i}>
            <button
              type="button"
              className={`product-gallery__thumb ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
            >
              <img src={src} alt="" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

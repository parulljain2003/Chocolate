import { useEffect, useState } from 'react';
import banner2 from '@assest/banner-1.webp';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    image: banner2,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const slide = slides[index];

  return (
    <section className="hero-section hero-section--fullscreen" aria-label="Main Banner">
      <div className="hero-slider hero-slider--visible">
        <div className="hero-slider__image-container">
          <img
            src={slide.image}
            alt="Premium Chocolate Collection"
            className="hero-slider__image"
          />
        </div>

        <div className="hero-slider__overlay"></div>

        {slides.length > 1 && (
          <div className="hero-slider__dots" role="tablist" aria-label="Slides">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                className={`hero-slider__dot ${i === index ? 'hero-slider__dot--active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

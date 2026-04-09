import { useEffect, useState } from 'react';
import banner2 from '@assest/banner-2.webp';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    image: banner2,
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setFade(true);
      }, 280);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const go = (i) => {
    setFade(false);
    setTimeout(() => {
      setIndex(i);
      setFade(true);
    }, 200);
  };

  const slide = slides[index];

  return (
    <section className="hero-section hero-section--fullscreen" aria-label="Main Banner">
      <div className={`hero-slider ${fade ? 'hero-slider--visible' : ''}`}>
        <div className="hero-slider__image-container">
          <img
            src={slide.image}
            alt="Premium Chocolate Collection"
            className="hero-slider__image"
          />
        </div>
        
        <div className="hero-slider__overlay"></div>

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
  );
}

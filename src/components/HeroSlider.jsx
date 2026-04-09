import { useEffect, useState } from 'react';
import banner1 from '@assest/banner-1.webp';
import banner3 from '@assest/banner-3.webp';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    image: banner1,
    title: "Premium Cocoa Selection"
  },
  {
    id: 3,
    image: banner3,
    title: "Iconic Artisanal Treats"
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="hero-section hero-section--fullscreen" aria-label="Main Banner">
      <div className="hero-slider hero-slider--visible">
        <div className="hero-slider__image-container">
          <img
            src={slide.image}
            alt={slide.title}
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

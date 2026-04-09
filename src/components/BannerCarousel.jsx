import React, { useEffect, useState } from 'react';
import banner1 from '@assest/banner-2.webp';
import banner2 from '@assest/banner-1.webp';
import banner3 from '@assest/banner-3.webp';


import './BannerCarousel.css';

const banners = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % banners.length);
        setFade(true);
      }, 280);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const go = (i) => {
    setFade(false);
    setTimeout(() => {
      setIndex(i);
      setFade(true);
    }, 200);
  };

  const banner = banners[index];

  return (
    <section className="banner-carousel-section" aria-label="Promotional Banners">
      <div
        className={`banner-carousel ${fade ? 'banner-carousel--visible' : ''}`}
      >
        <img
          src={banner.image}
          alt={`Banner ${index + 1}`}
          className="banner-carousel__image"
        />
        <div className="banner-carousel__dots" role="tablist" aria-label="Banners">
          {banners.map((b, i) => (
            <button
              key={b.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Banner ${i + 1}`}
              className={`banner-carousel__dot ${i === index ? 'banner-carousel__dot--active' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

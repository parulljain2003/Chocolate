import React, { useEffect, useRef } from 'react';
import './ReviewSection.css';

const reviews = [
  {
    id: 1,
    text: "Awesome authenticity and on time delivery what else one could ask for...full value for money. Loved the flavour of Cocoa Delight's Sea Salt Dark Bar, it was delicious.",
    rating: 5,
    author: "Arun A"
  },
  {
    id: 2,
    text: "I bought the Cocoa Delight Crunchy Milk Caramel, this was an absolute delight of a flavour. Wouldn't hesitate to buy again.",
    rating: 5,
    author: "Naga Subramanian Srinivasan"
  },
  {
    id: 3,
    text: "It's excellent chocolate. I loved the Cocoa Delight Gold Caramel Cremino Bar very much. It was a delight, i relished this chocolate very much. Packing was very nice, I received the chocolates in good original condition and it has not got melted. 🙏 I will surely buy again!!",
    rating: 5,
    author: "Ruchi Kumar"
  },
  {
    id: 4,
    text: "Excellent service. Gosh it was a lifesaver, especially since I live in another country and needed a trusted service to send this cute box to my love. I purchased the Cocoa Delight Valentine's Edition and I am confident on the service they provide. Thanks for making my valentines special.",
    rating: 5,
    author: "Pulakeshi salunkhe"
  }
];

export default function ReviewSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('review-section--visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="review-section" ref={sectionRef} aria-labelledby="reviews-heading">
      <div className="container">
        <h2 id="reviews-heading" className="review-section__title">
          Sugar Coated Words by You!
        </h2>
        
        <div className="review-grid">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className="review-card"
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <div className="review-card__border-decoration"></div>
              <div className="review-card__content">
                <p className="review-card__text">{review.text}</p>
                <div className="review-card__rating">
                  {'★'.repeat(review.rating)}
                </div>
                <h3 className="review-card__author">{review.author}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="review-section__footer-decoration">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="footer-star">✦</span>
          ))}
        </div>
      </div>
    </section>
  );
}

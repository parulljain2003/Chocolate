import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__newsletter container">
        <div className="site-footer__news-inner">
          <h2 className="site-footer__news-title">Subscribe for offers</h2>
          <p className="site-footer__news-text">
            Get updates on seasonal harvests and member-only discounts.
          </p>
          <form className="site-footer__form" onSubmit={(e) => e.preventDefault()}>
            <label className="visually-hidden" htmlFor="news-email">
              Email
            </label>
            <input
              id="news-email"
              type="email"
              placeholder="Enter your email"
              className="site-footer__input"
            />
            <button type="submit" className="site-footer__submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="site-footer__grid container">
        <div className="site-footer__col site-footer__brand-block">
          <span className="site-footer__logo">Dry Delight</span>
          <p className="site-footer__tagline">Premium nuts & dry fruits since 1926.</p>
          <div className="site-footer__contact">
            <p>📍 Noida, Uttar Pradesh 201307</p>
            <p>📞 +91-99710-95414</p>
            <p>✉️ care@drydelight.example</p>
          </div>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Company</h3>
          <ul className="site-footer__links">
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#cert">Certifications</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Policies</h3>
          <ul className="site-footer__links">
            <li>
              <a href="#privacy">Privacy</a>
            </li>
            <li>
              <a href="#returns">Returns & refunds</a>
            </li>
            <li>
              <a href="#shipping">Shipping</a>
            </li>
            <li>
              <a href="#terms">Terms</a>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3 className="site-footer__heading">Follow</h3>
          <ul className="site-footer__social">
            <li>
              <a href="#fb">Facebook</a>
            </li>
            <li>
              <a href="#ig">Instagram</a>
            </li>
            <li>
              <a href="#in">LinkedIn</a>
            </li>
            <li>
              <a href="#yt">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>© {new Date().getFullYear()} Dry Delight. Demo storefront — not affiliated with Nutraj.</p>
          <p className="site-footer__fssai">FSSAI compliant processes · Quality assured</p>
        </div>
      </div>
    </footer>
  )
}

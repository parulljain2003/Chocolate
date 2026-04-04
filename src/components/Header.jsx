import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link to="/" className="site-header__logo">
          <span className="site-header__brand">DRY DELIGHT</span>
          <span className="site-header__tagline">Since 1926</span>
        </Link>

        <div className="site-header__search" role="search">
          <label className="visually-hidden" htmlFor="search-q">
            Search products
          </label>
          <div className="site-header__search-box">
            <select
              className="site-header__categories"
              aria-label="Category"
              defaultValue="all"
            >
              <option value="all">All Categories</option>
              <option value="nuts">Nuts</option>
              <option value="dates">Dates</option>
              <option value="seeds">Seeds</option>
              <option value="berries">Berries</option>
            </select>
            <input
              id="search-q"
              type="search"
              placeholder="Search for cashew, almond…"
              className="site-header__input"
            />
            <button type="button" className="site-header__search-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </div>

        <div className="site-header__actions">
          <button type="button" className="site-header__icon-btn" aria-label="Account">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button type="button" className="site-header__icon-btn" aria-label="Wishlist">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button type="button" className="site-header__icon-btn site-header__cart" aria-label="Cart, 0 items">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="site-header__badge">0</span>
          </button>
          <button type="button" className="site-header__icon-btn" aria-label="Store locator">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

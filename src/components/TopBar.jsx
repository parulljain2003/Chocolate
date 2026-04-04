import './TopBar.css'

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar__inner container">
        <p className="top-bar__promo">
          Free shipping on orders above <strong>₹1499</strong>
        </p>
        <nav className="top-bar__links" aria-label="Quick links">
          <a href="#track">Track Order</a>
          <span className="top-bar__dot" aria-hidden />
          <a href="#bulk">Bulk Order</a>
          <span className="top-bar__dot" aria-hidden />
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  )
}

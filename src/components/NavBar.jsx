import './NavBar.css'

const items = [
  { icon: '🛒', label: 'Shop', href: '#shop' },
  { icon: '🌟', label: 'Jumbo Nuts', href: '#jumbo' },
  { icon: '💪', label: 'Snacking', href: '#snack' },
  { icon: '🌴', label: 'Dates', href: '#dates' },
  { icon: '🏷️', label: 'Combos', href: '#combos' },
  { icon: '🌱', label: 'Seeds', href: '#seeds' },
  { icon: '🍇', label: 'Berries', href: '#berries' },
  { icon: '🌿', label: 'Spices', href: '#spices' },
  { icon: '📦', label: 'Wholesale', href: '#wholesale' },
  { icon: '📝', label: 'Blog', href: '#blog' },
]

export default function NavBar() {
  return (
    <nav className="nav-bar" aria-label="Main">
      <div className="nav-bar__inner container">
        <ul className="nav-bar__list">
          {items.map((item, i) => (
            <li key={item.href} className="nav-bar__item">
              {i > 0 && <span className="nav-bar__sep" aria-hidden />}
              <a href={item.href} className="nav-bar__link">
                <span className="nav-bar__emoji" aria-hidden>
                  {item.icon}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

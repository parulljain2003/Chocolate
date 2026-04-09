import './NavBar.css'

const items = [
  { icon: '🛒', label: 'Shop', href: '#shop' },
  { icon: '🍫', label: 'Dark Bliss', href: '#dark' },
  { icon: '🥛', label: 'Milk Silk', href: '#milk' },
  { icon: '🍬', label: 'Truffles', href: '#truffles' },
  { icon: '🎁', label: 'Gift Boxes', href: '#gift' },
  { icon: '🤍', label: 'White Satin', href: '#white' },
  { icon: '🍓', label: 'Ruby Berry', href: '#ruby' },
  { icon: '☕', label: 'Hot Cocoa', href: '#cocoa' },
  { icon: '📦', label: 'Bulk Orders', href: '#wholesale' },
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

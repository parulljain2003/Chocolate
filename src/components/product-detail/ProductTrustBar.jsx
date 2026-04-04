import './ProductTrustBar.css'

const items = [
  {
    title: 'Premium quality',
    subtitle: '100% quality guarantee',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Swift shipping',
    subtitle: 'Delivering across India',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: 'Easy return',
    subtitle: 'Refer return policy',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="m16 3 4 4-4 4" />
        <path d="M20 7H9a4 4 0 0 0-4 4v1" />
        <path d="m8 21-4-4 4-4" />
        <path d="M4 17h11a4 4 0 0 0 4-4v-1" />
      </svg>
    ),
  },
  {
    title: '24/7 support',
    subtitle: 'Support every time',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M3 11a9 9 0 1 1 18 0v2a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-2" />
        <path d="M12 19v3M8 22h8" />
      </svg>
    ),
  },
]

export default function ProductTrustBar() {
  return (
    <div className="product-trust">
      {items.map((item) => (
        <div key={item.title} className="product-trust__cell">
          <span className="product-trust__icon">{item.icon}</span>
          <div className="product-trust__text">
            <strong className="product-trust__title">{item.title}</strong>
            <span className="product-trust__subtitle">{item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

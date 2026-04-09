import './AnnouncementBar.css'

const messages = [
  'Sweet Indulgence Sale — Extra 15% OFF sitewide!',
  'Artisanal Truffles — Extra 10% OFF this week',
  'Free delivery on orders above ₹1499',
]

export default function AnnouncementBar() {
  const doubled = [...messages, ...messages]
  return (
    <div className="announcement-bar">
      <div className="announcement-bar__track" aria-hidden>
        {doubled.map((text, i) => (
          <span key={i} className="announcement-bar__chunk">
            <span className="announcement-bar__icon" aria-hidden>
              💰
            </span>
            {text}
            <span className="announcement-bar__dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

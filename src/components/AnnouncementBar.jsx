import './AnnouncementBar.css'

const messages = [
  'PayDay Sale is LIVE — Extra 15% OFF sitewide!',
  'Jumbo nuts — Extra 10% OFF this week',
  'Free shipping above ₹1499',
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

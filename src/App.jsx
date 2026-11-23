import { useState } from 'react'
import './App.css'

const wedding = {
  date: 'February 27, 2027',
  time: '3:30 PM',
  venue: 'GreenMark Farm Resort',
  address: 'Barangay Conception, Bacolor, Pampanga',
  pax: '100',
  motif: 'Lavender or Shades of Light Violet',
}

const motifColors = [
  { name: 'Lavender', className: 'lavender', image: '/motif-lavender.webp' },
  { name: 'Soft Violet', className: 'soft-violet', image: '/motif-soft-violet.webp' },
  { name: 'Dusk Lilac', className: 'dusk-lilac', image: '/motif-dusk-lilac.webp' },
  { name: 'Blush Accent', className: 'blush', image: '/motif-blush.webp' },
  { name: 'Sage Accent', className: 'sage', image: '/motif-sage.webp' },
]

function App() {
  const [rsvpOpen, setRsvpOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedMotif, setSelectedMotif] = useState(motifColors[0])

  return (
    <main>
      <nav className="top-nav" aria-label="Invitation navigation">
        <a className="monogram" href="#home" aria-label="Carlo and Laarni home">C <span>&</span> L</a>
        <div className="nav-links">
          <a href="#story">Our story</a>
          <a href="#details">Details</a>
          <a href="#rsvp">RSVP</a>
        </div>
        <button className="nav-rsvp" type="button" onClick={() => setRsvpOpen(true)}>Respond</button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Together with their families</p>
          <h1>Carlo <span>&</span><br />Laarni</h1>
          <p className="invitation-line">joyfully invite you to celebrate their wedding</p>
          <div className="hero-date">
            <span>{wedding.date}</span>
            <i aria-hidden="true" />
            <span>{wedding.time}</span>
          </div>
          <button className="primary-button" type="button" onClick={() => setRsvpOpen(true)}>
            RSVP
          </button>
        </div>
        <div className="hero-image" role="img" aria-label="Lavender and blush wedding flowers">
          <div className="image-vignette" />
          <div className="floral-seal"><span>Forever</span><small>starts here</small></div>
        </div>
      </section>

      <section className="story" id="story">
        <div className="section-heading">
          <p>Our Story</p>
          <h2>A lifetime of love begins here</h2>
        </div>
        <div className="story-card">
          <div className="story-quote">
            <span className="quote-mark">“</span>
            <p>We cannot imagine our forever without you beside us as we begin this beautiful new chapter.</p>
            <span className="script-signature">Carlo &amp; Laarni</span>
          </div>
          <div className="story-flower" aria-hidden="true">
            <div className="bouquet">
              <i /><i /><i /><i /><i /><i /><i /><i /><i />
            </div>
          </div>
        </div>
      </section>

      <section className="details" id="details">
        <div className="section-heading">
          <p>The Celebration</p>
          <h2>Save the date</h2>
        </div>
        <div className="detail-grid">
          <article>
            <span className="detail-number">01</span>
            <div className="detail-icon" aria-hidden="true">♡</div>
            <h3>When</h3>
            <p>{wedding.date}</p>
            <small>{wedding.time}</small>
          </article>
          <article>
            <span className="detail-number">02</span>
            <div className="detail-icon" aria-hidden="true">⌖</div>
            <h3>Where</h3>
            <p>{wedding.venue}</p>
            <small>{wedding.address}</small>
          </article>
          <article>
            <span className="detail-number">03</span>
            <div className="detail-icon" aria-hidden="true">♢</div>
            <h3>Dress Code &amp; Motif</h3>
            <p>Garden Formal</p>
            <small>{wedding.pax} guests · Garden formal</small>
          </article>
        </div>
        <div className="venue-map">
          <iframe
            title="Google Map to GreenMark Farm Resort"
            src="https://www.google.com/maps?q=GreenMark+Farm+Resort,+Barangay+Conception,+Bacolor,+Pampanga&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className="map-link"
            href="https://maps.app.goo.gl/XfH9QxYT3ekzR1Vg7"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="motif-section">
          <div
            className="motif-image"
            role="img"
            aria-label={`${selectedMotif.name} wedding attire inspiration`}
          >
            <img
              src={selectedMotif.image}
              alt={`${selectedMotif.name} wedding attire`}
              key={selectedMotif.name}
            />
            <span>{selectedMotif.name}</span>
          </div>
          <div className="motif-copy">
            <p className="modal-eyebrow">Suggested colors</p>
            <h3>Wear our wedding motif</h3>
            <p>Click a color to preview the matching attire. Our motif palette combines lavender, soft violet, blush, and sage accents.</p>
            <div className="color-palette" aria-label="Wedding motif color palette">
              {motifColors.map((color) => (
                <button
                  className={`color-swatch ${color.className}${selectedMotif.name === color.name ? ' is-selected' : ''}`}
                  type="button"
                  aria-label={`Preview ${color.name}`}
                  aria-pressed={selectedMotif.name === color.name}
                  onClick={() => setSelectedMotif(color)}
                  key={color.name}
                >
                  <span>{color.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rsvp-banner" id="rsvp">
        <div className="rsvp-text">
          <p>Kindly respond</p>
          <h2>Be part of our special day</h2>
        </div>
        <button className="outline-button" type="button" onClick={() => setRsvpOpen(true)}>
          Send your RSVP
        </button>
      </section>

      <footer>
        <span>Carlo &amp; Laarni</span>
        <p>With love, forever</p>
      </footer>

      {rsvpOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setRsvpOpen(false)}>
          <div className="rsvp-modal" role="dialog" aria-modal="true" aria-labelledby="rsvp-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="close-button" type="button" aria-label="Close RSVP" onClick={() => setRsvpOpen(false)}>×</button>
            {submitted ? (
              <div className="success">
                <div>♡</div>
                <h2 id="rsvp-title">Thank you!</h2>
                <p>Your response has been noted.</p>
                <button className="primary-button" type="button" onClick={() => setRsvpOpen(false)}>Close</button>
              </div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
                <p className="modal-eyebrow">Your response</p>
                <h2 id="rsvp-title">Will you join us?</h2>
                <label>
                  Guest name
                  <input name="name" type="text" placeholder="Your full name" required />
                </label>
                <label>
                  Attendance
                  <select name="attendance" defaultValue="joyfully attending">
                    <option>Joyfully attending</option>
                    <option>Sadly declining</option>
                  </select>
                </label>
                <label>
                  A note for the couple
                  <textarea name="message" placeholder="Share a message..." rows="3" />
                </label>
                <button className="primary-button" type="submit">Send RSVP</button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

export default App

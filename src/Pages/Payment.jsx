import { useMemo, useState } from 'react';
import { AppleLogo, GoogleLogo } from '../Components/BrandIcons.jsx';
import '../Styles/payment.css';

const paymentMethods = [
  { id: 'card', label: 'Credit Card' },
  { id: 'apple', label: ' Pay', icon: AppleLogo },
  { id: 'google', label: ' Pay', icon: GoogleLogo },
];

const booking = {
  title: 'Luxury King Suite',
  hotel: 'Raven London Central',
  dates: 'Oct 24 – Oct 27, 2024',
  duration: '3 Nights',
  guests: '2 Adults',
  roomSubtotal: 225000,
  taxes: 30000,
  total: 255000,
  currency: '₦',
};

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(value / 100);

export default function Payment() {
  const [method, setMethod] = useState('card');
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const canSubmit = useMemo(() => {
    if (method !== 'card') return true;
    return cardName.trim() && cardNumber.replace(/\s+/g, '').length >= 12 && expiry.length >= 4 && cvv.length >= 3;
  }, [method, cardName, cardNumber, expiry, cvv]);

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="logo" aria-hidden="true">
            <span className="logo-icon">R</span>
          </div>
          <span className="brand-name">Raven</span>
        </div>

        <nav className="nav">
          <a href="#" className="nav-link">
            Destinations
          </a>
          <a href="#" className="nav-link">
            Experiences
          </a>
          <a href="#" className="nav-link">
            My Stays
          </a>
          <a href="#" className="nav-link">
            Membership
          </a>
        </nav>

        <div className="profile">
          <div className="avatar" aria-hidden="false">
            J
          </div>
        </div>
      </header>

      <main className="page">
        <section className="checkout">
          <div className="checkout__form">
            <h1 className="checkout__title">Secure Checkout</h1>
            <p className="checkout__subtitle">Confirm your details for an exceptional stay in London.</p>

            <fieldset className="payment-methods" aria-label="Payment method">
              <legend className="sr-only">Payment method</legend>
              {paymentMethods.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`payment-method${method === item.id ? ' active' : ''}`}
                    onClick={() => setMethod(item.id)}
                  >
                    {Icon ? <Icon className="payment-method__icon" /> : null}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </fieldset>

            <form className="payment-form" onSubmit={(event) => event.preventDefault()}>
              <label className="field">
                <span className="field__label">Cardholder name</span>
                <input
                  className="field__input"
                  placeholder="e.g. Julian Raven"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </label>

              <label className="field">
                <span className="field__label">Card number</span>
                <div className="field__row">
                  <input
                    className="field__input"
                    placeholder="0000 0000 0000 0000"
                    inputMode="numeric"
                    maxLength={19}
                    value={cardNumber}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/\D/g, '');
                      const formatted = cleaned.replace(/(.{4})/g, '$1 ').trim();
                      setCardNumber(formatted);
                    }}
                  />
                  <span className="field__icon" aria-hidden="true">💳</span>
                </div>
              </label>

              <div className="field-grid">
                <label className="field">
                  <span className="field__label">Expiry date</span>
                  <input
                    className="field__input"
                    placeholder="MM / YY"
                    inputMode="numeric"
                    maxLength={5}
                    value={expiry}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/\D/g, '');
                      const formatted = cleaned.replace(/(.{2})/, '$1/');
                      setExpiry(formatted.slice(0, 5));
                    }}
                  />
                </label>

                <label className="field">
                  <span className="field__label">CVV</span>
                  <input
                    className="field__input"
                    placeholder="000"
                    inputMode="numeric"
                    maxLength={4}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                  />
                </label>
              </div>

              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                />
                <span>Save card for future stays</span>
              </label>

              <button type="submit" disabled={!canSubmit} className="cta">
                Complete Booking
              </button>

              <p className="disclaimer">
                By clicking “Complete Booking” you agree to Raven’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </p>
            </form>
          </div>

          <aside className="checkout__summary">
            <div className="summary-card">
              <div className="summary-card__media" aria-hidden="true">
                <div className="summary-card__image" />
                <div className="summary-card__badge">Raven London Central</div>
              </div>

              <div className="summary-card__content">
                <h2 className="summary-card__title">Luxury King Suite</h2>
                <dl className="summary-card__details">
                  <div className="detail">
                    <dt>Dates</dt>
                    <dd>{booking.dates}</dd>
                  </div>
                  <div className="detail">
                    <dt>Duration</dt>
                    <dd>{booking.duration}</dd>
                  </div>
                  <div className="detail">
                    <dt>Guests</dt>
                    <dd>{booking.guests}</dd>
                  </div>
                </dl>

                <div className="summary-card__pricing">
                  <div className="pricing-row">
                    <span>Room subtotal</span>
                    <span>{formatCurrency(booking.roomSubtotal)}</span>
                  </div>
                  <div className="pricing-row">
                    <span>Taxes & fees</span>
                    <span>{formatCurrency(booking.taxes)}</span>
                  </div>
                  <div className="pricing-row total">
                    <span>Total</span>
                    <span>
                      {booking.currency}
                      {booking.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="summary-card__benefits">
                  <div className="benefit">
                    {/* <span className="benefit__icon" aria-hidden="true">
                      🔒
                    </span> */}
                    <div>
                      <button className="SSL"> 🔒 SECURE SSL ENCRYPTION</button>
                    </div>
                  </div>
                  <div className="benefit">
                    {/* <span className="benefit__icon" aria-hidden="true">
                      ⚡
                    </span>*/}
                    <div>
                      <button className="INSTANT"> ⚡ INSTANT CONFIRMATION</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </aside>
        </section>
      </main>
<div className="callout">
              <div className="callout__content">
                <h3>The smarter way to stay</h3>
                <p>
                  We’ve reimagined luxury for the modern era. No more waiting in lines or standard experiences. Every detail is
                  calibrated to your personal taste.
                </p>
                <button className="callout__cta">Start booking</button>
              </div>
              <ul className="callout__features">
                <li>
                  <span className="feature-icon">📱</span>
                  <div>
                    <strong>Mobile-first booking</strong>
                    <span>Secure your suite in under 60 seconds with our streamlined mobile interface.</span>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">🗝️</span>
                  <div>
                    <strong>Digital key & check‑in</strong>
                    <span>Bypass the front desk. Your phone is your key, and check‑in is instantaneous.</span>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">💡</span>
                  <div>
                    <strong>Personalized preferences</strong>
                    <span>Room temperature, lighting scenes, and pillow types remembered across every stay.</span>
                  </div>
                </li>
                <li>
                  <span className="feature-icon">🤝</span>
                  <div>
                    <strong>Elite concierge</strong>
                    <span>Dedicated human support for travel arrangements, reservations, and local insights.</span>
                  </div>
                </li>
              </ul>
            </div>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Raven Hospitality Group. All rights reserved.</span>
        <div className="footer__links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { AppleLogo, GoogleLogo } from "../Components/BrandIcons.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import "../Styles/payment.css";
import logo from "../assets/logo.svg";

const paymentMethods = [
  { id: "card", label: "Credit / Debit Card" },
  { id: "apple", label: "Apple Pay", icon: AppleLogo },
  { id: "google", label: "Google Pay", icon: GoogleLogo },
];

const booking = {
  title: "Luxury King Suite",
  hotel: "Raven London Central",
  dates: "Dec 12 – Dec 15, 2026",
  duration: "3 Nights",
  guests: "2 Adults",
  roomSubtotal: 225000,
  taxes: 30000,
  total: 255000,
  currency: "₦",
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const isValidExpiry = (value) => {
  const match = /^(0[1-9]|1[0-2])\/(\d{2})$/.exec(value);
  if (!match) return false;

  const now = new Date();
  const month = Number(match[1]);
  const year = 2000 + Number(match[2]);

  return (
    year > now.getFullYear() ||
    (year === now.getFullYear() && month >= now.getMonth() + 1)
  );
};

export default function Payment() {
  const [method, setMethod] = useState("card");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const isCard = method === "card";

  const canSubmit = useMemo(() => {
    if (!isCard) return true;

    const digits = cardNumber.replace(/\D/g, "");

    return Boolean(
      cardName.trim() &&
        digits.length >= 15 &&
        digits.length <= 16 &&
        isValidExpiry(expiry) &&
        /^\d{3,4}$/.test(cvv)
    );
  }, [isCard, cardName, cardNumber, expiry, cvv]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (canSubmit) setConfirmed(true);
  };

  return (
    <div className="app">
      <header className="topbar">
        <div className="payment-brand">
          <Link to="/" aria-label="Raven Hospitality home">
            <img className="brand__logo" src={logo} alt="Raven Hospitality" />
          </Link>
        </div>

        <nav className="payment-nav" aria-label="Main navigation">
          <a href="#" className="payment-nav-link">Destinations</a>
          <a href="#" className="payment-nav-link">Experiences</a>
          <a href="#" className="payment-nav-link">My Stays</a>
          <a href="#" className="payment-nav-link">Membership</a>
        </nav>

        <div className="payment-profile">
          <div className="payment-avatar" aria-label="Signed in as Julian">J</div>
        </div>
      </header>

      <main className="payment-page">
        <section className="checkout">
          <div className="checkout__form">
            <h1 className="checkout__title">Secure Checkout</h1>
            <p className="checkout__subtitle">
              Confirm your details for an exceptional stay in London.
            </p>

            {confirmed && (
              <div className="confirmation" role="status">
                <strong>Booking confirmed.</strong> A confirmation has been sent
                for your stay at {booking.hotel}.
              </div>
            )}

            <fieldset className="payment-methods" aria-label="Payment method">
              <legend className="sr-only">Payment method</legend>
              {paymentMethods.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`payment-method${method === item.id ? " active" : ""}`}
                    aria-pressed={method === item.id}
                    onClick={() => {
                      setMethod(item.id);
                      setConfirmed(false);
                    }}
                  >
                    {Icon && <Icon className="payment-method__icon" />}
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </fieldset>

            <form className="payment-form" onSubmit={handleSubmit} noValidate>
              {isCard ? (
                <>
                  <label className="field">
                    <span className="field__label">Cardholder name</span>
                    <input
                      className="field__input"
                      name="cc-name"
                      autoComplete="cc-name"
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
                        name="cc-number"
                        autoComplete="cc-number"
                        placeholder="0000 0000 0000 0000"
                        inputMode="numeric"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 16);
                          setCardNumber(digits.replace(/(.{4})/g, "$1 ").trim());
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
                        name="cc-exp"
                        autoComplete="cc-exp"
                        placeholder="MM / YY"
                        inputMode="numeric"
                        maxLength={5}
                        value={expiry}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
                          setExpiry(
                            digits.length > 2
                              ? `${digits.slice(0, 2)}/${digits.slice(2)}`
                              : digits
                          );
                        }}
                      />
                    </label>

                    <label className="field">
                      <span className="field__label">CVV</span>
                      <input
                        className="field__input"
                        name="cc-csc"
                        autoComplete="cc-csc"
                        type="password"
                        placeholder="000"
                        inputMode="numeric"
                        maxLength={4}
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                      />
                    </label>
                  </div>

                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="save-card"
                      checked={saveCard}
                      onChange={(e) => setSaveCard(e.target.checked)}
                    />
                    <span>Save card for future stays</span>
                  </label>
                </>
              ) : (
                <div className="wallet-note">
                  <span aria-hidden="true">↗</span>
                  <p>
                    You’ll be asked to approve this payment with{" "}
                    <strong>{method === "apple" ? "Apple Pay" : "Google Pay"}</strong>{" "}
                    after you continue.
                  </p>
                </div>
              )}

              <button type="submit" disabled={!canSubmit} className="cta">
                {isCard ? "Complete Booking" : `Continue with ${method === "apple" ? "Apple Pay" : "Google Pay"}`}
              </button>

              {isCard && !canSubmit && (
                <p className="form-hint">
                  Enter a valid card name, number, future expiry date and CVV to
                  continue.
                </p>
              )}

              <p className="disclaimer">
                By continuing you agree to Raven’s{" "}
                <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
              </p>
            </form>
          </div>

          <aside className="checkout__summary">
            <div className="summary-card">
              <div className="summary-card__media" aria-hidden="true">
                <div className="summary-card__image" />
              </div>

              <div className="summary-card__content">
                <span className="summary-card__badge">{booking.hotel}</span>
                <h2 className="summary-card__title">{booking.title}</h2>
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
                    <span>Taxes &amp; fees</span>
                    <span>{formatCurrency(booking.taxes)}</span>
                  </div>
                  <div className="pricing-row total">
                    <span>Total</span>
                    <span>{formatCurrency(booking.total)}</span>
                  </div>
                </div>

                <div className="summary-card__benefits">
                  <span className="benefit-chip">
                    <span aria-hidden="true">🔒</span> Secure SSL encryption
                  </span>
                  <span className="benefit-chip">
                    <span aria-hidden="true">⚡</span> Instant confirmation
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}

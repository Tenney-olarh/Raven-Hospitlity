import "./Hero.css"
import Himg from "../../assets/Luxury Hotel Suite.png"
import { FaHome, FaKey, FaHeadset, FaCrown, FaStar } from "react-icons/fa"
import { useState } from "react"

function Hero(){

  const [form, setForm] = useState({
    destination: "Lagos, Nigeria",
    checkIn: "",
    checkOut: "",
    guests: 2
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm(prev => {
      if (name === "checkIn" && !prev.checkOut) {
        const nextDay = new Date(value)
        nextDay.setDate(nextDay.getDate() + 1)
        return { ...prev, checkIn: value, checkOut: nextDay.toISOString().split("T")[0] }
      }
      return { ...prev, [name]: value }
    })
  }

  const handleSearch = () => {
    console.log("Booking Data:", form)
  }

  const formatDate = (date) => {
    if (!date) return "Add Date"
    const d = new Date(date)
    const day = d.getDate()
    const suffix = day === 1 || day === 21 || day === 31 ? "st" :
                   day === 2 || day === 22 ? "nd" :
                   day === 3 || day === 23 ? "rd" : "th"
    const month = d.toLocaleString("en-US", { month: "short" })
    const year = d.getFullYear()
    return `${day}${suffix}, ${month}, ${year}`
  }

  return (
    <section className="hero" id="about">

      <div className="hero-wrapper">

        {/* LEFT */}
        <div className="hero-left">

          <p className="hero-tag">A NEW STANDARD IN HOSPITALITY</p>

          <h1 className="hero-title">
            Where Every <br />
            Stay Feels Like <br />
            It Was Made for <br />
            You.
          </h1>

          <p className="hero-desc">
            Experience the quiet confidence of refined luxury. <br />
            We blend traditional Nigerian warmth with <br />
            contemporary editorial precision.
          </p>

          <div className="hero-line"></div>

          {/* BOOKING FORM */}
          <div className="booking-box">

            <div className="booking-fields">

              <div>
                <small>DESTINATION</small>
                <input
                  type="text"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                />
              </div>

              <div
                className="date-field"
                onClick={() => document.getElementById("checkIn").showPicker()}
              >
                <small>CHECK IN</small>
                <input
                  id="checkIn"
                  type="date"
                  name="checkIn"
                  value={form.checkIn}
                  onChange={handleChange}
                />
                <span>{form.checkIn ? formatDate(form.checkIn) : "Add Date"}</span>
              </div>

              <div
                className="date-field"
                onClick={() => document.getElementById("checkOut").showPicker()}
              >
                <small>CHECK OUT</small>
                <input
                  id="checkOut"
                  type="date"
                  name="checkOut"
                  value={form.checkOut}
                  onChange={handleChange}
                />
                <span>{form.checkOut ? formatDate(form.checkOut) : "Add Date"}</span>
              </div>

              <div>
                <small>GUESTS</small>
                <input
                  type="number"
                  name="guests"
                  value={form.guests}
                  min="1"
                  onChange={handleChange}
                />
              </div>

            </div>

            <button className="search-btn" onClick={handleSearch}>
              SEARCH AVAILABLE STAYS
            </button>

          </div>

          <div className="hero-foot">
            <FaStar />
            <span>THE PREMIER CHOICE FOR GLOBAL TRAVELERS</span>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={Himg} alt="Luxury Room" />
        </div>

      </div>

      {/* FEATURES (FULL WIDTH) */}
      <div className="hero-features">

        <div className="feature">
          <FaHome />
          <span>10,000+ STAYS</span>
        </div>

        <div className="feature">
          <FaKey />
          <span>INSTANT CHECK-IN</span>
        </div>

        <div className="feature">
          <FaHeadset />
          <span>24/7 CONCIERGE</span>
        </div>

        <div className="feature">
          <FaCrown />
          <span>RAVEN LOYALTY</span>
        </div>

      </div>

    </section>
  )
}

export default Hero
import "./Hero.css"
import Himg from "../../assets/Luxury Hotel Suite.png"
import { FaHome, FaKey, FaHeadset, FaCrown, FaStar } from "react-icons/fa"
import { useState } from "react"
function Hero(){
   const [form, setForm] = useState({
      destination:"Lagos,Nigeria",
      checkIn:"",
      checkOut:"",
      guests:2
   })
   const handleChange = (e) =>{
      const {name,value} = e.target
      setForm(prev => ({
         ...prev,
         [name]: value
      }))
   }
   const handlesearch = () =>{
      console.log("Booking Data:",form)
   }
  return (
    <section className="hero">

      <div className="hero-wrapper">

        {/* LEFT SIDE */}
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
               onChange={handleChange}/>
              </div>

              <div>
                <small>CHECK IN</small>
                <input 
                type="text"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange} 
                />
              </div>

              <div>
                <small>CHECK OUT</small>
                <input 
                type="text"
                name="checkOut"
                value={form.checkOut}
                onChange={handleChange} 
                />
              </div>

              <div>
                <small>GUESTS</small>
                <input 
                type="text"
                name="guests"
                value={form.guests}
                min="1"
                onChange={handleChange} 
                />
              </div>
            </div>

            <button className="search-btn">
              SEARCH AVAILABLE STAYS
            </button>
          </div>

          <p className="hero-foot">
            <FaStar/>
            <span>THE PREMIER CHOICE FOR GLOBAL TRAVELERS</span>
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={Himg} alt="Luxury Room" />
        </div>

      </div>
      

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


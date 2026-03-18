import { act } from "react";
import { homeActions, menuItems, offerItems } from "./config";
import { Link } from "react-router-dom";

//this will later be modified to directly pull the user's name from the API

const userName = "Adaeze";
const hotelName = "RAVENS LONDON CENTRAL";
// const hotelImage = "/room1.png";
const roomType = "Luxury King Suite";
const confirmationID = "RVN8829-24";
const userCheckinDate = "Oct 24, 2024";
const userCheckoutDate = "Oct 27, 2024";
const userFullName = "Adaeze Okonkwo";
const pointCount = 42850;
const remainingPoints = 7150;
const nextLevel = "PLATINUM";

/////////////////////////////////////////////

function HomePage() {
  return (
    <div className="home-container">
      {/* NAVIGATION BAR SECTION */}
      <nav className="nav">
        <img src="/logo.svg" alt="Site Logo" className="logo" />

        <div className="nav__bar">
          <ul className="nav__menus">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="nav__avater-wrapper">
            <img
              src="/avatar-homepage.jpg"
              alt="Profile Image"
              className="nav__avater"
            />
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome back, {userName}</h1>
        <p>Your sanctuary in the heart of London awaits your arrival.</p>

        <div className="hero__buttons">
          {homeActions.map((action) => (
            <button key={action.text}>
              <img src={action.icon} alt={action.alt} />
              {action.text} <span>{">"}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="status">
        {/* left section */}
        <div className="status__upcoming-event">
          <h2>Upcoming Journey</h2>
          <div className="event">
            <div className="event__img">
              <img src="/room1.png" alt="Hotel Room" />
            </div>

            <div className="event__details">
              <div>
                <img src="/location_icon.svg" alt="Location Icon" /> {hotelName}
              </div>
              <h3>{roomType}</h3>
              <p>Confirmation #{confirmationID}</p>

              <div className="event__schedule">
                <div>
                  <p>check-in</p>
                  <p>{userCheckinDate}</p>
                </div>
                <div>
                  <p>check-out</p>
                  <p>{userCheckoutDate}</p>
                </div>
              </div>

              <div className="event__cta">manage my stay</div>
            </div>
          </div>
        </div>

        {/* right section - status real-time check*/}
        <div className="status__rewards">
          <h2>Status and Rewards</h2>
          <div className="reward">
            <h3 className="reward__title">Gold Member</h3>
            <p className="reward__user-name">{userFullName}</p>
            <div className="reward__point">
              <p>Total Points</p>
              <p className="point__count">{pointCount}</p>
              <div className="point__status-bar"></div>
              <p>
                {remainingPoints} POINTS UNTIL {nextLevel} STATUS
              </p>
            </div>
            <a href="#">View Member Benefits</a>
          </div>
        </div>
      </section>

      <section className="offer">
        <div>
          <h2>Curated For You</h2>
          <p>Explore All Experiences</p>
        </div>

        {offerItems.map((offer) => (
          <div key={offer.title} className="offer__details">
            <div className="offer__image-wrapper">
              <img src={offer.image} alt={offer.alt} className="offer__image" />
            </div>
            <h3 className="offer__title">{offer.title}</h3>
            <p className="offer__description">{offer.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
export default HomePage;

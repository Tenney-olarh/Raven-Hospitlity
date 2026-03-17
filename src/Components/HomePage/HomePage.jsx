import { act } from "react";
import { homeActions, menuItems } from "./config";
import { Link } from "react-router-dom";

//this will later be modified to directly pull the user's name from the API

const userName = "Adaeze";
const hotelName = "RAVENS LONDON CENTRAL";
const hotelImage = "/assets/room1.png";
const roomType = "Luxury King Suite";
const confirmationID = "RVN8829-24";

/////////////////////////////////////////////

function HomePage() {
  return (
    <body>
      {/* NAVIGATION BAR SECTION */}
      <nav className="nav">
        <img src=".../assets/logo.svg" alt="Site Logo" className="logo" />

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
              src=".../assets/avater-homepage.jpg"
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
        <div className="status__upcoming-event">
          <h2>Upcoming Journey</h2>
          <div className="event">
            <div className="event__img">
              <img src={hotelImage} alt="Hotel Room" />
            </div>
            <div className="event__details">
              <div>
                <img src="/assets/location_icon.svg" alt="Location Icon" />{" "}
                {hotelName}
              </div>
              <h3>{roomType}</h3>
              <p>Confirmation #{confirmationID}</p>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}
export default HomePage;

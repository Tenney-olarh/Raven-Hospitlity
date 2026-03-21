import "../../Styles/home/home-page.css";
import { homeActions, menuItems, offerItems } from "./config";
import Navbar from "./NavBar";
import Offer from "./Offers";
import Status from "./Status";
import Hero from "./Hero";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import { fetchUserData } from "../../data/mockAPI";

//this will later be modified to directly pull from the API

const hotelName = "RAVENS LONDON CENTRAL";
const roomType = "Luxury King Suite";
const userCheckinDate = "Oct 24, 2024";
const userCheckoutDate = "Oct 27, 2024";
const userFullName = "Adaeze Okonkwo";

/////////////////////////////////////////////

function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserData()
      .then((data) => setUser(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [user]);

  console.log(user);

  if (loading)
    return (
      <p
        style={{
          display: "flex",
          fontSize: "34px",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        Loading....
      </p>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="dashboard">
      <Navbar menu={menuItems} />
      <Hero userName={user.firstName} actions={homeActions} />
      <Status
        userFullName={user.fullName}
        pointCount={user.point}
        remainingPoints={user.remainingPoint}
        tier={user.tier}
        nextTier={user.nextTier}
        hotelName={hotelName}
        roomType={roomType}
        confirmationID={user.confirmationID}
        userCheckinDate={userCheckinDate}
        userCheckoutDate={userCheckoutDate}
      />
      <Offer offers={offerItems} />
      <Footer />
    </div>
  );
}
export default HomePage;

import {Link,NavLink,Outlet} from "react-router-dom"
import {useState} from "react"
import "./ServiceLayout.css"
import logo from "../../assets/logo.svg"
import { FaBell,FaUserCircle,FaUtensils, FaCocktail, FaSpa, FaBroom, FaSwimmer } from "react-icons/fa"
import Footer from "../../Components/Footer/Footer"
function ServiceLayout() {
  const [isOpen, setIsopen] = useState(true)
  return (
   <div className="service-layout">
     <div className="dashboards">

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="room-info">
          <h2>Welcome Adaeze</h2>
        <h6>Room 605</h6>
       <p>Presidential Suite</p>
      </div>

      <ul>
        <li>
          <NavLink to="/services/food">
            <FaUtensils /> Food
         </NavLink>
        </li>

         <li>
          <NavLink to="/services/drinks">
           <FaCocktail /> Drinks
          </NavLink>
       </li>

       <li>
          <NavLink to="/services/spa">
           <FaSpa /> Spa
          </NavLink>
       </li>

       <li>
         <NavLink to="/services/housekeeping">
           <FaBroom /> Housekeeping
         </NavLink>
       </li>

       <li>
         <NavLink to="/services/activities">
           <FaSwimmer /> Activities
          </NavLink>
        </li>
</ul>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* NAVBAR */}
        <div className="servnavbar">
           <div className="servnav-logo">
             <Link to="/"> <img src={logo} alt="Raven Logo" /></Link> 
            </div>
         <div className="servnav-centre">
           <input type="text" placeholder="Search..." />
         </div>
          <div className="servnav-icons">
             <FaBell />
              <FaUserCircle />
          </div>
        </div>

        {/* DYNAMIC CONTENT */}
        <div className="content">
          <Outlet />
        </div>
      
      </div>
    

    </div>
    <Footer/>
   </div>
     
  )
}

export default ServiceLayout
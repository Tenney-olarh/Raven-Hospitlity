import {Link} from "react-router-dom"
import logo from "../../assets/raven.svg.svg"
import "./Navbar.css"
function Navbar (){
    return (
        <nav className="navbar">
           <div className="logo">
            <Link to="/"> <img src={logo} alt="Raven Logo" /></Link> 
           </div>
           <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#stays">Stays</a></li>
            <li><a href="#why-raven">Why Raven</a></li>
           </ul>
           <div className="nav-action">
            <Link to= "/login" className="signin">Sign In</Link>
            <Link to= "/payment"><button className="book-btn">Book Now</button></Link>
           </div>
        </nav>
    )
};
export default Navbar 
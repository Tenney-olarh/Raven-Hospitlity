import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import "./Navbar.css"
function Navbar (){
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
           <div className="navbar-logo">
            <Link to="/"> <img src={logo} alt="Raven Logo" /></Link> 
           </div>
           <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#stays" onClick={closeMenu}>Stays</a></li>
            <li><a href="#why-raven" onClick={closeMenu}>Why Raven</a></li>
            <li className="mobile-action">
                <Link to="/login" className="signin" onClick={closeMenu}>Sign In</Link>
            </li>
            <li className="mobile-action">
                <Link to="/payment" onClick={closeMenu}><button className="book-btn">Book Now</button></Link>
            </li>
           </ul>
           <div className="nav-action">
            <Link to= "/login" className="signin">Sign In</Link>
            <Link to= "/payment"><button className="book-btn">Book Now</button></Link>
           </div>
           <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
           >
            <span></span>
            <span></span>
            <span></span>
           </button>
        </nav>
    )
};
export default Navbar

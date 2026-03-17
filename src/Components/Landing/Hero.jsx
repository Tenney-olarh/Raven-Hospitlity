import Himg from "../../assets/Luxury Hotel Suite.png"
import {Link} from "react-router-dom"
import "./Hero.css"
function Hero(){
  return (
    <div>
        <div className="prent1">
           <div className="text1">
             <p>A NEW STANDARD IN HOSPITALITY</p>
             <h1>where Every Stay Feels like It Was Made For You.  </h1>
             <div className="text2">
                 <p>Experience the quiet confidence of refined Luxury.</p>
                 <p>We blend traditional Nigerian Warmth with contemporary     editorial precision</p>
              </div>
           </div>
           <div className="child2">
              <Link to="./"><img src={Himg} alt="" /></Link>
           </div>
        </div  >
    </div       >
  )
}

export default Hero






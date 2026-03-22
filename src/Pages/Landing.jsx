import BookingForm from "../Components/Landing/BookingForm"
import CuratedStays from "../Components/Landing/CuratedStays"
import Footer from "../Components/Footer/Footer"
import Hero from "../Components/Landing/Hero"
import Navbar from "../Components/Landing/Navbar"

function Landing(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <CuratedStays/>
    <Footer/>
    </>
  )
}
export default Landing;
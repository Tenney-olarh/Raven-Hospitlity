import CuratedStays from "../Components/Landing/CuratedStays"
import Footer from "../Components/Footer/Footer"
import Hero from "../Components/Landing/Hero"
import Navbar from "../Components/Landing/Navbar"

function Landing(){
  return(
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <CuratedStays />
      </main>
      <Footer />
    </>
  )
}
export default Landing;
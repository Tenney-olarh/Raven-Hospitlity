import "./CuratedStays.css"
import img1 from "../../assets/suite.png"
import img2 from "../../assets/Minimalist studio.png"
import img3 from "../../assets/Container.png"

function CuratedStays() {

  const stays = [
    {
      title: "The Eko Royal Suite",
      desc: "Ocean view, private balcony, and 24-hour dedicated butler service.",
      price: "₦245,000",
      img: img1
    },
    {
      title: "Heritage Loft",
      desc: "Industrial aesthetics meets African craft. Perfect for creative retreats.",
      price: "₦180,000",
      img: img2
    },
    {
      title: "Savanna Presidential",
      desc: "Expansive living space with floor-to-ceiling windows and premium bar.",
      price: "₦310,000",
      img: img3
    }
  ]

  return (
    <section className="stays" id="stays">

      <h2 className="stays-title">Curated Stays</h2>

      <div className="stays-grid">

        {stays.map((stay, index) => (
          <div className="stay-card" key={index}>

            <div className="stay-img">
              <img src={stay.img} alt={stay.title} />
            </div>

            <div className="stay-content">
              <h3>{stay.title}</h3>
              <p>{stay.desc}</p>

              <div className="stay-bottom">
                <span className="price">{stay.price} / night</span>
                <button>BOOK THIS ROOM →</button>
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default CuratedStays
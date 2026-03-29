import "./Housekeeping.css"

function Housekeeping() {
  const services = [
    {
      id: 1,
      name: "Room Cleaning",
      desc: "Enjoy a spotless and refreshed space with our full room cleaning service.",
      time: "30 - 45 mins",
      price: "$15",
      img: "https://i.pinimg.com/1200x/39/5b/63/395b6341e0024b20d30af75bcbd264d1.jpg"
    },
    {
      id: 2,
      name: "Laundry Service",
      desc: "Freshly washed, dried, and neatly folded clothes delivered to your room.",
      time: "Same Day",
      price: "$20",
      img: "https://i.pinimg.com/1200x/28/66/47/2866477f404409e05540736ba9f40ade.jpg"
    },
    {
      id: 3,
      name: "Bed Setup",
      desc: "Perfectly arranged bedding for a cozy and restful sleep experience.",
      time: "15 mins",
      price: "$10",
      img: "https://i.pinimg.com/736x/a6/94/f7/a694f7ffc20b677a079125c669eb7b22.jpg"
    },
    {
      id: 4,
      name: "Bathroom Refresh",
      desc: "Clean, sanitized, and restocked bathroom for maximum comfort.",
      time: "20 mins",
      price: "$12",
      img: "https://i.pinimg.com/1200x/d8/47/18/d847189de2fc80bb56e8246c9e022572.jpg"
    },
    {
      id: 5,
      name: "Towel Replacement",
      desc: "Fresh, soft towels delivered instantly for your convenience.",
      time: "10 mins",
      price: "$5",
      img: "https://i.pinimg.com/1200x/3d/6d/d0/3d6dd00de167eae1e60ef5ebb823a49e.jpg"
    },
    {
      id: 6,
      name: "Ironing Service",
      desc: "Get crisp wrinkle-free Outfits prepared for your metings and outings.",
      time: "30 mins",
      price: "$30",
      img: "https://i.pinimg.com/1200x/9d/80/63/9d8063b3db86bcf7268fd12bd2985c1f.jpg"
    },
    {
      id: 7,
      name: "Room Fragrance",
      desc: "Light, refreshing scents to elevate your room atmosphere instantly.",
      time: "5 mins",
      price: "$6",
      img: "https://i.pinimg.com/1200x/3c/ac/75/3cac75de25627780a21728670fa00445.jpg"
    },
    {
      id: 8,
      name: "Mini Bar Restock",
      desc: "Replenish your minibar with premium snacks and beverages.",
      time: "15 mins",
      price: "$18",
      img: "https://i.pinimg.com/736x/e7/88/fe/e788fea44657afdcf4a0b33ae6a71a98.jpg"
    },
    {
      id: 9,
      name: "Luggage Assistance",
      desc: "Seamless help with packing,Unpacking, or moving your lugage with ease ",
      time: "15 mins",
      price: "$10",
      img: "https://i.pinimg.com/736x/d8/5c/d4/d85cd42217b680cf9e6a24508c940dff.jpg"
    }
  ]

  return (
    <section className="house-section">
      <h2 className="house-title">Housekeeping</h2>

      <div className="house-grid">
        {services.map(item => (
          <div className="house-card" key={item.id}>

            <div className="house-img">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="house-content">
              <p className="house-desc">{item.desc}</p>

              <span className="house-time">{item.time}</span>

              <div className="house-bottom">
                <span className="price">{item.price}</span>
                <span className="house-name">{item.name}</span>
                <button>REQUEST →</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Housekeeping
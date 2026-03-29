import "./Activities.css"

function Activities() {
  const activities = [
    {
      id: 1,
      name: "Sunset Yacht Cruise",
      desc: "Sail into the golden horizon with calm waves, soft music, and a luxury onboard experience.",
      duration: "2 Hours",
      price: "$120",
      img: "https://i.pinimg.com/736x/47/86/50/478650ae5108e8d65217afdfdf3ef64e.jpg"
    },
    {
      id: 2,
      name: "Private City Tour",
      desc: "Discover iconic landmarks and hidden gems with a personal guide in premium comfort.",
      duration: "4 Hours",
      price: "$80",
      img: "https://i.pinimg.com/736x/89/33/d1/8933d10fa1b712477fc7a5493c0c017e.jpg"
    },
    {
      id: 3,
      name: "Beach Horse Riding",
      desc: "Ride along the shoreline with breathtaking ocean views and a refreshing coastal breeze.",
      duration: "1.5 Hours",
      price: "$65",
      img: "https://i.pinimg.com/736x/b2/3d/81/b23d81d13cb553d6e6a9394ed79f33ec.jpg"
    },
    {
      id: 4,
      name: "Jet Ski Adventure",
      desc: "Feel the adrenaline as you speed across crystal waters in a thrilling ride.",
      duration: "45 Minutes",
      price: "$90",
      img: "https://i.pinimg.com/1200x/b2/87/3c/b2873ce210cdfe86ceb8d1e163bcee9b.jpg"
    },
    {
      id: 5,
      name: "Cultural Village Tour",
      desc: "Experience authentic traditions, local crafts, and rich cultural heritage.",
      duration: "3 Hours",
      price: "$50",
      img: "https://i.pinimg.com/736x/09/9d/61/099d61650c3e5e32fb23c22e90ad5c2a.jpg"
    },
    {
      id: 6,
      name: "Rooftop Dinner Experience",
      desc: "Enjoy a luxury dining experience under the stars with stunning skyline views.",
      duration: "2 Hours",
      price: "$110",
      img: "https://i.pinimg.com/736x/17/5c/19/175c19f891f4d76b61f5a7dac83ff804.jpg"
    },
    {
      id: 7,
      name: "Hiking & Nature Walk",
      desc: "Reconnect with nature through scenic trails and peaceful surroundings.",
      duration: "3 Hours",
      price: "$40",
      img: "https://i.pinimg.com/1200x/b2/97/5c/b2975cc7e8cf85cc0e0a19e7ebe0fdab.jpg"
    },
    {
      id: 8,
      name: "Private Chef Experience",
      desc: "Enjoy a personalized fine dining experience prepared by a professional chef.",
      duration: "2 Hours",
      price: "$150",
      img: "https://i.pinimg.com/736x/fe/6c/ad/fe6cadbb9c249e60d41c8821ec772bd5.jpg"
    },
    {
      id: 9,
      name: "Nightlife Party Tour",
      desc: "Experience the city’s vibrant nightlife with exclusive access to top spots.",
      duration: "5 Hours",
      price: "$95",
      img: "https://i.pinimg.com/736x/ed/7f/d6/ed7fd606be05922beb53b7407dbc826e.jpg"
    }
  ]

  return (
    <section className="activity-section">
      <h2 className="activity-title">Experiences</h2>

      <div className="activity-grid">
        {activities.map(item => (
          <div className="activity-card" key={item.id}>

            <div className="activity-img">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="activity-content">
              <p className="activity-desc">{item.desc}</p>

              <span className="activity-duration">{item.duration}</span>

              <div className="activity-bottom">
                <span className="price">{item.price}</span>
                <span className="activity-name">{item.name}</span>
                <button>BOOK NOW →</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Activities
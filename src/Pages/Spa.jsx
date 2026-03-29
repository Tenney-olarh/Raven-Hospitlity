import "./Spa.css"

function Spa() {
  const spaServices = [
    {
      id: 1,
      name:"Full Body Massage",
      desc: "A deeply relaxing full-body massage designed to ease tension, improve circulation, and restore total body balance.",
      price: "$60",
      img: "https://i.pinimg.com/1200x/36/51/f2/3651f21437287ecabcda12527717fe96.jpg"
    },
    {
      id: 2,
      name:"Facial Therapy",
      desc: "A rejuvenating facial treatment that cleanses, hydrates, and revitalizes your skin for a radiant glow.",
      price: "$45",
      img: "https://i.pinimg.com/736x/31/95/c9/3195c989114a244bd53141a8c7f54ac8.jpg"
    },
    {
      id: 3,
      name:"Aromatherapy",
      desc: "A calming aromatherapy session infused with essential oils to relax the mind and uplift your mood.",
      price: "$50",
      img: "https://i.pinimg.com/1200x/1d/48/40/1d484036f2ebd7565b013b82ef097e2e.jpg"
    },
    {
      id: 4,
      name:"Body Scrub",
      desc: "A detoxifying body scrub that exfoliates and nourishes the skin, leaving it smooth and refreshed.",
      price: "$40",
      img: "https://i.pinimg.com/1200x/f6/69/56/f669567b863c6f2ee436176bf138981a.jpg"
    },
    {
      id: 5,
      name:"Hot Stone Therapy",
      desc: "A luxurious hot stone therapy that melts away muscle tension using warm volcanic stones.",
      price: "$70",
      img: "https://i.pinimg.com/1200x/88/e0/62/88e0622e26a6201b58a3601762e0310d.jpg"
    },
    {
      id: 6,
      name:"Foot Therapy",
      desc: "A soothing foot therapy designed to relieve stress, improve circulation, and promote overall relaxation.",
      price: "$30",
      img: "https://i.pinimg.com/1200x/1b/25/e0/1b25e05013766e1c70a5d197113708b6.jpg"
    },
    {
  id: 7,
  name: "Deep Tissue Massage",
  desc: "An intensive massage technique targeting deeper muscle layers to relieve chronic tension and restore mobility.",
  price: "$75",
  img: "https://i.pinimg.com/736x/7c/a8/d5/7ca8d5c29c09e452913fa97bc6d7f690.jpg"
},
{
  id: 8,
  name: "Hydrotherapy Bath",
  desc: "A soothing water-based therapy designed to relax muscles, improve circulation, and provide a calming wellness experience.",
  price: "$55",
  img: "https://images.unsplash.com/photo-1583416750470-965b2707b355"
},
{
  id: 9,
  name: "Couples Retreat",
  desc: "A luxurious shared spa experience for two, combining relaxation therapies in a serene and intimate setting.",
  price: "$120",
  img: "https://i.pinimg.com/736x/be/aa/05/beaa0551dd09970b886c00397958eb6f.jpg"
}
  ]

  return (
    <section className="spa-section">
      <h2 className="spa-title">Spa & Wellness</h2>

      <div className="spa-grid">
        {spaServices.map(item => (
          <div className="spa-card" key={item.id}>

            <div className="spa-img">
              <img src={item.img} alt="spa service" />
            </div>

            <div className="spa-content">
              <p className="spa-desc">{item.desc}</p>

              <div className="spa-bottom">
                <span className="price">{item.price}</span>
                <span className="spa-name">{item.name}</span>
                <button>BOOK NOW →</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Spa
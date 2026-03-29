import "./Drink.css"

function Drink() {
  const drinkItems = [
    {
      id: 1,
      name:"Red Wine",
      desc: "Rich, full-bodied wine with deep fruit notes and a smooth, lingering finish.",
      price: "$12",
      img: "https://i.pinimg.com/736x/fc/0f/9b/fc0f9b6ede52346257951afbe88157ae.jpg"
    },
    {
      id: 2,
      name:"Mojito",
      desc: "A refreshing blend of mint, lime, and rum with a crisp, cooling finish.",
      price: "$18",
      img: "https://i.pinimg.com/736x/a4/b0/80/a4b080515f0499de3d697fa13a2d3e1c.jpg"
    },
    {
      id: 3,
      name:"Zobo",
      desc: "A bold hibiscus infusion with a tangy-sweet profile, lightly spiced for a refreshing traditional taste.",
      price: "$15",
      img: "https://i.pinimg.com/736x/32/55/91/325591cf9228eb1e832c9a105b7f6b86.jpg"
    },
    {
      id: 4,
      name:"Rosé Wine",
      desc: "Delicately balanced with subtle berry notes and a refreshing, light-bodied character.",
      price: "$10",
      img: "https://i.pinimg.com/736x/a9/db/c1/a9dbc13d78970efd9b089899e007bb3a.jpg"
    },
    {
      id: 5,
      name:"Old Fashioned",
      desc: "A timeless cocktail combining whiskey, bitters, and a touch of sweetness for a bold, refined taste.",
      price: "$25",
      img: "https://i.pinimg.com/736x/c1/69/7e/c1697e696f805847ac9bc5a29cc4f1c5.jpg"
    },
    {
      id: 6,
      name:"Creamy Blend",
      desc: "A creamy blend of fresh fruits and yogurt, offering a rich and nourishing taste.",
      price: "$22",
      img: "https://i.pinimg.com/1200x/61/f3/5e/61f35ec55afafaa61f4eb1adeb6b0f89.jpg"
    },
    {
      id: 7,
      name:"Ginger Drink",
      desc: "A zesty and invigorating beverage with a spicy kick and natural sweetness.",
      price: "$22",
      img: "https://i.pinimg.com/1200x/18/5a/eb/185aebdc17ecc116112df7a352027579.jpg"
    },
      {
      id: 8,
      name:"Africa Kunu",
      desc: "A traditional millet-based drink with a smooth, creamy texture and naturally sweet, nutty flavor, lightly spiced for a refreshing finish.",
      price: "$22",
      img: "https://i.pinimg.com/736x/ac/0d/fe/ac0dfe514bac1c3cc71c878c9e08a4c1.jpg"
    },
      {
      id: 9,
      name:"Pineapple Refresher",
      desc: "A vibrant fusion of fresh pineapple and zesty ginger, delivering a refreshing balance of natural sweetness with a subtle spicy kick.",
      price: "$22",
      img: "https://i.pinimg.com/736x/08/d6/d9/08d6d9b9062272481e61e4a983772ce9.jpg"
    },
  ]

  return (
    <section className="drink-section">
      <h2 className="drink-title">Liquid Lounge</h2>

      <div className="drink-grid-curated">
        {drinkItems.map(item => (
          <div className="drink-card-curated" key={item.id}>

            <div className="drink-img">
              <img src={item.img} alt="drink item" />
            </div>

            <div className="drink-content">
              {/* <h3>{item.name}</h3> */}
              <p className="drink-desc">{item.desc}</p>

              <div className="drink-bottom">
                <span className="price">{item.price}</span>
                <span className="drink-name">{item.name}</span>
                <button>ORDER NOW →</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Drink
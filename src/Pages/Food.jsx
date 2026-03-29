import "./Food.css"

function Food() {
  const foodItems = [
    {
      id: 1,
      name:" Burger",
      desc: "Juicy grilled beef burger with fresh veggies and signature sauce.",
      price: "$12",
      img: "https://i.pinimg.com/1200x/05/1a/52/051a5239f2498f78759986c9cc50a336.jpg"
    },
    {
      id: 2,
      name:" Pizza",
      desc: "Cheesy handcrafted pizza baked to perfection with rich toppings.",
      price: "$18",
      img: "https://i.pinimg.com/1200x/69/68/24/696824fabe9ffdd9e3207510083b2055.jpg"
    },
    {
      id: 3,
      name:" Pasta",
      desc: "Creamy pasta tossed with herbs and premium Italian ingredients.",
      price: "$15",
      img: "https://i.pinimg.com/1200x/61/f7/eb/61f7ebfb8ef80e65e173ca3df4c1cccd.jpg"
    },
    {
      id: 4,
      name:" Salad",
      desc: "Fresh garden salad packed with nutrients and light dressing.",
      price: "$10",
      img: "https://i.pinimg.com/736x/08/c7/0d/08c70d473888e35bd1c4cd9d1d2983d7.jpg"
    },
    {
      id: 5,
      name:"Steak",
      desc: "Grilled steak served with herbs,spices and a rich smoky flavor.",
      price: "$25",
      img: "https://i.pinimg.com/1200x/37/bc/5b/37bc5b815ac27d769c6d387a4f6df43c.jpg"
    },
    {
      id: 6,
      name:" Sushi",
      desc: "Fresh sushi rolls prepared with premium seafood and rice.",
      price: "$22",
      img: "https://i.pinimg.com/736x/52/eb/0d/52eb0d5cc13cae10554084d816a65d94.jpg"
    },
    {
      id: 7,
      name:" Seafood",
      desc: "Freshly sourced seafood delicately prepared with a blend of herbs, butter, and subtle spices, delivering a refined ocean-inspired flavor with a light, elegant finish.",
      price: "$22",
      img: "https://i.pinimg.com/1200x/f1/0c/c3/f10cc333c77a8ca8c43457ae550395a9.jpg"
    },
      {
      id: 8,
      name:"Africa deluxe",
      desc: "Smooth, velvety pounded yam served with a hearty melon seed soup enriched with leafy greens, assorted meats, and deep traditional flavors.",
      price: "$22",
      img: "https://i.pinimg.com/736x/71/a5/cf/71a5cfebe17e280415a68adf07f4daff.jpg"
    },
      {
      id: 9,
      name:"Chicken",
      desc: "Succulent chicken marinated in a blend of fresh herbs and spices, then expertly grilled to achieve a smoky aroma, crispy exterior, and tender, juicy interior with a rich, well-balanced flavor.",
      price: "$22",
      img: "https://i.pinimg.com/1200x/cc/71/ac/cc71ac6dd4d0c687e8a1340d84f9026f.jpg"
    },
  ]

  return (
    <section className="food-section">
      <h2 className="food-title">Food Menu</h2>

      <div className="food-grid-curated">
        {foodItems.map(item => (
          <div className="food-card-curated" key={item.id}>

            <div className="food-img">
              <img src={item.img} alt="food item" />
            </div>

            <div className="food-content">
              {/* <h3>{item.name}</h3> */}
              <p className="food-desc">{item.desc}</p>

              <div className="food-bottom">
                <span className="price">{item.price}</span>
                <span className="food-name">{item.name}</span>
                <button>ORDER NOW →</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Food
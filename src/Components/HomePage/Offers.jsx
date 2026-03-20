function Offer({ offers }) {
  return (
    <section className="offer">
      <div className="offer__heads">
        <h2>Curated For You</h2>
        <a href="#">
          <p>Explore All Experiences</p>
        </a>
      </div>

      <div className="offer__images">
        {offers.map((offer) => (
          <div key={offer.id} className="offer__details">
            <div className="offer__image-wrapper">
              <img src={offer.image} alt={offer.alt} className="offer__image" />
            </div>

            <h3 className="offer__title">{offer.title}</h3>
            <p className="offer__description">{offer.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offer;

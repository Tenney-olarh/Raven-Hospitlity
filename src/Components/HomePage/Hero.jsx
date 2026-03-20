function Hero({ userName, actions }) {
  return (
    <section className="hero">
      <div>
        <h1 className="hero__heading">Welcome back, {userName}</h1>
        <p className="hero__desc">
          Your sanctuary in the heart of London awaits your arrival.
        </p>
      </div>

      <div className="hero__buttons">
        {actions.map((action) => (
          <button key={action.id}>
            <img src={action.icon} alt={action.alt} />
            <p>
              {action.text}
              <span className="hero__arrow">{">"}</span>
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;

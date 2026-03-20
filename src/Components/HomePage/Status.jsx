function Status({
  userFullName,
  pointCount,
  remainingPoints,
  tier,
  nextTier,
  hotelName,
  roomType,
  confirmationID,
  userCheckinDate,
  userCheckoutDate,
}) {
  return (
    <section className="status">
      {/* left section */}
      <div className="status__upcoming-event">
        <h2 className="status__title">Upcoming Journey</h2>
        <div className="event">
          <div className="event__img">
            <img src="/room1.png" alt="Hotel Room" />
          </div>

          <div className="event__details">
            <div className="event__location">
              <img src="/location_icon.svg" alt="Location Icon" />{" "}
              <p>{hotelName}</p>
            </div>
            <div className="event__desc">
              <h3>{roomType}</h3>
              <p>Confirmation #{confirmationID}</p>
            </div>

            <div className="event__schedule">
              <div>
                <p>check-in</p>
                <h3>{userCheckinDate}</h3>
              </div>
              <div>
                <p>check-out</p>
                <h3>{userCheckoutDate}</h3>
              </div>
            </div>

            <button className="event__cta">manage my stay</button>
          </div>
        </div>
      </div>

      {/* right section - status real-time check*/}
      <div className="status__rewards">
        <h2>Status and Rewards</h2>
        <div className="reward">
          <h3 className="reward__title">{tier} Member</h3>
          <p className="reward__user-name">{userFullName}</p>
          <div className="reward__point">
            <p className="point__total">Total Points</p>
            <p className="point__count">{pointCount}</p>
            <div className="point__status-bar">
              <div className="point__progress" style={{ width: "70%" }}></div>
            </div>
            <p className="point__remainder">
              {remainingPoints} POINTS UNTIL {nextTier} STATUS
            </p>
          </div>
          <a href="#" className="point__benefit">
            View Member Benefits
          </a>
        </div>
      </div>
    </section>
  );
}

export default Status;

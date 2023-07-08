import "./Rating.css";

export function Rating({ ratings }) {
  return (
    <>
      <h1>Reviews</h1>
      {ratings.map((userRating) => {
        const { rating, comment, revName, pp } = userRating;
        return (
          <>
            <div className="reviews">
              <div className="profile">
                <div className="reviewer">
                  <img src={pp} alt={revName}/>
                  <h4>{revName}</h4>
                </div>
                <button className="rating-btn">
                    {rating}<i class="fa fa-star-o" aria-hidden="true"></i>
                </button>
              </div>
              <div>
                <p>{comment}</p>
              </div>
              <hr/>
            </div>
          </>
        );
      })}
    </>
  );
}

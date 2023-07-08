import "./Rating.css";
import { useState,useEffect } from "react";

export function Rating({ ratings }) {
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
      const storedReviewData = localStorage.getItem("reviewData");
      if (storedReviewData) {
        setReviewData(JSON.parse(storedReviewData));
      }
    }, []);
  
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
       {reviewData && (
        <div className="reviews">
          <div className="profile">
            <button className="rating-btn">
              {reviewData.rating}
              <i class="fa fa-star-o" aria-hidden="true"></i>
            </button>
          </div>
          <div>
            <p>{reviewData.comment}</p>
          </div>
          <hr />
        </div>
      )}
    </>
  );
}

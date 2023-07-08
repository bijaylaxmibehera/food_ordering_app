import "./RestaurantDetails.css";
import { useParams } from "react-router";
import { useContext } from "react";
import { DataContext } from "../../";
import { NavLink } from "react-router-dom";
import { Rating } from "../../component/Rating/Rating";

export function RestaurantDetails() {
  const { id } = useParams();
  const { restaurantDetails } = useContext(DataContext);

  const restaurantSelected = restaurantDetails.find(
    (restaurant) => restaurant.id === Number(id)
  );

  const { name, address, phone, menu, ratings, averageRating } =
    restaurantSelected;

  return (
    <>
      <div className="details-page">
        <div className="header">
          <NavLink to="/">
            <button className="back-btn">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
          </NavLink>
        </div>
        <div className="restaurant-info">
          <h1>{name}</h1>
          <ul className="info">
            {menu.map((menuItem) => (
              <li key={menuItem.name}>{menuItem.name},</li>
            ))}
          </ul>
          <p className="info">{address}</p>
          <p className="info average-rating">Average Rating: {averageRating}</p>
        </div>
        <div>
          <button className="btn danger add-rating-btn">Add rating</button>
        </div>
      </div>

      <div className="rating-container">
        <hr />
        <Rating ratings={ratings} />
      </div>
    </>
  );
}

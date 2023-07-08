import "./Home.css";
import { useContext, useState } from "react";
import { DataContext } from "../../";
import { MenuCard } from "../../component/MenuCard/MenuCard";
import { useNavigate } from "react-router-dom";

export function Home() {
  const { cuisine, restaurantDetails } = useContext(DataContext);
  //   console.log(restaurantDetails);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const navigate=useNavigate();

  const filterRestaurantMenu = (id) => {
    setSelectedCuisine(id);
  };

  const handleClick=(name,id)=>{
    const formattedName = name.split(" ").join("_");
    navigate(`/${formattedName}/${id}`);
  }

  return (
    <>
      <div className="home-page">
        <div className="app-heading-text">
          <h1>Food Ordering App</h1>
        </div>
        <div className="cuisine-type">
          <h2>Select Your Cuisine: </h2>
          {cuisine.map(({ id, name }) => (
            <button
              key={id}
              className="btn danger menu-btn"
              onClick={() => filterRestaurantMenu(id)}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="resturant-details">
          {restaurantDetails
            .filter((restaurant) =>
              selectedCuisine ? restaurant.cuisine_id === selectedCuisine : true
            )
            .map((restaurant) => {
              const { id, name, menu } = restaurant;
              return (
                <div key={id} className="restautant">
                  <h3 className="restaurant-name" onClick={()=>handleClick(name,id)}>Dishes by {name}</h3>
                  <div className="responsive-grid">
                    <MenuCard menu={menu} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

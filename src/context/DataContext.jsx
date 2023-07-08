import { createContext,  useState } from "react";
import { cuisineData, restaurantsData } from "../db/ResturantData";

export const DataContext = createContext();



export function DataProvider({ children }) {
  const [cuisine, setCuisine] = useState(cuisineData);
  const [restaurantDetails, setResturantDetails] = useState(restaurantsData);
  const [showModal,setShowModal]=useState(false);

  

  return (
    <DataContext.Provider
      value={{ cuisine, setCuisine, restaurantDetails, setResturantDetails,showModal,setShowModal}}
    >
      {children}
    </DataContext.Provider>
  );
}

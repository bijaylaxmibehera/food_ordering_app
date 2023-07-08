import {Routes,Route} from "react-router-dom";
import { Home } from "../page/Home/Home";
import { RestaurantDetails } from "../page/RestaurantDetails/RestaurantDetails";

export function RouteDetails(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:name/:id" element={<RestaurantDetails/>}/>
        </Routes>
        </>
    )
}
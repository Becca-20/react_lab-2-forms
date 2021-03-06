import CakeList from "../components/CakeList";
import NewCake from "../components/NewCake";
import Status from "../components/Status";
import { useState } from "react";

const CakeContainer = () => {

    const [cakes, setCakes] = useState([
        {
            cakeName: "Lemon Drizzle",
            ingredients: ["eggs, ", "butter, ", "lemon zest, ", "sugar, ", "self-raising flour"],
            rating: 5
        },
        {
            cakeName: "Tea Loaf",
            ingredients: ["eggs, ", "oil, ", "dried fruit, ", "sugar, ", "self-raising flour, ", "strong tea"],
            rating: 3
        },
        {
            cakeName: "Brownie",
            ingredients: ["chocolate, ", "eggs, ", "flour, ", "butter, ", "walnuts"],
            rating: 4
        },
        {
            cakeName: "Carrot Cake",
            ingredients: ["carrots, ", "walnuts, ", "oil, ", "cream cheese, ", "flour, ", "sugar"],
            rating: 5
        }
    ]);


    const [applicationsOpen, setApplicationsOpen] = useState(true);

    const addNewCake = (newCake) => {
        setCakes([...cakes, newCake]);

        console.log("added new cake!");
    };

    const updateApplicationStatus = () => {
        console.log("updating status")
        setApplicationsOpen(!applicationsOpen);
    };

    return (
        <>
            <NewCake addNewCake={addNewCake} />
            <CakeList listOfCakes={cakes} />
            <Status
                applicationsOpen={applicationsOpen}
                handleButtonClick={updateApplicationStatus}
            />
        </>
    );

}

export default CakeContainer;
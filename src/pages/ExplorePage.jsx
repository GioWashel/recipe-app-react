import React from "react";
import { RecipeCard } from "../components/RecipeCard";
import "./ExplorePage.css"


//im thinking for the explore page we can display a bunch of cards, and when the user clicks on that card it will direct them to the
//detail page for that card -gio 

//a card only holds the name and image
const recipeCard = {
    name: `Spaghetti Carbonara`,
    imageURL: `https://th.bing.com/th/id/R.a0246b9032f0cd5338d8391642d8bcf1?rik=B8NK%2biKQg0zVmg&riu=http%3a%2f%2fwww.casaacorte.com%2fwp-content%2fuploads%2f2014%2f01%2fCarbonara-pepper-web.jpg&ehk=cJqi017Y10hmUui9pXcu3tNrn%2blKjkDpSwktNMz0cx4%3d&risl=&pid=ImgRaw&r=0`,
};
export const ExplorePage = () => {

    return(
        <div className="recipe-list-container">
            <RecipeCard recipe={recipeCard}/>
        </div>
    );
};
import React from "react";
import Recipe from "../Recipe/recipe.component";
import './recipelist.style.css';
function RecipeList(props){
return(
    <div className="recipelist">
         {props.recipes.map(recipe =>
        <Recipe recipe={recipe} />
    )}
    </div>
   

)

}

export default RecipeList;
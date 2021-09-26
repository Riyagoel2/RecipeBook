import React from 'react';
import { Link } from 'react-router-dom';
import './recipe.style.css';
 
function Recipe(props){
return (  
    <Link className="recipe-div" to={`/recipe/${props.recipe.nameLink}`}>
    <div >
    <img src= {props.recipe.img} alt=''/>
    <div>{props.recipe.name}</div>
    </div>
    </Link>
    
)}

export default Recipe;
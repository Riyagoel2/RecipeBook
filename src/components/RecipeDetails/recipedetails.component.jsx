import React from "react";
import './recipedetails.style.css';
import { Link , Redirect } from "react-router-dom";
class RecipeDetails extends React.Component{ 
    constructor(props)
    {
       super(props);
    }
    
      
    render(){

      
        let nameLink = this.props;
        console.log(nameLink);
        let myarray = this.props.recipelist.filter(recipe =>{
            if(recipe.nameLink === 'RaspberryChocolateTart')
            {
                return true;
            }
            return false;
        });
        let recp ;
        if(myarray)
        {recp = myarray[0];
         console.log("--"+recp);
        }
        const onDelete = (evt)=>{
            evt.preventDefault();
            this.props.deleteRecipe(myarray[0]);
            return  <Redirect  to="/" />
           }
    
        return(
        
        
           // if (myarray )  {
        <div className="container">
        <div className="img-container">
        <img className="img" src={myarray[0].img}/>
        </div>
        <div className="details-container">
         <h2 className="heading">{myarray[0].name}</h2>  
         <Link to="https://www.bakerita.com/no-bake-raspberry-chocolate-tart-paleo-vegan-gf/">
         <button  className="btn">Source</button>
              </Link>
         
         <button className="btn">Edit</button>
         <button onClick ={onDelete}className="btn">Delete</button>
         <div className="ingred">
            <h3>Ingredients</h3>
         <ul>
            {myarray[0].ingredients.map(i => {
              return <li>{i}</li>
            })
        }
         </ul>    
         </div>
        </div>

        </div> 
       
        
    




        );
    
}
}

export default RecipeDetails;
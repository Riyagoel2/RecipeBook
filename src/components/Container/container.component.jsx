import React from "react";
import RecipeList from "../RecipeList/recipelist.component";


class Container extends React.Component{ 

    constructor(props)
    {
       super(props);
       }
      
        

    render(){
        return(
        <div>
        <RecipeList recipes = {this.props.recipelist}/>
        </div>
        );
    
}
}

export default Container;
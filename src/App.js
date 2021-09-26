import React from 'react';
import './App.css';
import Header from './components/Header/header.component';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import Container from './components/Container/container.component';
import RecipeDetails from './components/RecipeDetails/recipedetails.component';
class App extends React.Component{ 

  constructor(props)
  {
     super(props);
     this.state = {
      recipelist : [
          {
               name: 'Loaded Guacamole Tacos',
               nameLink: 'LoadedGuacamoleTacos',
               img: 'http://images.soupaddict.com/loaded-guacamole-vegetarian-tacos-3-062214.jpg',
               ingredients: [
                 'fresh avocados',
                 'black beans',
                 'jalapenos',
                 'tomatoes or tomatillos',
                 'corn or small flour tortillas',
                 'corn',
                 'lime',
                 'cilantro'
               ],
               source: 'http://soupaddict.com/2014/06/loaded-guacamole-vegetarian-tacos/'
             },
       {
               name: 'Green Curry',
               nameLink: 'GreenCurry',
               ingredients: [
                 'coconut milk',
                 'carrots',
                 'onions',
                 'garlic',
                 'green curry paste',
                 'asparagus',
                 'cilantro'
               ],
               img: 'http://cookieandkate.com/images/2015/03/thai-green-curry-recipe-0.jpg',
               source: 'http://cookieandkate.com/2015/thai-green-curry-with-spring-vegetables/'
             },
       {
               name: 'Raspberry Chocolate Tart',
               nameLink: 'RaspberryChocolateTart',
               ingredients: [
                 'raspberry preserves',
                 'cocoa powder',
                 'fresh raspberries',
                 'coconut milk',
                 'almond flour'
               ],
               img: 'https://i.pinimg.com/originals/3b/0c/f1/3b0cf11f22b55e0269bc0383badc4b6b.jpg',
               source: 'http://www.bakerita.com/no-bake-raspberry-chocolate-tart-paleo-vegan-gf/'
             }
    
]};
     }


    
      

  render(){

    const deleteRecipe = (obj)=>{
    this.state.recipelist.map(r =>{
    if(r.name === obj.name)
    {
      this.state.recipelist.pop(obj);
      let newstate = [... this.state.recipelist];
      this.setState({
        recipelist : newstate
      }
      );
    }
    })
   
  }

  return (
    <BrowserRouter>
    <div className="App">
    <Header/> 
    <Switch>
    <Route exact path="/" >
    <Container recipelist = {this.state.recipelist} />
    </Route>
    <Route path="/recipe/:nameLink">
    <RecipeDetails deleteRecipe= {deleteRecipe} recipelist = {this.state.recipelist} />
    </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;

import React, { Component } from 'react';

//Components
import SetGoal from './components/SetGoal.js';
import MenuContainer from './containers/MenuContainer.js';
// import BreakfastContainer from './containers/Breakfast.js';
// import LunchContainer from './containers/Lunch.js';
// import DinnerContainer from './containers/Dinner.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      calorieGoal:'',
      itemCalories:'',
      brandName:'',
      itemName:'',
      itemCalories1:'',
      brandName1:'',
      itemName1:'',
      itemCalories2:'',
      brandName2:'',
      itemName2:''
    }
  };

    handleChange = (event) => {

      // var calculatedCalorie = event.target.value
      this.setState({calorieGoal: event.target.value});
      console.log(this.state.calorieGoal);
    }

    handleSubmit = (event) => {
      if(this.state.calorieGoal < 1200){
        alert(`Warning: A calorie goal of ${this.state.calorieGoal} is less than the lowest recommended daily calorie intake of 1200. Please put in a minimum goal of 1200 calories.`)
      } else {
        fetch(`http://localhost:3001/menu/${this.state.calorieGoal}`, {
          method: 'GET',
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then(results => {
          console.log(results);
          return results.json();
        })
        .then(data => {

          this.setState({
            itemCalories:data.hits[0].fields.nf_calories,
            brandName:data.hits[0].fields.brand_name,
            itemName:data.hits[0].fields.item_name,
            itemCalories1:data.hits[1].fields.nf_calories,
            brandName1:data.hits[1].fields.brand_name,
            itemName1:data.hits[1].fields.item_name,
            itemCalories2:data.hits[2].fields.nf_calories,
            brandName2:data.hits[2].fields.brand_name,
            itemName2:data.hits[2].fields.item_name
            });
        })

        event.preventDefault()
      }
    }

  render() {
    return (
      <div>
        <SetGoal onNewUpdate={this.handleChange} onNewSubmit={this.handleSubmit}/>
        <MenuContainer menuItems={this.state}/>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

//Components
import SetGoal from './components/SetGoal.js';
import MenuContainer from './containers/MenuContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      calorieGoal:'',
      breakfast:'',
      lunch:'',
      dinner:''}
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
        fetch(`http://localhost:3001/breakfast/${this.state.calorieGoal}`, {
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

          this.setState({breakfast: data.hits});

        })
        .then(fetch(`http://localhost:3001/lunch/${this.state.calorieGoal}`, {
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

          this.setState({lunch: data.hits});

        }))
        .then(fetch(`http://localhost:3001/dinner/${this.state.calorieGoal}`, {
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

          this.setState({dinner: data.hits});

        }))

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

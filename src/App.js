import React, { Component } from 'react';

//Components
import SetGoal from './components/SetGoal.js';
import MenuContainer from './containers/MenuContainer.js';

const category = ['breakfast', 'lunch', 'dinner'];
class App extends Component {
  constructor() {
    super();
    this.state = {
      calorieGoal:'',
      dinner:'',
      lunch:'',
      breakfast:''}
  };

    handleChange = (event) => {

      // var calculatedCalorie = event.target.value
      this.setState({calorieGoal: event.target.value});
      console.log(this.state.calorieGoal);
    }

    handleSubmit = (event) => {
      console.log('handleSubmit');
      if(this.state.calorieGoal < 1200){
        alert(`Warning: A calorie goal of ${this.state.calorieGoal} is less than the lowest recommended daily calorie intake of 1200. Please put in a minimum goal of 1200 calories.`)
      } else {

        for (var i = 0; i < category.length; i++) {
          fetch(`http://localhost:3001/${this.state.calorieGoal}/${category[i]}`, {
            method: 'GET',
            headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          })
          .then(results => {
            console.log(results);
            console.log('category is', category[i])
            return results.json();

          })
          .then(data => {
            console.log('data ', data);
            var day = category[--i];
            this.setState({
              [day]: data.hits
            });
          })
        }
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

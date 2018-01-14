import React, { Component } from 'react';

//Components
import SetGoal from './components/SetGoal.js';
import MenuContainer from './containers/MenuContainer.js';
import Header from './components/Header.js';
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
      for (var i = 0; i < category.length; i++) {
        this.updateTheState(i);
      }
      event.preventDefault()
    }

    updateTheState = (i) => {
      fetch(`http://localhost:3001/${this.state.calorieGoal}/${category[i]}`, {
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
        console.log('data ', data);
        var day = category[i];
        this.setState({
          [day]: data.hits
        });
      })
    }

  render() {
    return (
      <div>
        <Header/>
        <SetGoal onNewUpdate={this.handleChange} onNewSubmit={this.handleSubmit}/>
        <MenuContainer menuItems={this.state}/>
      </div>
    );
  }
}

export default App;

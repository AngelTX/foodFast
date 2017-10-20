import React, { Component } from 'react';


class SetGoal extends Component {
  constructor(){
    super();
    this.state = {calorieGoal: ''}
    console.log(this.state)
  }

  handleChange = (event) => {
    this.setState({calorieGoal: event.target.value});
    console.log(this.state.calorieGoal);
  }

  handleSubmit = (event) => {
    if(this.state.calorieGoal < 1200){
      alert(`Warning: A calorie goal of ${this.state.calorieGoal} is less than the lowest recommended daily calorie intake of 1200. Please put in a minimum goal of 1200 calories.`)
    }
    else {
      alert(`Calorie Goal: ${this.state.calorieGoal}`)
      event.preventDefault()
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Set Goal</h1>
          <input type="text" name="calorieGoal" value={this.state.calorieGoal} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default SetGoal;

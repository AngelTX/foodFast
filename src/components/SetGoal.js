import React, { Component } from 'react';


class SetGoal extends Component {
  constructor(){
    super();
    this.state = {calorieGoal: ''}
    console.log(this.state)
  }

  handleChange = (event) => {

    // var calculatedCalorie = event.target.value
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
      <header>

        <div className="flexbox-container">

            <form className="form-group row" onSubmit={this.handleSubmit}>

              <label className="col-sm-5 col-form-label">Set Calorie Goal</label>
              <div className="col-3">
                <input type="text" className="form-control form-control-md" name="calorieGoal" value={this.state.calorieGoal} onChange={this.handleChange}/>
              </div>
              <button type="submit" className="btn btn-primary btn-md">submit</button>

            </form>

        </div>

      </header>
    )
  }
}

export default SetGoal;

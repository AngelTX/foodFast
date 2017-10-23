import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';


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

        <Col xs={6} xsOffset={2}>

            <form onSubmit={this.handleSubmit}>

              {/* <label id="text">Set Calorie Goal</label> */}
              <div>
                <input
                  id="input"
                  type="text"
                  name="calorieGoal"
                  placeholder="Set Calorie Goal!"
                  value={this.state.calorieGoal}
                  onChange={this.handleChange}/>

              </div>


              <Button bsStyle="info" type="submit" id="button">Submit</Button>

            </form>

          </Col>
      </header>
    )
  }
}

export default SetGoal;

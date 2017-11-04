import React, { Component } from 'react';
import { Col, Button } from 'react-bootstrap';


class SetGoal extends Component {

  render(){
    return(
      <header>

        <Col xs={6} xsOffset={2}>

            <form onSubmit={this.props.onNewSubmit}>

              {/* <label id="text">Set Calorie Goal</label> */}
              <div>
                <input
                  id="input"
                  type="text"
                  name="calorieGoal"
                  placeholder="Set Calorie Goal!"
                  onChange={this.props.onNewUpdate}/>
              </div>


              <Button bsStyle="info" type="submit" id="button">Submit</Button>

            </form>

          </Col>
      </header>
    )
  }
}

export default SetGoal;

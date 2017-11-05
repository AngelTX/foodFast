import React, { Component } from 'react';
import { Col, Button, Row, Image } from 'react-bootstrap';
import logo from './logo.png';

class SetGoal extends Component {



  render(){
    return(
      <header>
        <Row className="setGoal">
          <div className="nav-logo">
          <Col xs={2} >
            <img src={logo} height="100" width="150" />
          </Col>
        </div>

          <Col xs={4}>
              <form onSubmit={this.props.onNewSubmit}>
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
        </Row>
      </header>
    )
  }
}

export default SetGoal;

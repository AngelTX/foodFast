import React, { Component } from 'react';
import { Col, Button, Row, } from 'react-bootstrap';
import logo from './logo.png';

import CheckboxExampleSimple from '../components/Checkbox.js';

class SetGoal extends Component {

  render(){
    return(
      <header>
        <div className="nav-logo">
          <Row>
            <Col xs={12} xsOffset={5}>
              <img
                src={logo}
                alt='logo'
                height="100"
                width="150"
              />
            </Col>
          </Row>
        </div>
        <div className="setGoal">
          <Row>
            <Col xs={12} xsOffset={4}>
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

                <CheckboxExampleSimple />

              </form>
            </Col>
          </Row>
        </div>
      </header>
    )
  }
}

export default SetGoal;

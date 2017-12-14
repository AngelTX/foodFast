import React, { Component } from 'react';
import { Col, Button, Row, } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import logo from './logo.png';

import CheckboxExampleSimple from '../components/Checkbox.js';

const Input = () => (
  <div>
    <TextField
      hintText="ie: 1600"
      floatingLabelText="Set Calorie Goal"
    />
  </div>
);

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
                  <Input
                    id="input"
                    type="text"
                    name="calorieGoal"
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

import React from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import logo from './logo.png';

import Checkboxs from '../components/Checkbox.js';

const Search = () => (
  <div>
    <TextField
      hintText="ie: 1600"
      floatingLabelText="Set Calorie Goal"
    />
  </div>
);

const SetGoal = (handleSubmit, handleChange) => {

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
            <form onSubmit={handleSubmit}>
              <div>
                <Search
                  id="input"
                  type="text"
                  name="calorieGoal"
                  onChange={handleChange}/>
              </div>
              <Button bsStyle="info" type="submit" id="button">Submit</Button>
              <Checkboxs />
            </form>
          </Col>
        </Row>
      </div>
    </header>
  )
}

export default SetGoal;

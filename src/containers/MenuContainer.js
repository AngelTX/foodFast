import React from 'react';
import { Col, Row } from 'react-bootstrap';

import BreakfastContainer from './Breakfast.js';
import LunchContainer from './Lunch.js';
import DinnerContainer from './Dinner.js';
const MenuContainer = (props) =>{

    return(
      <div><div>
        <Row className="menu">
          <Col xs={4}>
            <Col xs={12}>
              <div>
                <BreakfastContainer menuItems={props.state}/>
              </div>
            </Col><br/>
          </Col>
          <Col xs={4}>
            <Col xs={12}>
              <div>
                <DinnerContainer menuItems={props.state}/>
              </div>
            </Col><br/>
          </Col>
          <Col xs={4}>
            <Col xs={12}>
              <div>
                <LunchContainer menuItems={props.state}/>
              </div>
            </Col><br/>
          </Col>
        </Row>
      </div>



      </div>
    )
}

export default MenuContainer;

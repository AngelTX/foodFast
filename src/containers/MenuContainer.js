import React from 'react';
import { Col, Row } from 'react-bootstrap';

import MealCategory from './MealCategory.js';
const MenuContainer = (props) =>{

    return(
      <div>
        <div>
          <Row className="menu">
            <Col xs={4}>
              <Col xs={12}>
                <div>
                  <MealCategory items={props.menuItems} category={"Breakfast"}/>
                </div>
              </Col><br/>
            </Col>
            <Col xs={4}>
              <Col xs={12}>
                <div>
                  <MealCategory items={props.menuItems} category={"Lunch"}/>
                </div>
              </Col><br/>
            </Col>
            <Col xs={4}>
              <Col xs={12}>
                <div>
                  <MealCategory items={props.menuItems} category={"Dinner"}/>
                </div>
              </Col><br/>
            </Col>
          </Row>
        </div>
      </div>
    )
}

export default MenuContainer;

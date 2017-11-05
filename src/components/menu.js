import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Menu = (props) =>{

    return(
      <div>
        <Row className="menu">
          <Col xs={4}>
            <div>
              <h1>{props.menuItems.brandName}</h1>
              <h2>{props.menuItems.itemName}</h2>
              <h3>{props.menuItems.itemCalories}</h3>
            </div>
          </Col>
          <Col xs={4}>
            <div>
              <h1>{props.menuItems.brandName1}</h1>
              <h2>{props.menuItems.itemName1}</h2>
              <h3>{props.menuItems.itemCalories1}</h3>
            </div>
          </Col>
          <Col xs={4}>
            <div>
              <h1>{props.menuItems.brandName2}</h1>
              <h2>{props.menuItems.itemName2}</h2>
              <h3>{props.menuItems.itemCalories2}</h3>
            </div>
          </Col>
        </Row>
      </div>
    )
}

export default Menu;

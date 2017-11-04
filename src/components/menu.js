import React from 'react';
import { Col } from 'react-bootstrap';

const Menu = (props) =>{

    return(
      <div>
        <Col xs={12}>
          <div>
            <h1>{props.menuItems.brandName}</h1>
            <h1>{props.menuItems.itemName}</h1>
            <h1>{props.menuItems.itemCalories}</h1>
          </div>

          <div>
            <h1>{props.menuItems.brandName1}</h1>
            <h1>{props.menuItems.itemName1}</h1>
            <h1>{props.menuItems.itemCalories1}</h1>
          </div>

          <div>
            <h1>{props.menuItems.brandName2}</h1>
            <h1>{props.menuItems.itemName2}</h1>
            <h1>{props.menuItems.itemCalories2}</h1>
          </div>
        </Col>
      </div>
    )
}

export default Menu;

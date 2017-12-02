import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DinnerContainer = (props) =>{

    return(
      <div>
        <Row className="menu">
          <Col xs={4}>
            <Col xs={12} xsOffset={12}>
              <div>
                <h1>{props.menuItems.brandName}</h1>
                <h2>{props.menuItems.itemName}</h2>
                <h3>{props.menuItems.itemCalories}</h3>
              </div>
            </Col><br/>
            <Col xs={12} xsOffset={12}>
              <div>
                <h1>{props.menuItems.brandName1}</h1>
                <h2>{props.menuItems.itemName1}</h2>
                <h3>{props.menuItems.itemCalories1}</h3>
              </div>
            </Col><br/>
            <Col xs={12} xsOffset={12}>
              <div>
                <h1>{props.menuItems.brandName2}</h1>
                <h2>{props.menuItems.itemName2}</h2>
                <h3>{props.menuItems.itemCalories2}</h3>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    )
}

export default DinnerContainer;

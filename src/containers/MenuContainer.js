import React from 'react';
import { Col, Row } from 'react-bootstrap';


import MenuItem from '../components/MenuItem.js';

const MenuContainer = (props) =>{
    return(
      <div>
        <div>
          <Row className="menu">
            <Col xs={4}>
              <Col xs={12}>
                <div>
                  <MenuItem title={"breakfast"} items={props.menuItems.breakfast}/>
                </div>
              </Col><br/>
            </Col>
            <Col xs={4}>
              <Col xs={12}>
                <div>
                  <MenuItem title={"lunch"} items={props.menuItems.lunch}/>
                </div>
              </Col><br/>
            </Col>
            <Col xs={4}>
              <Col xs={12}>
                <div>
                  <MenuItem title={"dinner"} items={props.menuItems.dinner}/>
                </div>
              </Col><br/>
            </Col>
          </Row>
        </div>
      </div>
    )
}

export default MenuContainer;

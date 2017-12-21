import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';


import MenuItem from '../components/MenuItem.js';

class MenuContainer extends Component {

  createBreakfastMenu = (props) => {

    let menu = []
    for (var i = 0; i < this.props.menuItems.breakfast.length; i++){
      menu.push(<MenuItem items={this.props.menuItems.breakfast} index={i}/>)
    }
    return menu;
  };

  createLunchMenu = (props) => {

    let menu = []
    for (var i = 0; i < this.props.menuItems.breakfast.length; i++){
      menu.push(<MenuItem items={this.props.menuItems.lunch} index={i}/>)
    }
    return menu;
  };

  createDinnerMenu = (props) => {

    let menu = []
    for (var i = 0; i < this.props.menuItems.breakfast.length; i++){
      menu.push(<MenuItem items={this.props.menuItems.dinner} index={i}/>)
    }
    return menu;
  };

  render(){
    return(
      <div>
        <div>
          <Row className="menu">
            <Col xs={4}>
              <Col xs={12}>
                <div>
                <h1>Breakfast</h1>
                {this.props.menuItems.breakfast ?
                  this.createBreakfastMenu()
                  : <h1>null</h1>
                }
                </div>
              </Col><br/>
            </Col>

            <Col xs={4}>
              <Col xs={12}>
                <div>
                <h1>Lunch</h1>
                {this.props.menuItems.breakfast ?
                  this.createLunchMenu()
                  : <h1>null</h1>
                }
                </div>
              </Col><br/>
            </Col>

            <Col xs={4}>
              <Col xs={12}>
                <div>
                <h1>Dinner</h1>
                {this.props.menuItems.breakfast ?
                  this.createDinnerMenu()
                  : <h1>null</h1>
                }
                </div>
              </Col><br/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default MenuContainer;

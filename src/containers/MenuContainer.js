import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Paper from 'material-ui/Paper';

import menuContainerStyle from '../public/styles.js'



import MenuItem from '../components/MenuItem.js';


// const style = {
//     height: 30,
//     width: 200,
//     margin: 20,
//     textAlign: 'center',
//     display: 'inline-block',
//   };

class MenuContainer extends Component {

  createBreakfastMenu = () => {

    let menu = []
    for (var i = 0; i < this.props.menuItems.breakfast.length; i++){
      menu.push(<MenuItem items={this.props.menuItems.breakfast} index={i}/>)
    }
    return menu;
  };

  createLunchMenu = () => {

    let menu = []
    for (var i = 0; i < this.props.menuItems.breakfast.length; i++){
      menu.push(<MenuItem items={this.props.menuItems.lunch} index={i}/>)
    }
    return menu;
  };

  createDinnerMenu = () => {

    let menu = []
    for (var i = 0; i < this.props.menuItems.breakfast.length; i++){
      menu.push(<MenuItem items={this.props.menuItems.dinner} index={i}/>)
    }
    return menu;
  };

  render(){
    return(
      <div>

        <Paper style={menuContainerStyle} zDepth={1}>
          <div>
          <h1>Breakfast</h1>
          {this.props.menuItems.breakfast ?
            this.createBreakfastMenu()
            : null
          }
          </div>
        </Paper>

        <Paper style={menuContainerStyle} zDepth={1}>
          <div>
          <h1>Lunch</h1>
          {this.props.menuItems.lunch ?
            this.createLunchMenu()
            : null
          }
          </div>
        </Paper>

        <Paper style={menuContainerStyle} zDepth={1}>
          <div>
          <h1>Dinner</h1>
          {this.props.menuItems.dinner ?
            this.createDinnerMenu()
            : null
          }
          </div>
        </Paper>

      </div>
    )
  }
}
export default MenuContainer;

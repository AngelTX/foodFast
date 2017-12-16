import React, { Component } from 'react';
import { Col, Button, Row } from 'react-bootstrap';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  block: {
    display: 'flex',
    maxWidth: 250,
  },
  checkbox: {
    color: "#69f4bd",
    float: "right",
    width: "10%"
  },
};

class Buttons extends Component{

  state = {
    checked: false,
  }

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }
  render() {
    return (
        <div >
          <Checkbox
            labelStyle={{color:"#69f4bd"}}
            label="Breakfast"
            style={styles.checkbox}
          />
          <Checkbox
            labelStyle={{color:"#69f4bd"}}
            label="Lunch"
            style={styles.checkbox}
          />
          <Checkbox
            labelStyle={{color:"#69f4bd"}}
            label="Dinner"
            style={styles.checkbox}
          />
        </div>

    );
  }
}

export default Buttons;

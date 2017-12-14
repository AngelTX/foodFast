import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {


  block: {
    width: '50%',
    display: 'flex',
    paddingTop: 15,
    marginLeft: '-85px'

  },
  checkbox: {
    margin: 'auto',
    marginRight: 8,
    width: '80%',
    display: 'block',
    padding: '0 30px',
    height: '30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },

};

class CheckboxExampleSimple extends Component {
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
      <div style={styles.block}>

        <Checkbox
          className="breakfast"
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          label="Breakfast"
          style={styles.checkbox}
        />
        <Checkbox
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          label="Lunch"
          style={styles.checkbox}
        />
        <Checkbox
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          label="Dinner"
          style={styles.checkbox}
        />

      </div>
    );
  }
}

export default CheckboxExampleSimple;



// const Example = (props) => {
//   return (
//     <div style={{display: 'flex', flexDirection: 'row'}}>
//        <div><Checkbox /></div>
//        <div><Checkbox /></div>
//     </div>
//   );
// };

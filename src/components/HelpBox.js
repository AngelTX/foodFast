import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import IconButton from 'material-ui/IconButton';
import Help from 'material-ui/svg-icons/action/help';



class HelpBox extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Done"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <IconButton tooltip="Help" onClick={this.handleOpen}>
          <Help />
        </IconButton>
        <Dialog
          title="How to use FoodFast"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
          Enter in the total amount of calories you would like to eat for the day and hit submit. A choice of meals to reach your caloric goal will appear in the search results below.
        </Dialog>
      </div>
    );
  }
}

export default HelpBox;

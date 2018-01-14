import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render(){
    return (
      <div>
        <AppBar
          onRightIconButtonClick={this.handleToggle}
          iconElementRight={<FlatButton label="Favorites" />}
        />

          <Drawer open={this.state.open}
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
            <MenuItem>Some Food</MenuItem>
            <MenuItem>Some Other Food</MenuItem>
          </Drawer>
      </div>
    )
  }
};


export default Header;

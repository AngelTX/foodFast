import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Favorite from 'material-ui/svg-icons/action/favorite'
import Order from 'material-ui/svg-icons/action/add-shopping-cart'


const favoritesIcon = <Favorite/>;
const orderFood = <Order />;

class FavoriteButton extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>

          <BottomNavigationItem
            label="Favorite"
            icon={favoritesIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Order"
            icon={orderFood}
            onClick={() => this.select(1)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
export default FavoriteButton;

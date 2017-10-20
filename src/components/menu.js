import React, { Component } from 'react';

class Menu extends Component{
  constructor() {
    super();
    this.state = {items: ''}
  };

  componentDidMount() {
    fetch('https://api.nutritionix.com/v1_1/search', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "appId":"f6c1ec63",
        "appKey":"75d1892186aa45da19a882eb81ba37ba",
        "filters"{
          "nf_calories":{
            "from":100,
            "to":50
          },
          "nf_sodium":{
            "lte":200
          }
        }
      })
    })
  }

  render(){
    return(
      <div>
        <h1>Menu Items</h1>
      </div>
    )
  }
}

export default Menu;

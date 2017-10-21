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
        "fields":["item_name","brand_name","nf_calories","images_front_full_url", "upc"],
        "sort":{
          "field":"_score",
          "order":"desc"
        },
        "query": "starbucks",
        "offset":0,
        "limit":3,
        "filters":{
          "item_type":1,
          "nf_calories":{
            "from":500,
            "to":700
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

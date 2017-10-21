import React, { Component } from 'react';

class Menu extends Component{
  constructor() {
    super();
    this.state = {
      itemCalories:'',
      brandName:'',
      itemName:''
    }
  };

  componentWillMount() {
    fetch('https://api.nutritionix.com/v1_1/search', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
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
    }).then(results => {
      return results.json();
    })
    .then(data => {
      // console.log(data);
      // console.log(data.hits);
      // console.log(data.hits[0]);
      // console.log(data.hits[2].fields);
      this.setState({
        itemCalories:data.hits[0].fields.nf_calories,
        brandName:data.hits[0].fields.brand_name,
        itemName:data.hits[0].fields.item_name
        });
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.brandName}</h1>
        <h1>{this.state.itemName}</h1>
        <h1>{this.state.itemCalories}</h1>
      </div>
    )
  }
}

export default Menu;

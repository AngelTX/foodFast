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
    fetch('http://localhost:3001/menu', {
      method: 'GET',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(results => {
      console.log(results);
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

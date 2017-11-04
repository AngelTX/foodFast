import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Menu extends Component{
  constructor() {
    super();
    this.state = {
      itemCalories:'',
      brandName:'',
      itemName:'',
      itemCalories1:'',
      brandName1:'',
      itemName1:'',
      itemCalories2:'',
      brandName2:'',
      itemName2:''
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
        itemName:data.hits[0].fields.item_name,
        itemCalories1:data.hits[1].fields.nf_calories,
        brandName1:data.hits[1].fields.brand_name,
        itemName1:data.hits[1].fields.item_name,
        itemCalories2:data.hits[2].fields.nf_calories,
        brandName2:data.hits[2].fields.brand_name,
        itemName2:data.hits[2].fields.item_name
        });
    })
  }

  render(){
    return(
      <div>
        <Col xs={12}>
          <div>
            <h1>{this.state.brandName}</h1>
            <h1>{this.state.itemName}</h1>
            <h1>{this.state.itemCalories}</h1>
          </div>

          <div>
            <h1>{this.state.brandName1}</h1>
            <h1>{this.state.itemName1}</h1>
            <h1>{this.state.itemCalories1}</h1>
          </div>

          <div>
            <h1>{this.state.brandName2}</h1>
            <h1>{this.state.itemName2}</h1>
            <h1>{this.state.itemCalories2}</h1>
          </div>
        </Col>
      </div>
    )
  }
}

export default Menu;

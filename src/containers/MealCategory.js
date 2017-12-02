import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MealCategory = (props) =>{

    return(
      <div>
        <div>
          <h1>{props.category}</h1>
          <div>
            <h1>{props.items.brandName1}</h1>
            <h2>{props.items.itemName1}</h2>
            <h3>{props.items.itemCalories1}</h3>
          </div>
          <div>
            <h1>{props.items.brandName2}</h1>
            <h2>{props.items.itemName2}</h2>
            <h3>{props.items.itemCalories2}</h3>
          </div>
          <div>
            <h1>{props.items.brandName}</h1>
            <h2>{props.items.itemName}</h2>
            <h3>{props.items.itemCalories}</h3>
          </div>
        </div>
      </div>
    )
}

export default MealCategory;

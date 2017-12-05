import React from 'react';

const MenuItem = (props) =>{
  // console.log(props)
  // const foodCategory = props.category;
  const menuItem = props.items;

    return(
      <div>
          <h1>{props.title}</h1>
          {menuItem ?
            <h1>{menuItem[0].fields.brand_name}</h1>
            : null
          }
          {menuItem ?
            <h1>{menuItem[0].fields.item_name}</h1>
            : null
          }
          {menuItem ?
            <h1>{menuItem[0].fields.nf_calories}</h1>
            : null
          }

      </div>
    )
}

export default MenuItem;

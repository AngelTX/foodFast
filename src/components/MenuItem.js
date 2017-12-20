import React from 'react';

const MenuItem = (props) =>{

  const menuItem = props.items;
  const i = props.index;

    return(
      <div>
            <h1>{menuItem[i].fields.brand_name}</h1>

            <h1>{menuItem[i].fields.item_name}</h1>

            <h1>{menuItem[i].fields.nf_calories}</h1>
      </div>
    )
}

export default MenuItem;

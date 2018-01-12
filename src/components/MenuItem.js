import React from 'react';

const MenuItem = (props) =>{

  const menuItem = props.items;
  const i = props.index;

    return(
      <div className="card">
          <h1>{menuItem[i].fields.nf_calories}</h1>

          <h2>{menuItem[i].fields.item_name}</h2>

          <h3>{menuItem[i].fields.brand_name}</h3>
      </div>
    )
}

export default MenuItem;

// const menuItem = props.items.breakfast;

import React, { Component } from 'react';

const MenuResult = (props) => {

  const menuItem = props.items;

  return (

      <div>
        <h1>{props.category}</h1>
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


export default MenuResult;

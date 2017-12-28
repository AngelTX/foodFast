import React from 'react';

const MenuItem = (menuArray) =>{

  itemArray = menuArray.map(newComp)

    return(
      <div>
            <h1>{menuArray.fields.brand_name}</h1>

            <h1>{menuArray.fields.item_name}</h1>

            <h1>{menuArray.fields.nf_calories}</h1>
      </div>
    )
}

const newComp = () =>{


}

export default MenuItem;

import React from 'react';

const MealCategory = (props) =>{
  console.log(props)
  const breakfast = props.items.breakfast;
    return(
      <div>
        <div>
          <h1>{props.category}</h1>
            <div>
              {breakfast ?
                <h1>{breakfast[0].fields.brand_name}</h1>
                : null
              }
              {breakfast ?
                <h1>{breakfast[0].fields.item_name}</h1>
                : null
              }
              {breakfast ?
                <h1>{breakfast[0].fields.nf_calories}</h1>
                : null
              }
            </div>
            <div>
              {breakfast ?
                <h1>{breakfast[1].fields.brand_name}</h1>
                : null
              }
              {breakfast ?
                <h1>{breakfast[1].fields.item_name}</h1>
                : null
              }
              {breakfast ?
                <h1>{breakfast[1].fields.nf_calories}</h1>
                : null
              }
            </div>
            <div>
              {breakfast ?
                <h1>{breakfast[2].fields.brand_name}</h1>
                : null
              }
              {breakfast ?
                <h1>{breakfast[2].fields.item_name}</h1>
                : null
              }
              {breakfast ?
                <h1>{breakfast[2].fields.nf_calories}</h1>
                : null
              }
            </div>
        </div>
      </div>
    )
}

export default MealCategory;

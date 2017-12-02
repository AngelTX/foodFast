import React from 'react';



const Lunch = (props) =>{
  console.log(props)
  const foodCategory = props.category;
  const menuItem = props.items.lunch;

    return(
      <div>
        <div>
          <h1>Lunch</h1>
            <div>
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
            <div>
              {menuItem ?
                <h1>{menuItem[1].fields.brand_name}</h1>
                : null
              }
              {menuItem ?
                <h1>{menuItem[1].fields.item_name}</h1>
                : null
              }
              {menuItem ?
                <h1>{menuItem[1].fields.nf_calories}</h1>
                : null
              }
            </div>
            <div>
              {menuItem ?
                <h1>{menuItem[2].fields.brand_name}</h1>
                : null
              }
              {menuItem ?
                <h1>{menuItem[2].fields.item_name}</h1>
                : null
              }
              {menuItem ?
                <h1>{menuItem[2].fields.nf_calories}</h1>
                : null
              }
            </div>
        </div>
      </div>
    )
}

export default Lunch;

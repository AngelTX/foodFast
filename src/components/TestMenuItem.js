import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const TestMenuItem = (props) =>{

  const menuItem = props.items;

    return(
      <div>
          <h1>{props.title}</h1>
            <h2>370 Calories</h2>
            <h2>Scrambler Marie's Breakfast Bistro</h2>
            <h3>Jumpstart Breakfast Sandwich</h3>

            <Checkbox className="something"
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            labelStyle={{color:"#69f4bd"}}
            label="Add to maybe"
          />


      </div>
    )
}

export default TestMenuItem;

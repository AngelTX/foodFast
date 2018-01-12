import React from 'react';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
  height: 150,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const MenuItem = (props) =>{

  const menuItem = props.items;
  const i = props.index;

    return(
      <div>
        <Paper style={style} zDepth={2}>
          <h1>{menuItem[i].fields.nf_calories}</h1>

          <h2>{menuItem[i].fields.item_name}</h2>

          <h3>{menuItem[i].fields.brand_name}</h3>
          <FloatingActionButton mini={true}>
            <ContentAdd />
          </FloatingActionButton>

        </Paper>
      </div>
    )
}

export default MenuItem;

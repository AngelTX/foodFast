import React, { Component } from 'react';
import { Col, Button, Row, } from 'react-bootstrap';
import logo from '../public/imgs/logo.png';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import setGoalStyle from '../public/styles.js'


const style = {
// height: 200,
// width: 750,
// margin: 20,
padding: 15,
textAlign: 'center',
// display: 'inline-block',
};

const bstyle = {
  margin: 12,
};

class SetGoal extends Component {

  render(){
    return(

        <Paper style={style} zDepth={1}>

                <img
                  src={logo}
                  alt='logo'
                  height="100"
                  width="150"
                />


            <form onSubmit={this.props.onNewSubmit}>

                  <TextField hintText="e.g. 1300"
                    floatingLabelText="Set your calorie goal"
                    id="input"
                    type="text"
                    name="calorieGoal"
                    onChange={this.props.onNewUpdate}/>

              <RaisedButton label="Submit" type="submit" primary={true} style={bstyle}/>
            </form>

        </Paper>

    )
  }
}

export default SetGoal;

import React, { Component } from 'react';
import HelpBox from './HelpBox.js';
import logo from '../public/imgs/logo.png';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


import setGoalStyle from '../public/styles.js'


const style = {
padding: 15,
textAlign: 'center',
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
              <HelpBox/>

            </form>
        </Paper>
    )
  }
}

export default SetGoal;

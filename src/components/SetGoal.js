import React, { Component } from 'react';
import { Col, Button, Row, } from 'react-bootstrap';
import logo from '../public/imgs/logo.png';
import Paper from 'material-ui/Paper';


const style = {
height: 150,
width: 500,
margin: 20,
textAlign: 'center',
display: 'inline-block',
};

class SetGoal extends Component {

  render(){
    return(
      <header>
        <Paper style={style} zDepth={1}>
          <div>
                <img
                  src={logo}
                  alt='logo'
                  height="100"
                  width="150"
                />
          </div>
          <div>
            <form onSubmit={this.props.onNewSubmit}>
              <div>
                <input
                  id="input"
                  type="text"
                  name="calorieGoal"
                  placeholder="Set Calorie Goal!"
                  onChange={this.props.onNewUpdate}/>
              </div>
              <Button bsStyle="info" type="submit" id="button">Submit</Button>
            </form>
          </div>
        </Paper>
      </header>
    )
  }
}

export default SetGoal;

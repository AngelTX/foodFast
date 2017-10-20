import React, { Component } from 'react';

//Components
import SetGoal from './components/setgoal.js';
import Menu from './components/menu.js';

class App extends Component {
  render() {
    return (
      <div>
        <SetGoal/>
        <Menu/>
      </div>
    );
  }
}

export default App;

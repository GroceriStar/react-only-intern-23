import React, { Component } from 'react';
import { Calender } from './component/Calender';
import { DayChecker } from './component/DayChecker';
import { WorkSched } from './component/WorkSched';




class App extends Component {
        
  render() {
    return (
        <div>
      {/*  <DayChecker /> */}
        <WorkSched />
        </div>
    );
  }
}

export default App;

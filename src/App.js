import React, { Component } from 'react';
import { Calender } from './component/Calender';
import { DayChecker } from './component/DayChecker';




class App extends Component {
        
  render() {
    return (
        <div>
        <DayChecker />
        <Calender/>
        </div>
    );
  }
}

export default App;

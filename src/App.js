import React, { Component } from 'react';
import { Calender } from './component/Calender';
import { MealPlan } from './component/MealPlan';
import { WorkSched } from './component/WorkSched';
import { DayChecker } from './component/DayChecker';






class App extends Component {
        
  render() {
    return (
        <div>
      {/*  <DayChecker /> */}
        <DayChecker />
       <WorkSched />
        <Calender />
       <MealPlan />
        </div>
    );
  }
}

export default App;

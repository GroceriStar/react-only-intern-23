import React, { Component } from 'react';
import { Calender } from './component/Calender';
import { DayChecker } from './component/DayChecker';
import { MealPlan } from './component/MealPlan';
import { WorkSched } from './component/WorkSched';





class App extends Component {
        
  render() {
    return (
        <div>
      {/*  <DayChecker /> */}
       <WorkSched />
        <MealPlan />
        </div>
    );
  }
}

export default App;

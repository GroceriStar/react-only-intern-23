import React, { Component } from 'react';
import { Calendar }  from './component/Calendar';
import { MealPlan }  from './component/MealPlan';
import { WorkSched } from './component/WorkSched';
import { DayChecker } from './component/DayChecker';






class App extends Component {

  render() {
    return (
        <div>
      {/*  <DayChecker /> */}
        <DayChecker />
       <WorkSched />
        <Calendar />
       <MealPlan />
        </div>
    );
  }
}

export default App;

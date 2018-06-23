import React, { Component } from 'react';
import { Calender }  from './component/Calender';
import { MealPlan }  from './component/MealPlan';
import { WorkSched } from './component/WorkSched';





class App extends Component {

  render() {
    return (
        <div>
      {/*  <DayChecker /> */}
       <WorkSched />
        <Calender />
       <MealPlan />
        </div>
    );
  }
}

export default App;

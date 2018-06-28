import React, { Component } from 'react';
import { Calendar }  from './component/Calendar/Calendar';
import { MealPlan }  from './component/MealPlanner/MealPlan';
import { WorkSched } from './component/WorkSchedule/WorkSched';
import { DayChecker } from './component/DayChecker';
import { ColumnRender } from './component/WorkSchedule/DayModel';


class App extends Component {

  render() {
    return (
        <div>
      {/*  <DayChecker /> */}
        <DayChecker />
        <WorkSched />
                <ColumnRender />

        <Calendar />
        <MealPlan />
        </div>
    );
  }
}

export default App;

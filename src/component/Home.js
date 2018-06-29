import React, { Component } from 'react';
import { Calendar }  from './Calendar/Calendar';
import { MealPlan }  from './MealPlanner/MealPlan';

class Home extends Component {
    render() {
        return(
            <div>
            <Calendar />
            <MealPlan />
            </div>
        );
    }
}

export { Home }
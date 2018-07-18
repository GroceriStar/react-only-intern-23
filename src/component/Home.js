import React, { Component } from 'react';
import { Calendar }  from './Calendar/Calendar';
import { MealPlan }  from './MealPlanner/MealPlan';
import { Recipy } from './Recipy/RecipyForm'

class Home extends Component {
    render() {
        return(
            <div>
            <Calendar />
            <MealPlan />
            <Recipy />
            </div>
        );
    }
}

export { Home }
import React, { Component } from 'react';
import { Calendar }  from './Calendar/Calendar';
import { MealPlan }  from './MealPlanner/MealPlan';
import { Recipe }    from './Recipe/RecipeForm'

class Home2 extends Component {
    render() {
        return(
            <div>
            <Calendar />
            <MealPlan />
            <Recipe />
            </div>
        );
    }
}

export { Home2 }

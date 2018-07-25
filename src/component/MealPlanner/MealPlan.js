import React, { Component } from 'react';
import { AddMeal } from '../Modals/AddMealModal';
import {
  Container,
  Row 
} from 'reactstrap';
import { topMargin } from './MealPlanStyle';
import { MealCard } from './Cards';
import { multiVal } from '../FormFields/Ingredients';

//import { diet } from '../FormFields/Diets';
//import { allergy } from '../FormFields/Allergy';
//import { course } from '../FormFields/Course';
//import { cuisine } from '../FormFields/Cuisine';

import { mealDays } from '../FormFields/MealDay';

//import { holidays } from '../FormFields/Holiday';

import { attribute } from '../FormFields/Attribute';
import { mealInit } from '../../data/MealData';

class MealPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: {},
            meals: [],
            ingredients: [],
            showAddMealMessage: false
        };

        this.renderMeals       = this.renderMeals.bind(this);
        this.handleClick       = this.handleClick.bind(this);
        this.changeHandle      = this.changeHandle.bind(this);
        this.handleImage       = this.handleImage.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSteps       = this.handleSteps.bind(this);
        this.handleIngredients = this.handleIngredients.bind(this);
        this.handleDiet        = this.handleDiet.bind(this);
        this.handleAllergy     = this.handleAllergy.bind(this);
        this.handleCourse      = this.handleCourse.bind(this);
        this.handleCuisine     = this.handleCuisine.bind(this);
        this.handleDays        = this.handleDays.bind(this);
        this.handleHoliday     = this.handleHoliday.bind(this);

    }

    renderMeals() {
        return (
            <div>
            <Container>
                <Row>
                {this.state.meals.map((meal, index) => {
                    return (
                        <MealCard key={index} mealprop={meal} />
                      );
                })}
                </Row>
            </Container>
            </div>
        );
    }


    changeHandle(event) {
      this.setState({
        meal: {...this.state.meal, name: event.target.value}
      });
    }

    handleImage(event) {
      this.setState({
        meal: {...this.state.meal, image: event.target.value}
      });
    }

    handleIngredients() {
        this.setState({
            meal: {...this.state.meal, ingredients: multiVal}
        });
    }

    handleDescription(event) {
      this.setState({
        meal: {...this.state.meal, description: event.target.value}
      });
    }

    handleSteps(event) {
      this.setState({
        meal: {...this.state.meal, step: event.target.value}
      });
    }

    handleDiet() {
        let diet = attribute;
        this.setState({
            meal: {diet, ...this.state.meal}
        })
    }

    handleAllergy() {
        let allergy = attribute;
        this.setState({
            meal: {allergy, ...this.state.meal}
        })
    }

    handleCourse() {
        let course = attribute;
        this.setState({
            meal: {course, ...this.state.meal}
        })
    }

    handleCuisine() {
        let cuisine = attribute;
        this.setState({
            meal: {cuisine, ...this.state.meal}
        })
    }

    handleDays() {
        this.setState({
            meal: {...this.state.meal, day: mealDays}
        })
    }

    handleHoliday() {
        let holidays = attribute;
        this.setState({
            meal: {holidays, ...this.state.meal }
        })
    }

    handleClick() {
      this.setState({
          meals        : [...this.state.meals, this.state.meal]
      });
        console.log(this.state.meal)
    }

    componentWillMount() {
        this.setState({
          meals        : mealInit
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.meals.length < this.state.meals.length) {
            this.setState({showAddMealMessage: true});
            setTimeout(() => this.setState({showAddMealMessage: false}), 2000);
        }
    }





    render() {
        return(
        <div>
            <h2>Want to add a meal</h2>

            <AddMeal handleSteps={this.handleSteps}
              handleDescription={this.handleDescription}
              handleImage={this.handleImage}
              changeHandle={this.changeHandle}
              handleClick={this.handleClick}
              handleIngredients={this.handleIngredients}
              handleDiet={this.handleDiet}
              handleAllergy={this.handleAllergy}
              handleCourse={this.handleCourse}
              handleCuisine={this.handleCuisine}
              handleDays={this.handleDays}
              handleHoliday={this.handleHoliday}
            />
            
            <div style={topMargin}>
            <div>{ this.state.showAddMealMessage ? <h3>Meal was added</h3> : null }</div>
            <ul>
                {this.renderMeals()}
            </ul>
            </div>
        </div>
        );
    }
}

export { MealPlan }

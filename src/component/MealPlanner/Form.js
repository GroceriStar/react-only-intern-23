import React, {
   Component
 } from 'react';
import { MealName } from '../FormFields/MealName';
import { Ingredient } from '../FormFields/Ingredients';
import { ImageURL } from '../FormFields/MealImage';
import { Steps } from '../FormFields/MealSteps';
import { Description } from '../FormFields/MealDescription';
import { Diets } from '../FormFields/Diets';
import { Allergy } from '../FormFields/Allergy';
import { Course } from '../FormFields/Course';
import { Cuisine } from '../FormFields/Cuisine';
import { MealDay } from '../FormFields/MealDay';
import { Holiday } from '../FormFields/Holiday'

class MealForm extends Component {
    render() {
        return(
            <div>
              <MealName changeHandle={this.props.changeHandle} />
              <ImageURL handleImage={this.props.handleImage} />
              <Ingredient handleIngredients={this.props.handleIngredients} />
              <Steps handleSteps={this.props.handleSteps} />
              <Description handleDescription={this.props.handleDescription} />
              <Diets handleDiet={this.props.handleDiet} />
              <Allergy handleAllergy={this.props.handleAllergy} />
              <Course handleCourse={this.props.handleCourse} />
              <Cuisine handleCuisine={this.props.handleCuisine} />
              <MealDay handleDays={this.props.handleDays} />
              <Holiday handleHoliday={this.props.handleHoliday} />
            </div>
        );
    }
}

export { MealForm }
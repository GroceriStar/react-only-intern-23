import React, {
   Component
 } from 'react';
import { MealName } from '../FormFields/MealName';
import { Ingredient } from '../FormFields/Ingredients';
import { ImageURL } from '../FormFields/MealImage';
import { Steps } from '../FormFields/MealSteps';
import { Description } from '../FormFields/MealDescription';
//import { Diets } from '../FormFields/Diets';
//import { Allergy } from '../FormFields/Allergy';
//import { Course } from '../FormFields/Course';
//import { Cuisine } from '../FormFields/Cuisine';

import { MealDay } from '../FormFields/MealDay';

//import { Holiday } from '../FormFields/Holiday';

import { Attribute } from '../FormFields/Attribute';

class MealForm extends Component {
    render() {
        return(
            <div>
              <MealName    changeHandle={this.props.changeHandle} />
              <ImageURL    handleImage={this.props.handleImage} />
              {/*
              <Ingredient  handleIngredients={this.props.handleIngredients} />
              */}
              <Steps       handleSteps={this.props.handleSteps} />
              <Description handleDescription={this.props.handleDescription} />

              { /*
              <Attribute type='Diets' handleAttribute={this.props.handleDiet} />
              <Attribute type='Allergy' handleAttribute={this.props.handleAllergy} />
              <Attribute type='Course' handleAttribute={this.props.handleCourse} />
              <Attribute type='Cuisine' handleAttribute={this.props.handleCuisine} />
              */ }
              <MealDay   handleDays={this.props.handleDays} />

              <Attribute type='Holidays' handleAttribute={this.props.handleHoliday} />

            </div>
        );
    }
}

export { MealForm }

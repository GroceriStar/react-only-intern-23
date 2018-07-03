import React, { Component } from 'react';
import { AddMeal } from '../Modals/AddMealModal';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle,
} from 'reactstrap';
import { cardSize, cardHeight, topMargin } from './MealPlanStyle'
import { img_url } from '../../data/Images_url';
import { MealCard } from './Cards';
import { mealInit } from '../../data/MealData'

class MealPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: {},
            meals: [],
            showAddMealMessage: false
        };

        this.renderMeals       = this.renderMeals.bind(this);
        this.handleClick       = this.handleClick.bind(this);
        this.changeHandle      = this.changeHandle.bind(this);
        this.handleImage       = this.handleImage.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSteps       = this.handleSteps.bind(this);

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

    handleClick() {
      this.setState({
          meals        : [...this.state.meals, this.state.meal]
      });
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
              handleClick={this.handleClick}  />
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

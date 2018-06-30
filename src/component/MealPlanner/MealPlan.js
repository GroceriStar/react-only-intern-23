import React, { Component } from 'react';
import { AddMeal } from '../Modals/AddMealModal';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle,
} from 'reactstrap';
import { cardSize, cardHeight, topMargin } from './MealPlanStyle'
import { img_url } from '../../data/Images_url'

class MealPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: '',
            meals: [],
            imgURL: '',
            images: [],
            description: '',
            descriptions: [],
            step: '',
            steps: [],
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
<<<<<<< HEAD
                {this.state.meals.map((meal, index) => {
                    return (
                        <div key={`${index}Div`}>
                        <Col xs='3'>
                          <Card style={cardSize}  key={index}>
                            <CardImg key={index} top width="100%" style={cardHeight} src={this.state.images[index]} alt="This image is not supported" />
                            <CardBody key={`${index}Body`}>
                              <CardTitle>{meal}</CardTitle>
                              <CardText>{this.state.descriptions[index]}</CardText>
                            </CardBody>
                          </Card>
                        </Col>
                        </div>
                      );
                })}
=======
                  {this.state.meals.map((meal, index) => {
                      return (
                          <div>
                          <Col xs='3'>
                            <Card style={cardSize}  key={index}>
                              <CardImg key={index} top width="100%" style={cardHeight} src={this.state.images[index]} alt="This image is not supported" />
                              <CardBody key={index}>
                                <CardTitle>{meal}</CardTitle>
                                <CardText>{this.state.descriptions[index]}</CardText>
                              </CardBody>
                            </Card>
                          </Col>
                          </div>
                        );
                  })}
>>>>>>> d163478df8f25f616a4ec3c791d4aad8262ba4ba
                </Row>
            </Container>
            </div>
        );
    }


    changeHandle(event) {
      this.setState({
        meal: event.target.value
      });
    }

    handleImage(event) {
      this.setState({
        imgURL: event.target.value
      });
    }

    handleDescription(event) {
      this.setState({
        description: event.target.value
      });
    }

    handleSteps(event) {
      this.setState({
        'step': event.target.value
      });
    }

    handleClick() {
      this.setState({
          meals        : [...this.state.meals, this.state.meal],
          images       : [...this.state.images, this.state.imgURL],
          descriptions : [...this.state.descriptions, this.state.description],
          steps        : [...this.state.steps, this.state.step]
      });
    }

    componentWillMount() {
        this.setState({
            meals        : ['Burger', 'Pizza'],
            images       : img_url,
            descriptions : ['Burgers are eaten all over the world, and are one of the most handy and easy to make recipy', 'Pizza is a mouth watering dish']
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

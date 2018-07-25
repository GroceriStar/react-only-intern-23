import React, { Component } from 'react';
import {
  Col, 
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import { cardSize, cardHeight } from './MealPlanStyle';


class MealCard extends Component {
    showIngredients() {
        return this.props.mealprop.ingredients.map((ingr, index) => {
                      if (index === this.props.mealprop.ingredients.length-2 || this.props.mealprop.ingredients.length === 1) {
                          return <span key={index}>{ingr.label} </span>
                      }
                      if (index === this.props.mealprop.ingredients.length-1 && index !== 0) {
                          return <span key={index}>and {ingr.label}</span>
                      }
                      return <span key={index}>{ingr.label}, </span>
                }
            );
        
    }

    render() {
        return(
        <div>
              <Col xs='3'>
                <Card style={cardSize}>
                  <CardImg top width="100%" style={cardHeight} src={this.props.mealprop.image} alt="This image is not supported" />
                  <CardBody>
                    <CardTitle>{this.props.mealprop.name}</CardTitle>
                    <CardSubtitle>You'll Need: </CardSubtitle>
                    {this.showIngredients()}
                    <hr/>
                    <CardText>
                      {this.props.mealprop.description}
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
        </div>
        )
    }
}

export { MealCard }
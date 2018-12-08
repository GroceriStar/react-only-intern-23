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
import _ from 'lodash';

const showIngredients = ( ingredients ) => {

  const list =  _.map(ingredients, (ingredient, index) => {

      if( index === ingredients.length-2 || ingredients.length === 1 ){
        return <span key={index}> {ingredient.value} </span>
      }

      // last item
      if( index === ingredients.length-1 || index !== 0 ){
        return <span key={index}>and {ingredient.value}</span>
      }

      return <span key={index}>{ingredient.value}, </span>


    });

  return list;

};


class MealCard extends Component {


    render() {
        return(
        <div>
              <Col xs='3'>
                <Card style={cardSize}>
                  <CardImg top width="100%" style={cardHeight} src={this.props.mealprop.image} alt="This image is not supported" />
                  <CardBody>
                    <CardTitle>{this.props.mealprop.name}</CardTitle>
                    <CardSubtitle>You'll Need: </CardSubtitle>
                    
                    {showIngredients(this.props.mealprop.ingredients)}
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

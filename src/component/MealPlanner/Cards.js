import React, { Component } from 'react';
import {
  Col, 
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';
import { cardSize, cardHeight } from './MealPlanStyle';


class MealCard extends Component {
    render() {
        return(
        <div>
                        <Col xs='3'>
                          <Card style={cardSize}>
                            <CardImg top width="100%" style={cardHeight} src={this.props.mealprop.image} alt="This image is not supported" />
                            <CardBody>
                              <CardTitle>{this.props.mealprop.name}</CardTitle>
                              <CardText>{this.props.mealprop.description}</CardText>
                            </CardBody>
                          </Card>
                        </Col>
        </div>
        )
    }
}

export { MealCard }
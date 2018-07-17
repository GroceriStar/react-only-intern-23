import React, {
   Component
 } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import { MealName } from '../FormFields/MealName';
import { Ingredient } from '../MealPlanner/Ingredients';
import { ImageURL } from '../FormFields/MealImage';
import { Steps } from '../FormFields/MealSteps';
import { Description } from '../FormFields/MealDescription';


class AddMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    handleValidSubmit() {
        this.props.handleClick();
        this.toggle();
    }

    render() { 
        return(
          <div>
            <Button onClick={this.toggle}>
              Add Meal
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <AvForm onValidSubmit={this.handleValidSubmit} >
                <ModalHeader toggle={this.toggle}>
                  Add a meal
                </ModalHeader>
                <ModalBody>
                  <MealName changeHandle={this.props.changeHandle} />
                  <ImageURL handleImage={this.props.handleImage} />
                  <Ingredient handleIngredients={this.props.handleIngredients} />
                  <Steps handleSteps={this.props.handleSteps} />
                  <Description handleDescription={this.props.handleDescription} />
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.clickHandle}>
                    Add
                  </Button>
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
                </AvForm>
              </Modal>
           </div>
        );
    }
}

export { AddMeal }

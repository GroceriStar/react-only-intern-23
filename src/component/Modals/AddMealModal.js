import React, {
   Component
 } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from 'reactstrap';
import { Ingredient } from '../MealPlanner/Ingredients';
import { AvForm, AvField } from 'availity-reactstrap-validation';


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
                    <FormGroup>
                        <AvField onBlur={this.props.changeHandle} name="meal" pattern="^[A-Z][A-Za-z' -]+" label="Meal Name" type="text" required />
                    </FormGroup>
                    <FormGroup>
                        <AvField onBlur={this.props.handleImage} name="imageURL" label="Image URL here" type="URL" required />
                    </FormGroup>
                    <Ingredient handleIngredients={this.props.handleIngredients} />
                    <FormGroup>
                        <AvField onBlur={this.props.handleDescription} name="description" label="Description" type="textArea" placeholder='Description' required />
                    </FormGroup>
                    <FormGroup>
                        <AvField onBlur={this.props.handleSteps} name="Steps" label="Steps for recipy" type="textArea" />
                    </FormGroup>                 
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

import React, {
   Component
 } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Form,
  FormGroup
} from 'reactstrap';

class AddMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.clickHandle = this.clickHandle.bind(this);

    }

    toggle = function() {
        this.setState({
            modal: !this.state.modal
        });
    }
    clickHandle() {
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
                <ModalHeader toggle={this.toggle}>
                  Add a meal
                </ModalHeader>
                <ModalBody>
                  <Form>
                     <FormGroup>
                        <Label>Meal Name</Label>
                        <Input type="text" onBlur={this.props.changeHandle} id="mealName" placeholder="Meal name here" />
                      </FormGroup>
                     <FormGroup>
                        <Label>You can also attach an image to your meal</Label>
                        <Input type="text" onBlur={this.props.handleImage} id="mealImage" placeholder="Image URL here" />
                      </FormGroup>
                     <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="textarea" onBlur={this.props.handleDescription} name="text" id="descMeal" />
                      </FormGroup>
                     <FormGroup>
                        <Label for="exampleText">Steps</Label>
                        <Input type="textarea" onBlur={this.props.handleSteps}name="text" id="stepMeal" />
                      </FormGroup>
                 </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.clickHandle}>
                    Add
                  </Button>
                  <Button color="secondary" onClick={this.toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
           </div>
        );
    }
}

export { AddMeal }

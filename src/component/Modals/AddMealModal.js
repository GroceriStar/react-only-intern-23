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

import { AvForm, AvField } from 'availity-reactstrap-validation';

class AddMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            valid: 'invalid'
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
                        <AvField name="meal" pattern="^[A-Z][A-Za-z' -]+" label="Meal Name" type="text" required />
                    </FormGroup>
                    <FormGroup>
                        <AvField name="imageURL" label="Image URL here" type="URL" required />
                    </FormGroup>
                    <FormGroup>
                        <AvField name="description" label="Description" type="textArea" required />
                    </FormGroup>
                    <FormGroup>
                        <AvField name="Steps" label="Steps for recipy" type="textArea" />
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

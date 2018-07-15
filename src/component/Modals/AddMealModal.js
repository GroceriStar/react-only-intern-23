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
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { AvForm, AvField } from 'availity-reactstrap-validation';

let multiVal;

class AddMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            multiValue: [],
            options: [
                    { value: 'Salt', label: 'Salt' },
                    { value: 'Sugar', label: 'Sugar'},
                    { value: 'Bread', label: 'Bread'}
            ]
        };
        this.toggle = this.toggle.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
            multiValue: []
        });
    }
    
    handleValidSubmit() {
        this.props.handleClick();
        this.toggle();
    }
    
    handleOnChange(value) {
        this.setState({
            multiValue: value
        });
    }
    
    


    render() {         multiVal = this.state.multiValue;
 
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
                    <div>Ingredients
                    <Select.Creatable
                        multi={true}
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        value={this.state.multiValue}
                        showNewOptionAtTop={true}
                        onBlur={this.props.handleIngredients}
                    />
                    </div>
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

export { AddMeal, multiVal }

import React, {
   Component
 } from 'react';
 
import { AvField } from 'availity-reactstrap-validation';
import { FormGroup } from 'reactstrap';

class Description extends Component {
    render() {
        return(
        <FormGroup>
          <AvField onBlur={this.props.handleDescription}
          name="description" label="Description" type="textArea"
          placeholder='Description' required />
        </FormGroup>
        );
    }
}

export { Description }

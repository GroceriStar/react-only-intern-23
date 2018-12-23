import React, {
   Component
 } from 'react';
import { AvField } from 'availity-reactstrap-validation';
import { FormGroup } from 'reactstrap';


class Steps extends Component {
  render() {
    return(
      <FormGroup>
        <AvField
          onBlur={this.props.handleSteps}
          name="Steps"
          label="Steps for recipe"
          type="textArea" />
      </FormGroup>
    );
  }
}

export { Steps }

import React, {
   Component
 } from 'react';
import { AvField } from 'availity-reactstrap-validation';
import { FormGroup } from 'reactstrap';

class MealName extends Component {
    render() {
        return(
        <FormGroup>
          <AvField onBlur={this.props.changeHandle} name="meal"
          pattern="^[A-Z][A-Za-z' -]+" label="Meal Name" type="text" required />
        </FormGroup>
        );
    }
}

export { MealName }

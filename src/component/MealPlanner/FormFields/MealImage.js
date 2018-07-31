import React, {
   Component
 } from 'react';
import { AvField } from 'availity-reactstrap-validation';
import { FormGroup } from 'reactstrap';


class ImageURL extends Component {
    render() {
        return(
        <FormGroup>
          <AvField onBlur={this.props.handleImage} name="imageURL"
          label="Image URL here" type="URL" required />
        </FormGroup>
        );
    }
}

export { ImageURL }

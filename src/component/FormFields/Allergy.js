import React, {
   Component
 } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import data from '@groceristar/groceristar-fetch';
console.log(data.getAllergies())

let allergy;

class Allergy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
            options: [
                    { value: 'G-F', label: 'Gluten' },
                    { value: 'L-F', label: 'Lactose'},
                    { value: 'E-F', label: 'Egg'}
            ]
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({
            value
        });
    }

    render() {
        allergy = this.state.value;
        return(
            <div>Allergy
                    <Select.Creatable
                        multi={false}
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        value={this.state.value}
                        showNewOptionAtTop={true}
                        onBlur={this.props.handleAllergy}
                    />
            </div>
        );
    }
}

export { Allergy, allergy }

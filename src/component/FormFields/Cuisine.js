import React, {
   Component
 } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

let cuisine;

class Cuisine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
            options: [
                    { value: 'Chinese', label: 'Chinese-Cuisine' },
                    { value: 'Italian', label: 'Italian-Cuisine'},
                    { value: 'Indian', label: 'Indian-Cuisine'}
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
        cuisine = this.state.value;
        return(
            <div>Cuisine
                    <Select.Creatable
                        multi={false}
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        value={this.state.value}
                        showNewOptionAtTop={true}
                        onBlur={this.props.handleCuisine}
                    />
            </div>
        );
    }
}

export { Cuisine, cuisine }

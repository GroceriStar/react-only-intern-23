import React, {
   Component
 } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

let multiVal;


class Ingredient extends Component{
    constructor(props) {
        super(props);
        this.state = {
            multiValue: [],
            options: [
                    { value: 'Salt', label: 'Salt' },
                    { value: 'Sugar', label: 'Sugar'},
                    { value: 'Bread', label: 'Bread'}
            ]
        };
        
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    
    handleOnChange(value) {
        this.setState({
            multiValue: value
        });
    }
    
    render() { multiVal = this.state.multiValue;
        return(
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
        );
    }
}

export { Ingredient, multiVal }
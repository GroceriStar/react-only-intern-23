import React, {
   Component
 } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

let diet;

class Diets extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
            options: [
                    { value: 'Veg', label: 'Vegetarian' },
                    { value: 'N-Veg', label: 'Non-vegetarian'},
                    { value: 'Vegan', label: 'Vegan'}
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
        diet = this.state.value;
        return(
            <div>Diets
                    <Select.Creatable
                        multi={false}
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        value={this.state.value}
                        showNewOptionAtTop={true}
                        onBlur={this.props.handleDiet}
                    />
            </div>
        );
    }
}

export { Diets, diet }
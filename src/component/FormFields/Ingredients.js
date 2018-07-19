import React, {
   Component
 } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import data from '@groceristar/groceristar-fetch/search';

function toOpt(arr) {
    let Opt= arr.reduce((intermediate, item, index) => {
        intermediate[index]={};
        intermediate[index].value = index;
        intermediate[index].label = item;
        return intermediate;
    }, []);
    return Opt;
}

const Options = toOpt(data.getIngredients1());


let multiVal;


class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiValue: [],
            options: Options
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({
            multiValue: value
        });
    }

    render() {
        multiVal = this.state.multiValue;
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

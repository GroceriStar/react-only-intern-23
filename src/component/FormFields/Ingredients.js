import React, {
   Component
 } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';

import {
  getIngredients1, getPlaceholder
} from "../../selectors/selector";
// import data from '@groceristar/groceristar-fetch/search';



function toOpt(arr) {
    let Opt= arr.reduce((intermediate, item, index) => {
        intermediate[index]={};
        intermediate[index].value = index.toString();
        intermediate[index].label = item;
        return intermediate;
    }, []);
    return Opt;
}
//NOT WORKING
const Options = toOpt(getIngredients1());


let multiVal;


class Ingredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: Options
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(newValue: any) {
        console.group('Value Changed');
        console.log(newValue);
        console.groupEnd();
        multiVal = newValue;
    }

    render() {
        return(
            <div>Ingredients
                    <CreatableSelect
                        isMulti
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        onBlur={this.props.handleIngredients}
                    />
            </div>
        );
    }
}

export { Ingredient, multiVal }

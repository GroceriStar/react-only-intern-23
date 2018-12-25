import React, {
   Component
 } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';

import {
  getIngredients, getPlaceholder
} from "../../selectors/selector";


import { ReactSelectWrapper, toOpt } from '@groceristar/select-component';


// @TODO i assume toOpt should be updated, because it didn't fit to our gs-fetch model at this moment

// function toOpt(arr) {
//     let Opt= arr.reduce((intermediate, item, index) => {
//         intermediate[index]={};
//         intermediate[index].value = index.toString();
//         intermediate[index].label = item;
//         return intermediate;
//     }, []);
//     return Opt;
// }

// const Options = toOpt(getIngredients());
const Options = [];

console.log(getIngredients())

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
                {/* isMultynot works at wrapper..... be aware */}
                <CreatableSelect
                    isMulti
                    options={this.state.options}
                    onChange={this.handleOnChange}
                    onBlur={this.props.handleIngredients}
                />
                <ReactSelectWrapper
                  options={this.state.options}
                  onChange={this.handleOnChange}
                  onBlur={this.props.handleIngredients}
                />
            </div>
        );
    }
}

export { Ingredient, multiVal }

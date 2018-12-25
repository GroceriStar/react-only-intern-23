import React, {
   Component
 } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import {
  getAttribute, getPlaceholder
} from "../../selectors/selector";

import { ReactSelectWrapper, toOpt } from '@groceristar/select-component';

// function toOpt(arr) {
//     let Opt= arr.reduce((intermediate, item, index) => {
//         intermediate[index]={};
//         intermediate[index].value = index;
//         intermediate[index].label = item;
//         return intermediate;
//     }, []);
//     return Opt;
// }

const Options = toOpt(getAttribute('diets'));

let diet;

class Diets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
            options: Options
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
            <div>
              Diets
                <CreatableSelect
                    multi={false}
                    options={this.state.options}
                    onChange={this.handleOnChange}
                    value={this.state.value}
                    showNewOptionAtTop={true}
                    onBlur={this.props.handleDiet}
                />
                <ReactSelectWrapper
                  options={this.state.options}
                  onChange={this.handleOnChange}
                  value={this.state.value}

                  onBlur={this.props.handleDiet}
                />
            </div>
        );
    }
}

export { Diets, diet }

import React, {
   Component
 } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';

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

const Options = toOpt(data.getAllergies());

let allergy;

class Allergy extends Component {
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
        allergy = this.state.value;
        return(
            <div>Allergy
                    <CreatableSelect
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

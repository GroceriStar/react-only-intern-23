import React, {
   Component
 } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import {
  getAttribute, getPlaceholder
} from "../../selectors/selector";

// import data from '@groceristar/groceristar-fetch/search';

function toOpt(arr) {
    let Opt= arr.reduce((intermediate, item, index) => {
        intermediate[index]={};
        intermediate[index].value = index;
        intermediate[index].label = item;
        return intermediate;
    }, []);
    return Opt;
}

const Options = toOpt(getAttribute('holidays'));

let holidays;


class Holiday extends Component {
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
        holidays = this.state.multiValue;
        return(
            <div>Holidays
                    <CreatableSelect
                        multi={true}
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        value={this.state.multiValue}
                        showNewOptionAtTop={true}
                        onBlur={this.props.handleHoliday}
                    />
            </div>
        );
    }
}

export { Holiday, holidays }

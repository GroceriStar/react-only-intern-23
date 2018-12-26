import React, {
   Component
 } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';

import { ReactSelectWrapper, toOpt } from '@groceristar/select-component';

import {
  getAttribute, getPlaceholder
} from "../../selectors/selector";


// function toOpt(arr) {
//     let Opt= arr.reduce((intermediate, item, index) => {
//         intermediate[index]={};
//         intermediate[index].value = index;
//         intermediate[index].label = item;
//         return intermediate;
//     }, []);
//     return Opt;
// }

const Options = toOpt(getAttribute('courses'));

let course;

class Course extends Component {

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
        course = this.state.value;
        return(
            <div>Course
                <CreatableSelect
                    multi={false}
                    options={this.state.options}
                    onChange={this.handleOnChange}
                    value={this.state.value}
                    showNewOptionAtTop={true}
                    onBlur={this.props.handleCourse}
                />

                <ReactSelectWrapper
                  options={this.state.options}
                  onChange={this.handleOnChange}
                  value={this.state.value}

                  onBlur={this.props.handleCourse}
                />
            </div>
        );
    }
}

export { Course, course }

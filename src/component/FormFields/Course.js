import React, {
   Component
 } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

let course;

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
            options: [
                    { value: 'Appetizer', label: 'Appetizer'},
                    { value: 'S-C', label: 'Starter-Course'},
                    { value: 'M-C', label: 'Main-Course' },
                    { value: 'Dessert', label: 'Dessert'},
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
        course = this.state.value;
        return(
            <div>Course
                    <Select.Creatable
                        multi={false}
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        value={this.state.value}
                        showNewOptionAtTop={true}
                        onBlur={this.props.handleCourse}
                    />
            </div>
        );
    }
}

export { Course, course }

import React, {
   Component
 } from 'react';
import Select from 'react-select';

// import { GroupedElements } from '@groceristar/select-component';

let mealDays;



class MealDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiValue: [],
            options: [
                    { value: 'Mon', label: 'Monday' },
                    { value: 'Tue', label: 'Tuesday'},
                    { value: 'Wed', label: 'Wednesday'},
                    { value: 'Thu', label: 'Thursday'},
                    { value: 'Fri', label: 'Friday'},
                    { value: 'Sat', label: 'Saturday'},
                    { value: 'Sun', label: 'Sunday'},

            ]
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(value) {
        this.setState({
            multiValue: value
        });
    }

    render() {
        mealDays = this.state.multiValue;
        return(
            <div>Day of the week
                    <Select
                        isMulti
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        value={this.state.multiValue}
                        showNewOptionAtTop={true}
                        onBlur={this.props.handleDays}
                    />
            </div>
        );
    }
}

export { MealDay, mealDays }

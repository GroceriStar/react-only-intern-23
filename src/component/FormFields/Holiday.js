import React, {
   Component
 } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

let holidays;


class Holiday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiValue: [],
            options: [
                    { value: 'Halloween', label: 'Halloween\'s Day' },
                    { value: 'M-Day', label: 'Martin Luther King Jr. Day'},
                    { value: 'P-Day', label: 'Presidents\' Day'}
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
        holidays = this.state.multiValue;
        return(
            <div>Holidays
                    <Select.Creatable
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

import React, {
   Component
 } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import data from '@groceristar/groceristar-fetch/search';

let attribute;

function toOpt(arr) {
    let Opt= arr.reduce((intermediate, item, index) => {
        intermediate[index]={};
        intermediate[index].value = index;
        intermediate[index].label = item;
        return intermediate;
    }, []);
    return Opt;
}




class Attribute extends Component {
  constructor(props) {
        super(props);
        this.state = {
            value: undefined,
            options: []
        };

        this.handleOnChange = this.handleOnChange.bind(this);
        this.getAttributeData = this.getAttributeData.bind(this);
        this.getPlaceholder = this.getPlaceholder.bind(this);
    }

    handleOnChange(value) {
        this.setState({
            value
        });
    }
    
    
    
    getAttributeData() {
        if (this.props.type == 'Allergy') {
          return data.getAllergies();
        }
        if (this.props.type == 'Diet') {
          return data.getDiets();
        }
        if (this.props.type == 'Cuisine') {
          return data.getCuisines();
        }
        if (this.props.type == 'Course') {
          return data.getCourses();
        }
        if (this.props.type == 'Holiday') {
          return data.getHolidays();
        }
  }

    getPlaceholder() {
        if (this.props.type == 'Allergy') {
          return "Allergies";
        }
        if (this.props.type == 'Diet') {
          return "Specific Diets";
        }
        if (this.props.type == 'Cuisine') {
          return "Specific Cuisine ";
        }
        if (this.props.type == 'Course') {
          return "Course";
        }
        if (this.props.type == 'Holiday') {
          return "Holiday";
        }
  }
    componentWillMount() {
        const Options = toOpt(this.getAttributeData());
        this.setState({
          options        : Options
        })
    }
 

  render(){
    attribute = this.state.value;
    return (
        <div>{this.getPlaceholder()}
          <Select.Creatable
                        multi={false}
                        options={this.state.options}
                        onChange={this.handleOnChange}
                        value={this.state.value}
                        showNewOptionAtTop={true}
                        onBlur={this.props.handleAttribute}
          />
        </div>
    );
  }
}
export { Attribute, attribute }


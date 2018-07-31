import React, {
   Component
 } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';

import data from '@groceristar/groceristar-fetch/search';

let attribute;

function toOpt(arr) {
    let Opt
    if(typeof arr === 'object') {
        Opt = arr.reduce((intermediate, item, index) => {
        intermediate[index]={};
        intermediate[index].value = index.toString();
        intermediate[index].label = item;
        return intermediate;
    }, []);
    }
    return Opt;

}




class Attribute extends Component {
  constructor(props) {
        super(props);
        this.getPlaceholder = this.getPlaceholder.bind(this);
        this.loadOptions = this.loadOptions.bind(this);
    }

    handleChange = (newValue) => {
    console.group('Value Changed');
    console.log(newValue);
    attribute = newValue;
    console.groupEnd();
  };
  handleInputChange = (inputValue) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.groupEnd();
  }

    getPlaceholder() {
        if (this.props.type == 'Allergies') {
          return "Allergies";
        }
        if (this.props.type == 'Diets') {
          return "Specific Diets";
        }
        if (this.props.type == 'Cuisines') {
          return "Specific Cuisine ";
        }
        if (this.props.type == 'Courses') {
          return "Course";
        }
        if (this.props.type == 'Holidays') {
          return "Holiday";
        }
  }

    loadOptions() {
        if(this.props.type) {
            let optionsData = data.getAttribute(this.props.type.toLowerCase());
            const Options = toOpt(optionsData);
            return Options;
        }
       
    }
    
    
 

  render(){
      const Options = this.loadOptions();
    return (
        <div>{this.getPlaceholder()}
          <CreatableSelect
                isClearable
                onChange={this.handleChange}
                onInputChange={this.handleInputChange}
                onBlur={this.props.handleAttribute}
                options={Options}
          />
        </div>
    );
  }
}
export { Attribute, attribute }


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
//        this.getAttributeData = this.getAttributeData.bind(this);
        this.getPlaceholder = this.getPlaceholder.bind(this);
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

   
    
    
//    getAttributeData() {
//        if (this.props.type == 'Allergy') {
//          return data.getAllergies();
//        }
//        if (this.props.type == 'Diet') {
//          return data.getDiets();
//        }
//        if (this.props.type == 'Cuisine') {
//          return data.getCuisines();
//        }
//        if (this.props.type == 'Course') {
//          return data.getCourses();
//        }
//        if (this.props.type == 'Holiday') {
//          return data.getHolidays();
//        }
//  }

    getPlaceholder() {
        if (this.props.type == 'Allergy') {
          return "Allergies";
        }
        if (this.props.type == 'Diets') {
          return "Specific Diets";
        }
        if (this.props.type == 'Cuisine') {
          return "Specific Cuisine ";
        }
        if (this.props.type == 'Course') {
          return "Course";
        }
        if (this.props.type == 'Holidays') {
          return "Holiday";
        }
  }
    
    
 

  render(){
      const Options = toOpt(data.getAttribute(this.props.type.toLowerCase()));
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


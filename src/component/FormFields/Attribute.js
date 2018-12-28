import React, {
   Component
 } from 'react';
import CreatableSelect from 'react-select/lib/Creatable';

import { ReactSelectWrapper, toOpt } from '@groceristar/select-component';


import {
  getAttribute, getPlaceholder
} from "../../selectors/selector";

let attribute;


// function toOpt(arr) {
//     let Opt
//     if(typeof arr === 'object') {
//         Opt = arr.reduce((intermediate, item, index) => {
//         intermediate[index]={};
//         intermediate[index].value = index.toString();
//         intermediate[index].label = item;
//         return intermediate;
//     }, []);
//     }
//     return Opt;
// }




class Attribute extends Component {

  constructor(props) {
    super(props);
    // this.getAttributeData = this.getAttributeData.bind(this);
    // this.getPlaceholder = this.getPlaceholder.bind(this);
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
  };



  render(){


      // console.log(this.props.type)
      const { type } = this.props;
      console.log(getAttribute( type.toLowerCase() ))

    // NOT WORKING
    // const Options = toOpt(
    //   getAttribute(this.props.type ? this.props.type.toLowerCase() : undefined )
    // );
    const Options = [];
    return (
        <div>
          {getPlaceholder(type)}

          {/* we don't have isClearable option in our wrapper version. also we don't have onInput event as well */}
          <CreatableSelect
                isClearable
                onChange={this.handleChange}
                onInputChange={this.handleInputChange}
                onBlur={this.props.handleAttribute}
                options={Options}
          />


          <ReactSelectWrapper



            onChange={this.handleChange}

            onBlur={this.props.handleAttribute}
            options={Options}
          />
        </div>
    );
  }
}
export { Attribute, attribute }

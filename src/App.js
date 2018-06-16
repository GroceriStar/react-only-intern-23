import React, { Component } from 'react';
import { getMonthName } from './component/months';
import * as styleVars from './component/style_vars';
import { Calender } from './component/Calender';


class App extends Component {
        
  render() {
             
//            Get curreny date
            let today = new Date().getMonth();
    return (
        <div>
        <div style={{...styleVars.header, ...styleVars.defaultTextColor, height: '200px'}}>
            The month is {getMonthName(today)}
        </div>
        <Calender/>
        </div>
    );
  }
}

export default App;

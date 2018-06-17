import React, { Component } from 'react';
import * as styleVars from './style_vars';
import { Header } from './Header'


class DayChecker extends Component {
    getDayName(number) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
      }
    render() {
            let today = new Date().getDay();
            // If it is weekday
            if (today === 6 || today === 0) 
              return (<div style={{...styleVars.header, ...styleVars.defaultTextColor, height: '200px'}}>
                          <Header />
                           <h3>Today is {this.getDayName(today)} - You can watch TV all day today</h3>
                      </div>);
            
            // If it is weeken
            return (<div style={{...styleVars.header, ...styleVars.defaultTextColor, height: '200px'}}>
                            <Header />
                            <h3>Today is {this.getDayName(today)} - You should go to work today</h3>
                    </div>);
          }    

}


export { DayChecker }
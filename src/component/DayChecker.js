import React, { Component } from 'react';
import * as styleVars from '../data/style_vars';
import { Header } from './Header'

let today = new Date().getDay();

class DayChecker extends Component {
    constructor(props) {
        super(props);
        this.weekCheck = this.weekCheck.bind(this);
    }
    
    getDayName(number) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
      }
    
    weekCheck(dayNum, callback, otherCallback) {
    if (dayNum === 6 || dayNum === 0) {
        if(typeof callback === "function")
        return callback();
    }
    else {
        if(typeof otherCallback === "function")
        return otherCallback();
    }
}

    weekend = () => {return (<div style={{...styleVars.header, ...styleVars.defaultTextColor, height: '200px'}}>
                              <Header />
                               <h3>Today is {this.getDayName(today)} - You can watch TV all day today</h3>
                          </div>);
                        }

    weekday = () => {return (<div style={{...styleVars.header, ...styleVars.defaultTextColor, height: '200px'}}>
                                <Header />
                                <h3>Today is {this.getDayName(today)} - You should go to work today</h3>
                            </div>);
                        }

    render() {
            
        return(<div>
            {this.weekCheck(today, this.weekend, this.weekday)}
              </div>);
          }    

}


export { DayChecker }




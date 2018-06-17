import React, { Component } from 'react';
import * as styleVars from './style_vars';

let days = {0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat'};
let maxDaysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  //This is the array of maximum number of days in each month.
let today = new Date();
let displayDate = today.toDateString();
today.setDate(1);
let dayOfWeek = today.getDay();
let count = 0;

class Calender extends Component {
    
     calHeaderRender() {
            return Object.keys(days).map((index) => <th key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#232'}}>{days[index]}</th>)
            }

                                         
    calRender(x) {
            return Object.keys(days).map(index => {
                    if (count < maxDaysOfMonth[today.getMonth()]) {   //We will check if count exceeds the maximum number of days in that month
                     count++;
                     return <td key={x+index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{count}</td>
                                         }
                     else {
                     return null;
                                         }
             })}
                                         
    render() {
        return(
            <div>
               <h1>{displayDate}</h1>
                <table>
                        <tr>
                            {this.calHeaderRender()}
                        </tr>
                        <tr>
                            {Object.keys(days).map(index => {
                                if(index < dayOfWeek) {
                                    return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#bbb'}}></td>}
                                else {count++;
                                      return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{count}</td>}
                                })}
                        </tr>
                        <tr>
                            {this.calRender(7)}
                        </tr>
                        <tr>
                            {this.calRender(14)}
                        </tr>
                        <tr>
                            {this.calRender(21)}
                        </tr>
                        <tr>
                            {this.calRender(21)}
                        </tr>
                         <tr>
                            {this.calRender(28)}
                        </tr>

                </table>
            </div>
        )
    }
}

export { Calender }
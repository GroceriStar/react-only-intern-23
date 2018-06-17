import React, { Component } from 'react';
import * as styleVars from '../data/style_vars';
import { displayDate, dayOfWeek, today, getMonthName } from '../data/DateVars';
import days from '../data/days';
import maxDaysOfMonth from '../data/maxDaysOfMonth';

let daysCounter = 0;

class Calender extends Component {
    
     calHeaderRender() {
            return Object.keys(days).map((index) => <th key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#232'}}>{days[index]}</th>)
            }

                                         
    calRender(x) {
            return Object.keys(days).map(index => {
                    if (daysCounter < maxDaysOfMonth[today.getMonth()]) { //We will check if daysCounter exceeds the maximum number of days in that month
                     daysCounter++;
                     return <td key={x+index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{daysCounter}</td>
                                         }
                     else {
                     return null;
                                         }
             })}
         
    calRenderCheck() {
        return Object.keys(days).map(index => {
                                if(index < dayOfWeek) {
                                    return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#bbb'}}></td>
                                                }
                                else {daysCounter++;
                                      return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{daysCounter}</td>}
                                })
                }
                                         
    render() {
        return(
            <div>
               <h1>{displayDate}</h1>
                <table>
                        <tr>
                            {this.calHeaderRender()}
                        </tr>
                        <tr>
                            {this.calRenderCheck()}
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
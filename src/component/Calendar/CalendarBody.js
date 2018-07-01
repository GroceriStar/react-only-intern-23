import React, { Component } from 'react';
import { days } from '../../data/days';
import * as styleVars from '../../data/style_vars';
import maxDaysOfMonth from '../../data/maxDaysOfMonth';


let daysCounter;
const daysCounterReset = function() {
    daysCounter = 0;
}

class CalendarBody extends Component {
    
    calRenderCheck() {
        daysCounterReset();
        return Object.keys(days).map(index => {
            if(index < this.props.firstDay) {
            return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#bbb'}}>
            </td>
            }
            else {daysCounter++;
                  return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777', cursor: 'pointer'}}>
                         {daysCounter}
                         </td>
             }
        })
    }
    
    calRender(x) {
        return Object.keys(days).map(index => {
            if (daysCounter < maxDaysOfMonth[this.props.month]) {
             daysCounter++;
             return (
                <td key={x+index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777', cursor: 'pointer'}}>
                     {daysCounter}
                </td>
             );
                                 }
             else {
             return null;
                }
            }
        )
    }
    
    
    render() {
        return(
            <tbody>
               <tr>
                    {this.calRenderCheck()}
                </tr>
                    {[7, 14, 21, 28, 35].map(index => {
                        return (
                            <tr key={index}>
                                {this.calRender(index)}
                            </tr>
                        );
                    })
                }
            </tbody>
        );
    }
}




export { CalendarBody, daysCounter, daysCounterReset }
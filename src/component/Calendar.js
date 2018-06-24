import React, { Component } from 'react';
import * as styleVars from '../data/style_vars';
import { days } from '../data/days';
import {
  displayDate,
  today
} from '../data/DateVars';

import months         from '../data/months';
import maxDaysOfMonth from '../data/maxDaysOfMonth';

let daysCounter = 0;

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: today.getMonth(),
            firstDay: today.getDay()
        }
        this.changeMonth = this.changeMonth.bind(this);
    }

    changeMonth(event) {
        daysCounter = 0;
        if(event.target.innerText === 'Next Month') {
                if(this.state.month === 11) {
                today.setMonth(0);
                this.setState({
                   month: 0
                });
            } 
            else {
                today.setMonth(this.state.month + 1);
                this.setState({
                  month: this.state.month + 1
                });
            }
        }
        
        if(event.target.innerText === 'Previous Month') {
            if(this.state.month === 0) {
                today.setMonth(11);
                this.setState({
                    month: 11
                });
            } 
            else {
                today.setMonth(this.state.month - 1);
                this.setState({
                  month: this.state.month - 1
                });
            }
        }
        
        this.setState({
            firstDay: today.getDay()
        });
    }

    

    calHeaderRender() {
      return Object.keys(days).map((index) => {return(
                   <th key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#232'}}>
                       {days[index]}
                   </th>
                );
            }
        )
    }


    calRender(x) {
        return Object.keys(days).map(index => {
            if (daysCounter < maxDaysOfMonth[this.state.month]) {
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

    calRenderCheck() {
        return Object.keys(days).map(index => {
            if(index < this.state.firstDay) {
                return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#bbb'}}>
                    </td>
                }
            else {daysCounter++;
                  return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777', cursor: 'pointer'}}>
                         {daysCounter}
                         </td>
                 }
            }
        )
    }

    render() {
        return(
            <div>
               <h1>{displayDate}</h1>
                <div>
                    <button onClick={this.changeMonth}>Previous Month</button>
                    <h2>{months[this.state.month]}</h2>
                    <button onClick={this.changeMonth}>Next Month</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            {this.calHeaderRender()}
                        </tr>
                    </thead>
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
                                }
                            )
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}

export { Calendar }

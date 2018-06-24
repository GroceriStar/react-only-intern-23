import React, { Component } from 'react';
import * as styleVars from '../data/style_vars';
import {
  displayDate,
  dayOfWeek,
  today
} from '../data/DateVars';

import days           from '../data/days';
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
        this.incrementMonth = this.incrementMonth.bind(this);
        this.decrementMonth = this.decrementMonth.bind(this);
    }

    incrementMonth() {
        daysCounter = 0;
        if(this.state.month === 11) {
            today.setMonth(0);
            this.setState({
               month: 0,
                firstDay: today.getDay()
            });
        } else {
            today.setMonth(this.state.month + 1);
            this.setState({
              month: this.state.month + 1,
              firstDay: today.getDay()
            });
        }

    }

    decrementMonth() {
        daysCounter = 0;
        if(this.state.month === 0) {
            today.setMonth(11);
            this.setState({
                month: 11,
                firstDay: today.getDay()
            });
        } else {
            today.setMonth(this.state.month - 1);
            this.setState({
              month: this.state.month - 1,
              firstDay: today.getDay()
            });
        }


    }

    calHeaderRender() {
      return Object.keys(days).map((index) => <th key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#232'}}>{days[index]}</th>)
    }


    calRender(x) {
            return Object.keys(days).map(index => {
                    if (daysCounter < maxDaysOfMonth[this.state.month]) { //We will check if daysCounter exceeds the maximum number of days in that month
                     daysCounter++;
                     return <td key={x+index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777', cursor: 'pointer'}}>{daysCounter}</td>
                                         }
                     else {
                     return null;
                                         }
             })}

    calRenderCheck() {
        return Object.keys(days).map(index => {
                                if(index < this.state.firstDay) {
                                    return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#bbb'}}></td>
                                                }
                                else {daysCounter++;
                                      return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777', cursor: 'pointer'}}>{daysCounter}</td>}
                                })
                }

    render() {
        return(
            <div>
               <h1>{displayDate}</h1>
                <div><button onClick={this.decrementMonth}>Previous Month</button><h2>{months[this.state.month]}</h2><button onClick={this.incrementMonth}>Next Month</button></div>
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
                         </tbody>

                </table>
            </div>
        )
    }
}

export { Calendar }

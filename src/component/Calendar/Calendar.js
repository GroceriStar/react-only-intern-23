import React, { Component } from 'react';
import { CalendarHeader } from './CalendarHeader'
import { CalendarBody, daysCounterReset } from './CalendarBody';



import {
  displayDate,
  today
} from '../../data/DateVars';

import months         from '../../data/months';


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
        daysCounterReset();
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
                    <CalendarHeader />
                   <CalendarBody month={this.state.month} firstDay={this.state.firstDay}/>
                </table>
            </div>
        )
    }
}

export { Calendar }

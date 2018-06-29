import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './WorkSched.css';
import { weekdayName } from '../../data/days';
import { ColumnRender } from './DayModel';
import {  defaultBlockHeight } from '../../data/style_vars'


class TimeLine extends Component {
    
    render() {
        return (
                <div className='timedHeight'>
                    <ListGroup>
                        <ListGroupItem>9:00</ListGroupItem>
                        <ListGroupItem>10:00</ListGroupItem>
                        <ListGroupItem>11:00</ListGroupItem>
                        <ListGroupItem>12:00</ListGroupItem>
                        <ListGroupItem>13:00</ListGroupItem>
                        <ListGroupItem>14:00</ListGroupItem>
                        <ListGroupItem>15:00</ListGroupItem>
                        <ListGroupItem>16:00</ListGroupItem>
                        <ListGroupItem>17:00</ListGroupItem>
                        <ListGroupItem>18:00</ListGroupItem>
                    </ListGroup>
                </div>
        );
    }
}


class ScheduleRender extends Component {
    render() {
        return(
            weekdayName.map((day, index) => 
                <div key={index} className='data-class'>
                    <ListGroup>
                        <ListGroupItem style={defaultBlockHeight}>{day}</ListGroupItem>
                        <ColumnRender key={index} index={index} />
                    </ListGroup>
                </div>
                )
            );
        }
}

export { ScheduleRender, TimeLine }
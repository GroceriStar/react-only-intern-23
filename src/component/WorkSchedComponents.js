import React, { Component } from 'react';
import {  ListGroup, ListGroupItem } from 'reactstrap';
import { DataModalAbs, DataModalRowing, DataModalYoga, DataModalRestorive } from '../component/Modals'


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


class Day extends Component {
        
    render() { 
        if(this.props.dayProp === 'Monday') {
            return(
                <div>
                    <ListGroup>
                        <ListGroupItem>Monday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <DataModalAbs heightInd='oneHour abs' timeRange='9:30-10:30' />
                        <ListGroupItem></ListGroupItem>
                        <DataModalRowing heightInd='oneHourHalf rowing' timeRange='11:00-12:30' />
                        <ListGroupItem ></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <DataModalYoga heightInd='oneHourQuarter yoga' timeRange='14:00-15:15' />
                        <ListGroupItem className='short0'></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                   </div>
            );
        }
        
        if(this.props.dayProp === 'Tuesday') {
               return(
                <div>
                    <ListGroup>
                        <ListGroupItem>Tuesday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <DataModalRowing heightInd='oneHour rowing' timeRange='10:00-11:00' />
                        <ListGroupItem></ListGroupItem>
                        <DataModalRestorive heightInd='oneHourHalf restorive' timeRange='11:30-13:00' />
                        <ListGroupItem></ListGroupItem>
                        <DataModalAbs heightInd='oneHourHalf abs' timeRange='13:30-15:00' />
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='short0'></ListGroupItem>
                        <DataModalYoga heightInd='oneHour yoga' timeRange='15:45-16:45' />
                        <ListGroupItem className='short0'></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                </div>
            ); 
        }
        
        if(this.props.dayProp === 'Wednesday') {
                return(
                <div>
                    <ListGroup>
                        <ListGroupItem>Wednesday</ListGroupItem>
                        <DataModalRowing heightInd='oneHourQuarter rowing' timeRange='09:00-10:15' />
                        <ListGroupItem className='short0'></ListGroupItem>
                        <ListGroupItem className='short0'></ListGroupItem>
                        <DataModalYoga heightInd='oneHour yoga' timeRange='10:45-11:45' />
                        <ListGroupItem className='short0'></ListGroupItem>
                        <DataModalRowing heightInd='twoHourToQuarter rowing' timeRange='12:00-13:45' />
                        <DataModalYoga heightInd='oneHourQuarter yoga' timeRange='13:40-15:00' />
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>

                </div>
            );
        }
        
        if(this.props.dayProp === 'Thursday') {
                return(
                <div>
                    <ListGroup>
                        <ListGroupItem>Thursday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <DataModalAbs heightInd='oneHour abs' timeRange='09:30-10:30' />
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <DataModalRestorive heightInd='twoHourToQuarter restorive' timeRange='12:00-13:45' />
                        <ListGroupItem className='short0'></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <DataModalAbs heightInd='oneHour abs' timeRange='15:30-16:30' />
                        <ListGroupItem></ListGroupItem>
                        <DataModalRowing heightInd='oneHourHalf rowing' timeRange='17:00-18:30' />
                    </ListGroup>

                </div>
            );
        }
        
        if(this.props.dayProp === 'Friday') {
                return(
                <div>
                     <ListGroup>
                        <ListGroupItem>Friday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <DataModalRowing heightInd='oneHour rowing' timeRange='10:00-11:00' />
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <DataModalAbs heightInd='oneHourHalf abs' timeRange='12:30-14:00' />
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='short0'></ListGroupItem>
                        <DataModalYoga heightInd='oneHour yoga' timeRange='15:45-16:45' />
                        <ListGroupItem className='short0'></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>

                </div>
            );
        }
    }
}


export { TimeLine, Day }
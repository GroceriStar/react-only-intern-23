import React, { Component } from 'react';
import { Table, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './WorkSched.css';

let days = {
            0: 'Mon',
            1: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri'
        }

class WorkSched extends Component {
    
//{/*    calHeaderRender() {
//            return Object.keys(days).map((index) => <th key={index}>{days[index]}</th>)
//            }   */}
    
    render() {
        return(
            <div>
            {/*
                <div className='some'>
                <Table bordered>
                    <thead>
                    <tr>{this.calHeaderRender()}</tr>
                    </thead>
                </Table>
               </div> */}
                    <Container>
                    <Row>
                <div class='timeline'>
           <ListGroup>
                        <ListGroupItem>9:00</ListGroupItem>
                        <ListGroupItem>9:30</ListGroupItem>
                        <ListGroupItem>10:00</ListGroupItem>
                        <ListGroupItem>10:30</ListGroupItem>
                        <ListGroupItem>11:00</ListGroupItem>
                        <ListGroupItem>11:30</ListGroupItem>
                        <ListGroupItem>12:00</ListGroupItem>
                        <ListGroupItem>12:30</ListGroupItem>
                        <ListGroupItem>13:00</ListGroupItem>
                        <ListGroupItem>13:30</ListGroupItem>
                        <ListGroupItem>14:00</ListGroupItem>
                        <ListGroupItem>14:30</ListGroupItem>
                        <ListGroupItem>15:00</ListGroupItem>
                        <ListGroupItem>15:30</ListGroupItem>
                        <ListGroupItem>16:00</ListGroupItem>
                        <ListGroupItem>16:30</ListGroupItem>
                        <ListGroupItem>17:00</ListGroupItem>
                        <ListGroupItem>17:30</ListGroupItem>
                        <ListGroupItem>18:00</ListGroupItem>
                    </ListGroup>
                </div>
                <div class='data-class'>
                    <ListGroup>
                        <ListGroupItem>Monday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem color='success' className='oneHour'><div>9:30-10:30</div>Abs Circuit</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHourHalf'><div>11:00-12:30</div>Rowing Workout</ListGroupItem>
                        <ListGroupItem ></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHourQuarter'><div>14:00-15:15</div>Yoga Level 1</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                </div>
                <div class='data-class'>
                    <ListGroup>
                       <ListGroupItem>Tuesday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHour'><div>10:00-11:00</div>Rowing Workout</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHourHalf'><div>11:30-13:00</div>Restoration Yoga</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHourHalf'><div>13:30-15:00</div>Abs Circuit</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHour'><div>15:45-16:45</div>Yoga Level 1</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                </div>
                <div class='data-class'>
                           <ListGroup>
                       <ListGroupItem>Wednesday</ListGroupItem>
                        <ListGroupItem className='oneHourQuarter'><div>09:00-10:15</div>Restorative Yoga</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHour'><div>10:45-11:45</div>Yoga Level 1</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='twoHourToQuarter'><div>12:00-13:45</div>Rowing Workout</ListGroupItem>
                        <ListGroupItem className='oneHourQuarter'><div>13:45-15:00</div>Yoga Level 1</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                </div>
                <div class='data-class'>
                           <ListGroup>
                       <ListGroupItem>Thursday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHour'><div>09:30-10:30</div>Abs Circuit</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='twoHourToQuarter'><div>12:00-13:45</div>Restorive Yoga</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHour'><div>15:30-16:30</div>Abs Circuit</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHourHalf'><div>17:00-18:30</div>Rowing Workout</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                </div>
                <div class='data-class'>
                     <ListGroup>
                       <ListGroupItem>Friday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHour'><div>10:00-11:00</div>Rowing Workout</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem className='oneHourHalf'><div>12:30-14:00</div>Abs Circuit</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem><div className='oneHour'>15:45-16:45</div>Yoga Level 1</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                    </ListGroup>
                </div>
                </Row>
                </Container>
            </div>
        );
    }
}
    
export { WorkSched }
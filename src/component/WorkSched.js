import React, { Component } from 'react';
import { Table, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './WorkSched.css';


class WorkSched extends Component {
            render() {
                return(
                    <div>
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
                                        <ListGroupItem className='oneHour abs'><div>9:30-10:30</div>Abs Circuit</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='oneHourHalf rowing'><div>11:00-12:30</div>Rowing Workout</ListGroupItem>
                                        <ListGroupItem ></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='oneHourQuarter yoga'><div>14:00-15:15</div>Yoga Level 1</ListGroupItem>
                                        <ListGroupItem className='short0'></ListGroupItem>
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
                                        <ListGroupItem className='oneHour rowing'><div>10:00-11:00</div>Rowing Workout</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='oneHourHalf restorive'><div>11:30-13:00</div>Restoration Yoga</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='oneHourHalf abs'><div>13:30-15:00</div>Abs Circuit</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='short0'></ListGroupItem>
                                        <ListGroupItem className='oneHour yoga'><div>15:45-16:45</div>Yoga Level 1</ListGroupItem>
                                        <ListGroupItem className='short0'></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                    </ListGroup>
                                </div>
                                <div class='data-class'>
                                   <ListGroup>
                                       <ListGroupItem>Wednesday</ListGroupItem>
                                        <ListGroupItem className='oneHourQuarter restorive'><div>09:00-10:15</div>Restorative Yoga</ListGroupItem>
                                        <ListGroupItem className='short0'></ListGroupItem>
                                        <ListGroupItem className='short0'></ListGroupItem>
                                        <ListGroupItem className='oneHour yoga'><div>10:45-11:45</div>Yoga Level 1</ListGroupItem>
                                        <ListGroupItem className='short0'></ListGroupItem>
                                        <ListGroupItem className='twoHourToQuarter rowing'><div>12:00-13:45</div>Rowing Workout</ListGroupItem>
                                        <ListGroupItem className='oneHourQuarter yoga'><div>13:45-15:00</div>Yoga Level 1</ListGroupItem>
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
                                        <ListGroupItem className='oneHour abs'><div>09:30-10:30</div>Abs Circuit</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='twoHourToQuarter restorive'><div>12:00-13:45</div>Restorive Yoga</ListGroupItem>
                                        <ListGroupItem className='short0'></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='oneHour abs'><div>15:30-16:30</div>Abs Circuit</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='oneHourHalf rowing'><div>17:00-18:30</div>Rowing Workout</ListGroupItem>
                                    </ListGroup>
                                </div>
                                <div class='data-class'>
                                     <ListGroup>
                                       <ListGroupItem>Friday</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='oneHour rowing'><div>10:00-11:00</div>Rowing Workout</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='oneHourHalf abs'><div>12:30-14:00</div>Abs Circuit</ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
                                        <ListGroupItem className='short0'></ListGroupItem>
                                        <ListGroupItem className='oneHour yoga'><div>15:45-16:45</div>Yoga Level 1</ListGroupItem>
                                        <ListGroupItem className='short0'></ListGroupItem>
                                        <ListGroupItem></ListGroupItem>
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
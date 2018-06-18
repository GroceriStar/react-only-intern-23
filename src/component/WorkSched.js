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
                        <ListGroupItem color='success' className='testClass'>Abs Circuit</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem ></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
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
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
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
                       <ListGroupItem>Wednesday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
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
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
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
                       <ListGroupItem>Friday</ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
                        <ListGroupItem></ListGroupItem>
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
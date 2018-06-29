import React, { Component } from 'react';
import { Container, Row, ListGroup, ListGroupItem } from 'reactstrap';
import './WorkSched.css';
import { TimeLine, Day } from './WorkSchedComponents';
import { weekdayName } from '../../data/days'
import { ColumnRender } from './DayModel'




class WorkSched extends Component {
            render() {
              return(
                    <div>
                        <div className='header'>
                        <h1>Schedule</h1>
                        </div>
                        <Container>
                            <Row>
                                <div className='timeline'><TimeLine /></div>
                    {weekdayName.map((day, index) => 
                          <div key={index} className='data-class'>
                            <ListGroup>
                            <ListGroupItem style={{height: '50px'}}>{day}</ListGroupItem>
                            <ColumnRender key={index} index={index} />
                            </ListGroup>
                          </div>)}
                            </Row>
                        </Container>
                    </div>
                );
        }
}
    
export { WorkSched }
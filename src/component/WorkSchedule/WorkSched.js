import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './WorkSched.css';
import { ScheduleRender, TimeLine } from './Schedule'

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
                                <ScheduleRender />
                            </Row>
                        </Container>
                    </div>
                );
        }
}
    
export { WorkSched }
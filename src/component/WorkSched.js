import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import './WorkSched.css';
import { TimeLine, Monday, Tuesday, Wednesday, Thursday, Friday } from '../data/WorkSchedComponents';


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
                                <div className='data-class'><Monday /></div>
                                <div className='data-class'><Tuesday /></div>
                                <div className='data-class'><Wednesday /></div>
                                <div className='data-class'><Thursday /></div>
                                <div className='data-class'><Friday /></div>
                            </Row>
                        </Container>
                    </div>
                );
        }
}
    
export { WorkSched }
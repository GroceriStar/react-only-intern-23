import React, { Component } from 'react';
import { Table, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './WorkSched.css';
import { timeLine, Monday, Tuesday, Wednesday, Thursday, Friday } from '../data/WorkSchedData';


class WorkSched extends Component {
            render() {
                return(
                    <div>
                        <Container>
                            <Row>
                                <div className='timeline'>{timeLine()}</div>
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
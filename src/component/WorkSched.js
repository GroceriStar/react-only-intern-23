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
                                <div class='timeline'>{timeLine()}</div>
                                <div class='data-class'><Monday /></div>
                                <div class='data-class'><Tuesday /></div>
                                <div class='data-class'><Wednesday /></div>
                                <div class='data-class'><Thursday /></div>
                                <div class='data-class'><Friday /></div>
                            </Row>
                        </Container>
                    </div>
                );
        }
}
    
export { WorkSched }
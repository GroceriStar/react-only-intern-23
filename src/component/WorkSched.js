import React, { Component } from 'react';
import { Table } from 'reactstrap';
import './WorkSched.css';

let days = {
            0: 'Mon',
            1: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri'
        }

class WorkSched extends Component {
    
    calHeaderRender() {
            return Object.keys(days).map((index) => <th key={index}>{days[index]}</th>)
            }
    
    render() {
        return(
            <div>
            <Table bordered>
                <thead>
                <tr>{this.calHeaderRender()}</tr>
                </thead>
            </Table>
            </div>
        );
    }
}
    
export { WorkSched }
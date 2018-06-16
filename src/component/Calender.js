import React, { Component } from 'react';

class Calender extends Component {
    render() {
         let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        return(
            <table>
                <thead>
                    <tr>
                        {days.map(day => <th key={day} style={{width: '100px', backgroundColor: 'blue'}}>{day}</th>)}
                    </tr>
                </thead>
            </table>
            
        )
    }
}

export { Calender }
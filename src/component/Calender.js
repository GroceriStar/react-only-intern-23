import React, { Component } from 'react';
import * as styleVars from './style_vars';
class Calender extends Component {
    render() {
         let days = {0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat'};

        return(
            <table>
                <thead>
                    <tr>
                        {Object.keys(days).map((index) => <th key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#232'}}>{days[index]}</th>)}
                    </tr>
                    <tr>
                        {}
                    </tr>
                </thead>
            </table>
            
        )
    }
}

export { Calender }
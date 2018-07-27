import React, { Component } from 'react';
import { days } from '../../data/days';
import * as styleVars from '../../data/style_vars';


class CalendarHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    {Object.keys(days).map((index) => {return(
                       <th key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#232'}}>
                           {days[index]}
                       </th>
                    );
                })}
                </tr>
            </thead>
       );
    }
      
}

export { CalendarHeader }
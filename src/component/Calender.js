import React, { Component } from 'react';
import * as styleVars from './style_vars';


class Calender extends Component {
    render() {
        let days = {0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat'};
        let today = new Date();
        today.setDate(1);
        let dayOfWeek = today.getDay();
        var count = 0;
        
        return(
            <table>
                    <tr>
                        {Object.keys(days).map((index) => <th key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#232'}}>{days[index]}</th>)}
                    </tr>
                    <tr>
                        {Object.keys(days).map(index => {
                                                if(index < dayOfWeek) {
                                                    return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#bbb'}}></td>}
                                                else {count++;
                                                      return <td key={index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{count}</td>}
                                                })}
                    </tr>
                    <tr>
                    {Object.keys(days).map(index => {count++;
                                                     return <td key={7+index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{count}</td>})}
                    </tr>
                    <tr>
                    {Object.keys(days).map(index => {count++;
                                                     return <td key={14+index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{count}</td>})}
                    </tr>
                    <tr>
                    {Object.keys(days).map(index => {count++;
                                                     return <td key={21+index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{count}</td>})}
                    </tr>
                    <tr>
                    {Object.keys(days).map(index => {count++;
                                                     return <td key={7+index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{count}</td>})}
                    </tr>
                
            </table>
            
        )
    }
}

export { Calender }
import React, { Component } from 'react';
import * as styleVars from './style_vars';

let days = {0: 'Sun', 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat'};
let today = new Date();
today.setDate(1);
let dayOfWeek = today.getDay();
let count = 0;

class Calender extends Component {      
    calRender(x) {
            return Object.keys(days).map(index => {count++;
                     return <td key={x+index} style={{...styleVars.defaultTextColor, ...styleVars.blockSize, backgroundColor: '#777'}}>{count}</td>})}
                                         
    render() {
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
                        {this.calRender(7)}
                    </tr>
                    <tr>
                        {this.calRender(14)}
                    </tr>
                    <tr>
                        {this.calRender(21)}
                    </tr>
                    <tr>
                        {this.calRender(21)}
                    </tr>
                
            </table>
            
        )
    }
}

export { Calender }
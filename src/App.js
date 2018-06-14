import React, { Component } from 'react';


let header = {
    backgroundColor: '#222'
}
let defaultTextColor = {
    color: '#fff'
} 


class App extends Component {
        getMonthName = (number) => {
            let monthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'October', 'Nov', 'Dec'];

            return monthArray[number];
        
    }
        
  render() {
//            Get curreny date
            let today = new Date().getMonth();
    return (
        <div style={{...header, ...defaultTextColor, height: '200px'}}>
            The month is {this.getMonthName(today)}
        </div>              
    );
  }
}

export default App;

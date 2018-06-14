import React, { Component } from 'react';


let header = {
    backgroundColor: '#222'
}
let defaultTextColor = '#fff';


class App extends Component {
  render() {
    return (
        <div style={{...header, height: '200px'}}>
      <div style={{color: defaultTextColor}}>Just the initial file</div>
        </div>
    );
  }
}

export default App;

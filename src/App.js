import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { Home } from './component/Home'
import { WorkSched } from './component/WorkSchedule/WorkSched';


class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div>
                <h2>You can choose where to go from here</h2>
                <ul>
                    <button><Link to='/Home'>Home</Link></button>
                    <button><Link to='/Cal'>Calendar</Link></button>
                </ul>
                <hr/>
        
                <Switch>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Cal' component={WorkSched} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;

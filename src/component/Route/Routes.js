import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { Home } from '../Home'
import { Home2 } from '../Home2'
import { WorkSched } from '../WorkSchedule/WorkSched';

// import data from '@groceristar/groceristar-fetch/groceristar';

class AppRoute extends Component {

  render() {

    // console.log(data.getIngredients());
    // console.log(data.getGrocery());
    // console.log(data.getUsers());
    // console.log(data.getDepartments());
    // console.log(data.getAllDepartments());
    // console.log(data.getAllIngredientsByOneDepartment('Fresh vegetables'));

    return (
        <BrowserRouter>
            <div>
                <h2>You can choose where to go from here</h2>
                <ul>
                    <button><Link to='/Home'>Home</Link></button>
                    <button><Link to='/Home2'>Home</Link></button>
                    <button><Link to='/Cal'>Calendar</Link></button>
                    <button><Link to='/Recipes'>Recipes</Link></button>
                    <button><Link to='/Recipe/:3'>Recipe</Link></button>
                </ul>
                <hr/>
                <Switch>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Home2' component={Home2} />
                    <Route exact path='/Cal' component={WorkSched} />
                    <Route exact path='/Recipes' component={Recipes} />
                    <Route exact path='/Recipe/:id' component={Recipe} />
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

const Recipe = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const Recipes = () => (
  <div>
    <h3>Recipes component sample</h3>
  </div>
);


export { AppRoute }

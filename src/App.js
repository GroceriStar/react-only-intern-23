import React, { 
  Component
} from 'react';
import { AppRoute } from './component/Route/Routes';


class App extends Component {

  render() {
    return (
        <AppRoute />
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

export default App;

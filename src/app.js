import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MainPage from './components/MainPage';
import NamePage from './components/NamePage';
import TrinketPage from './components/TrinketPage';
import CharPage from './components/CharPage';
import ItemPage from './components/ItemPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={MainPage} />
          <Route path="/name" component={NamePage} />
          <Route path="/trinket" component={TrinketPage} />
          <Route path="/char" component={CharPage} />
          <Route path="/items" component={ItemPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
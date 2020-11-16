import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Componets/Header'
import India from './Componets/India'
import World from './Componets/World'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <India />
            </Route>
            <Route exact path="/india">
              <India />
            </Route>
            <Route exact path="/world">
              <World />
            </Route>
          </Switch>
        </Router>
      </div>
    );

  }
}

export default App;

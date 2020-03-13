import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './todos/Dashboard';
import { Router, Route, Switch } from 'react-router-dom'; // added // added
import Header from './layout/Header'; // added
import { Provider } from 'react-redux'; // added
import store from '../store'; // added
import history from '../history'; // added
import TodoDelete from './todos/TodoDelete'; // added
class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <Router history={history}>
          <Header />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/delete/:id' component={TodoDelete} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
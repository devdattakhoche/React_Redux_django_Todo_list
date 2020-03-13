import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './todos/Dashboard'; // added
import Header from './layout/Header'; // added
import { Provider } from 'react-redux'; // added
import store from '../store'; // added
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Header /> 
        <Dashboard />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
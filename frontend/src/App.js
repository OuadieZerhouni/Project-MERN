import './App.css';
import React from 'react';
import RegisterForm from './Controllers/RegisterForm';
//import route
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My App</h1>
        <RegisterForm />
      </div>
    );
  }
}
export default App;

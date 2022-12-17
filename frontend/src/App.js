import './App.css';
import React from 'react';
import RegisterForm from './Auth/RegisterForm';

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

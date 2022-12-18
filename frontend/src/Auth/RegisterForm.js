import React from 'react';
import axios from 'axios';

class RegisterForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios.post('/auth/register', { email, password })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);

      });
  }
   
  handleClick = (event) => {
      axios.get('/auth/google')
      .then((response) => {
        console.log(response.data);
      }
      )
    };
  
  render() {
    return (
      <form /*onSubmit={this.handleSubmit}*/ action="http://localhost:3000/auth/google" method="get">
        {/* <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <br /> */}
        <button type="submit">Register</button>
        {/* <button type="button" onClick={this.handleClick}>Google</button> */}
      </form>
    );
  }
}

export default RegisterForm;
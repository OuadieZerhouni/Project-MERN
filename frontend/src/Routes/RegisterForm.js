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
     <div>
        <a href="http://localhost:3000/auth/google"><button type="button"><img src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png" alt="Sign in " />
          Login With Google</button></a>
      </div>
    );
  }
}

export default RegisterForm;
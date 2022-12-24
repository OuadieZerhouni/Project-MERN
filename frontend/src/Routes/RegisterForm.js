import React from 'react';
import axios from 'axios';

function RegisterForm (){
    return (
     <div>
        <a href="http://localhost:3000/auth/google"><button type="button"><img src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png" alt="Sign in " />
          Login With Google</button></a>
      </div>
    );
  }


export default RegisterForm;
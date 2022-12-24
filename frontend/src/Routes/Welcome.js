//welcome page with logging link to /register

import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
    render() {
        return (
        <div>
            <h1>Welcome</h1>
            <Link to="/register"><button type="button">Register</button></Link>
        </div>
        );
    }
    }

export default Welcome;
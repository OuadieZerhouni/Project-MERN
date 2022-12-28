//Dasshboard with button to go /Meeting
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsersList from '../Component/Users';


class DashBoard extends React.Component {
   
     
   
    
    render(){
        return (
        <div>
            <h1>DashBoard</h1>
            <UsersList />
            <Link to="/Meet"><button type="button">Video Call</button></Link>
        </div>
        );
    }
    }

export default DashBoard;

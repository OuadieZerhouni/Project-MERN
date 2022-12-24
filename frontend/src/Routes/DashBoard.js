//Dasshboard with button to go /Meeting
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DashBoard extends React.Component {
   
     
    handleClick = (event) => {
        axios.get('/meeting')
        .then((response) => {
            console.log(response.data);
        })};
    
    render(){
        return (
        <div>
            <h1>DashBoard</h1>
            <Link to="/Meeting"><button type="button">Meeting</button></Link>
        </div>
        );
    }
    }

export default DashBoard;

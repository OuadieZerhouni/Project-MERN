//Dasshboard with button to go /Meeting
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UsersList from '../API/Users';


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
            <UsersList />
        </div>
        );
    }
    }

export default DashBoard;

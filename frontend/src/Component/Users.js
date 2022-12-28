import React from 'react';
import axios from 'axios';

class UsersList extends React.Component {
  state = {
    users: []
  }
  MClick = (event) => {
    axios.get('/meeting')
        .then((response) => {
            console.log(response.data);
        })};
  componentDidMount() {
    axios.get('http://localhost:3000/api/database/users')
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Users List</h1>
        <ul>
            {this.state.users.map(({ _id, name }) => (
  <li key={_id}>{name.givenName} 
  </li>
))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
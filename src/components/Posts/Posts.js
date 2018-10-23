import React, { Component } from 'react'
import axios from 'axios';
import { throws } from 'assert';

class Posts extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loaded: false
    }

    this.loadData = this.loadData.bind(this);
  }

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const users = res.data;
  //       this.setState({ 
  //         users: users,
  //         loaded: true });
  //     })
  // }

  loadData = async () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const users = res.data;
      this.setState({ 
        users: users,
        loaded: true });
    })
  }

  render() {
    const users = this.state.users;
    const usersList = users.length ? (
      users.map( user => {
        return (<li key={user.id} className="collection-item">{user.name}</li>)
      })
    ) : (
      <li className="collection-item">No users to show</li>
    );

    return (
      <div className="row">
      <div className="col s12 m8 offset-m2">
        <h2>Basic get request</h2>
        <button className="btn waves-effect waves-light pink darken-3" onClick={ this.loadData }>get users</button>
        <ul className="collection">
          {usersList}
        </ul>
        </div>
      </div>
    )
  }
}

export default Posts
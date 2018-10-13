import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateUser extends Component {
  
  static propTypes = {
    users: PropTypes.array.isRequired,
    updateUsers: PropTypes.func.isRequired,
  }

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    numGames: 0
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.userExists()) {
    	this.props.updateUsers(this.state);      
      	this.setState(thisState => ({
          firstName: '',
          lastName: '',
          userName: '',
          games: 0
        }));
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState(() => ({
      [name]: value 
    }))
  }

  isValid = () => {
    const user = this.state;
    return Object.keys(user).every(function (key) {
      return !!String(user[key]).trim();
    });
  }

  userExists = () => {
    const users = this.props.users;
    const userExists = users.filter(user => (user.userName === this.state.userName));
    return (this.isValid()) ? userExists.length > 0 : false;
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="hidden" htmlFor="firstName">First Name</label>
          <input 
              id="firstName"  
              type="text" 
              name="firstName" 
    		  placeholder="First Name" 
              value={this.state.firstName} 
              onChange={this.handleChange} />

          <label className="hidden" htmlFor="lastName">Last Name</label>
          <input 
              id="lastName" 
              type="text" 
              name="lastName" 
			  placeholder="Last Name" 
              value={this.state.lastName} 
              onChange={this.handleChange} />

          <label className="hidden" htmlFor="userName">Username</label>
          <input 
              id="userName" 
              type="text" 
              name="userName" 
			  placeholder="Username" 
              value={this.state.userName} 
              onChange={this.handleChange} />

          <button 
			  className="smallButton" 
              type="submit" 
              disabled={!this.isValid()}>Add</button>
        </form>
		{this.userExists() ? (<p className="error">Username already exists.</p>) : ''}
      </div>
    )
  }
}

export default CreateUser;

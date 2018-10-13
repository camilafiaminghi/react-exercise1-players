import React, { Component } from 'react';
import CreateUser from './CreateUser';
import UsersList from './UsersList';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users : []
  }

  updateUsers = (user) => {
    this.setState(thisState => ({
      users : [...thisState.users, user]
    }));
  }

  render() {
    const {users} = this.state.users;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<CreateUser 
    		users={users}
			updateUsers={this.updateUsers}/>
		<UsersList users={users} />
		{JSON.stringify(this.state)}
      </div>
    );
  }
}

export default App;

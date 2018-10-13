import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UsersList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  }

  state = {
    showUsersNumGames: true
  }

  handleShowNumGames = () => {
    const showUsersNumGames = this.state.showUsersNumGames;
    this.setState({showUsersNumGames: !showUsersNumGames});
  }

  render() {
    const usersList = this.props.users.map((user, index) => (
      <li key={index}>
        <p>User: {user.firstName} {user.lastName}</p>
        <p>{user.userName} played {user.numGames} games.</p>
      </li>
    ));

    return (
      <div>
      	{(this.props.users.length > 0) ?
          <button 
              className="smallButton" 
              type="button"
              onClick={this.handleShowNumGames}>
              {
                (this.state.showUsersNumGames)
                ? <span>Hide the Number of Games Played</span> 
                : <span>Show the Number of Games Played</span>
              }
			</button>
		: ''}
		<div>
			<ol>{usersList}</ol>
		</div>
      </div>
    )
  }  
}

export default UsersList;
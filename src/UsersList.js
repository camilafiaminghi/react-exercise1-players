import React, {Component} from 'react';
import User from './User';
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
    const showUsersNumGames = this.state.showUsersNumGames
    const usersList = this.props.users.map((user, index) => (
      <User 
      	user={user} 
		key={index} 
		showUsersNumGames={showUsersNumGames}/>
    ));

    return (
      <div>
      	{(this.props.users.length > 0) ?
          <button 
              className="smallButton" 
              type="button"
              onClick={this.handleShowNumGames}>
              {
                (showUsersNumGames)
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
import React from 'react';
import PropTypes from 'prop-types';

const User = ({user, showUsersNumGames}) => {
  return (
    <li>
      <p>User: {user.firstName} {user.lastName}</p>
      <p>{user.userName} played {(showUsersNumGames) ? user.numGames : '\\*'} games.</p>
    </li>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  showUsersNumGames: PropTypes.bool.isRequired
};

export default User;
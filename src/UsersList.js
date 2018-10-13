import React from 'react';
import PropTypes from 'prop-types';

const UsersList = ({users}) => {
  const usersList = users.map((user, index) => (
    <li key={index}>
      <p>User: {user.firstName} {user.lastName}</p>
      <p>{user.userName} played {user.numGames} games.</p>
    </li>
  ));
  
  return (
    <ol>{usersList}</ol>
  );
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersList;
import UserItems from '../UserItems/UserItems';
import {User} from '../../types';
import React from 'react';
interface Props {
  users: User[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <>
      <h5 className="fw-light text-secondary mb-3">List of users</h5>
      {users.map((user) => (
        <UserItems
          key={user.id}
          user={user}
        />
      ))}
    </>
  );
};

export default Users;
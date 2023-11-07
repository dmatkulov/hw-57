import {User} from '../../types';
import React from 'react';

interface Props {
  user: User;
}
const UserItems: React.FC<Props> = ({user}) => {
  
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Role: {user.role}</p>
        <p className="card-text">e-mail: {user.email}</p>
        <span className="badge text-bg-secondary">Status: </span>
      </div>
    </div>
  );
};

export default UserItems;
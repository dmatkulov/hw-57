import {User} from '../../types';
import React from 'react';

interface Props {
  user: User;
}
const UserItems: React.FC<Props> = ({user}) => {
 
  return (
    <div className="col-auto bg-light w-100 p-3 border-1 rounded-3 mb-2">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Role: {user.role}</p>
        <p className="card-text">e-mail: {user.email}</p>
        {user.status ?
          (<span className="badge text-bg-success">Online</span>)
          :
          (<span className="badge text-bg-secondary">Offline </span>
          )}
    </div>
  );
};

export default UserItems;
import React, {useState} from 'react';
import {User, UserMutation} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    role: '',
  });
  
  const [isActive, setIsActive] = useState<boolean>(false);
  
  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prev) => (
      {
        ...prev, [e.target.name]: e.target.value,
      }
    ));
  };
  
  const checkStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.target.checked);
  };
  
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(),
      ...user,
      status: isActive,
    });
  };
  
  return (
    <form onSubmit={onFormSubmit}>
      <h5 className="fw-light text-secondary mb-3">Add new user</h5>
      <div className="form-group mt-3 mb-1">
        <label htmlFor="name">User name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={changeUser}
          className="form-control"
          required
        />
      </div>
      <div className="form-group mt-3 mb-1">
        <label htmlFor="email">e-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          value={user.email}
          onChange={changeUser}
          className="form-control"
          required
        />
      </div>
      <div className="form-group mt-3 mb-1">
        <label htmlFor="role">Role</label>
        <select
          name="role"
          id="role"
          value={user.role}
          onChange={changeUser}
          className="form-select">
          <option disabled>Select value</option>
          <option value="user">user</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
      </div>
      <div className="form-group mt-3 mb-1">
        <input
          type="checkbox"
          name="status"
          id="status"
          checked={isActive}
          onChange={checkStatus}
          className="form-check-input"
        />
        <label className="form-check-label ms-2" htmlFor="status">Status</label>
      </div>
      <button type="submit" className="btn btn-primary mt-3 w-100">Add user</button>
    </form>
  );
};

export default UserForm;
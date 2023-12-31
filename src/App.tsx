import Navbar from './components/Navbar/Navbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {User} from './types';
import {useState} from 'react';

const App = () => {
  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'John', email: 'john@doe.com', role: 'admin', status: false},
    {id: '2', name: 'Jane', email: 'jane@jane.com', role: 'user', status: true},
    {id: '3', name: 'Jim', email: 'jim@jim.com', role: 'user', status: false},
  ]);
  
  const addUser = (user: User) => {
    setUsers((prevState) => [...prevState, user]);
  };
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container">
        <div className="row">
          <div className="col-4">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col-8">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;

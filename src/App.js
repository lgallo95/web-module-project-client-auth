import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import AddFriends from './components/AddFriends';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';
function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h2>My Friend's List</h2>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends List</Link>
          </li>
          <li>
            <Link to="/friends/add">Add a Friend</Link>
          </li>
          <li>
          <Link to="/logout">Log Out</Link>
          </li>
        </ul>
      </header>

      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <PrivateRoute exact path="/friends/add" component={AddFriends} />
        <Route path="/logout" component={Logout} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

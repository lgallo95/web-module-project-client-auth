import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login'
import FriendsList from './components/FriendsList'

function App() {
  // const [isLoggedIn, setLogin] = useState(false);
  // const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          {/* <li>
            { (isLoggedIn && localStorage.getItem("role") === "admin") && <Link to="/protected">Admin</Link>}
          </li>
          <li>
            {isLoggedIn && <Link to="/protected">Protected Page</Link>}
          </li>
          <div>
            {isLoggedIn && <p>Welcome {localStorage.getItem('username')}</p>}
          </div> */}
        </ul>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/FriendsList" component={FriendsList}/>    
        </Switch>
      </div>
    </Router>
  );
}

export default App;

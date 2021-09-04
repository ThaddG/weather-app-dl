import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';

// custom components
import GuardedRoute from './components/GuardedRoute';

// redux
import { useDispatch } from 'react-redux';
import { getLocation } from './redux/actions/locationActions';

// styles
import './App.css';
import React from 'react';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getLocation());
  });

  return (
    // TODO: If you're going to use App as a component switch the use the code below
    // <Router>
    //   <Route exact path="/" component={Home} />
    //   <GuardedRoute
    //     path="/signup"
    //     check={isUserNotSignedIn}
    //     component={Signup}
    //     redirectTo="/"
    //   />
    // </Router>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

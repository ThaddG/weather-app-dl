import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';

// custom components
import GuardedRoute from './components/GuardedRoute';
import CurrentTemperature from './pages/CurrentTemperature';

// redux
import { useDispatch } from 'react-redux';
import { getLocation } from './redux/actions/locationActions';

// styles
import './App.css';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getLocation());
  });

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={6}>
          <Link to="/">
            <Button variant="contained">Current Temp</Button>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link to="/fivedaytemp">
            <Button variant="contained">5 Day Temp</Button>
          </Link>
        </Grid>
      </Grid>

      <Router>
        <Route exact path="/" component={CurrentTemperature} />
        {/* <Route path="/fivedaytemp" component={CurrentTemperature} /> */}
      </Router>
    </div>
  );
}

export default App;

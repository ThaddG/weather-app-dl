import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';

// custom components
import CurrentTemperature from './pages/CurrentTemperature';
import FiveDayTemperature from './pages/FiveDayTemperature';

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
      <Router>
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

        <Switch>
          <Route exact path="/" component={CurrentTemperature} />
          <Route path="/fivedaytemp" component={FiveDayTemperature} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

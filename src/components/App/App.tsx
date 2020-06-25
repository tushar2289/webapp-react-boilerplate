import React from 'react';
import {
  createStyles,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import DefaultTheme from '../../themes/default';
import AppHeader from '../AppHeader';
import Home from '../Home';
import About from '../About';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <div className={classes.root}>
        <BrowserRouter>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;

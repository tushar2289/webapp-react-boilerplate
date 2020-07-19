import React from 'react';
import {
  createStyles,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppHeader from '../AppHeader';
import Home from '../Home';
import About from '../About';
import { Provider, rootStore } from '../../models/Root';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );
  const classes = useStyles();
  return (
    <Provider value={rootStore}>
      <ThemeProvider theme={theme}>
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
    </Provider>
  );
};

export default App;

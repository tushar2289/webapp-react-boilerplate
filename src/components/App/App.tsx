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
import Counter from '../Counter';
import About from '../About';
import { Provider, rootStore } from '../../models/Root';
import UserDirectory from '../UserDirectory';

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
              <Route exact path="/" component={About} />
              <Route exact path="/counter" component={Counter} />
              <Route exact path="/user-directory" component={UserDirectory} />
            </Switch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    linkButton: {
      textDecoration: 'none',
      color: '#FFF',
    },
  })
);

const AppHeader: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Material UI
        </Typography>
        <Box ml={1}>
          <Button>
            <Link className={classes.linkButton} to="/">
              Home
            </Link>
          </Button>
          <Button>
            <Link className={classes.linkButton} to="/about">
              About
            </Link>
          </Button>
          <Button>
            <Link className={classes.linkButton} to="/user-directory">
              User directory
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;

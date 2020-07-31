import React from 'react';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Logo from '../../logo.svg';
import {
  GITHUB_LINK,
  MOBX_LINK,
  MATERIAL_UI_LINK,
  AXIOS_LINK,
  TYPESCRIPT_LINK,
  REACT_LINK,
} from '../../constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(4),
      textAlign: 'center',
    },
    logo: {
      width: '200px',
    },
  })
);

const About: React.FC = () => {
  const classes = useStyles();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  return (
    <Container maxWidth="sm">
      <Paper square className={classes.root}>
        <img src={Logo} className={classes.logo} alt="logo" />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginBottom={1}
        >
          <GitHubIcon />
          <Box paddingLeft={1}>
            <Link
              color="textPrimary"
              href={GITHUB_LINK}
              onClick={preventDefault}
              variant="h6"
            >
              Source code
            </Link>
          </Box>
        </Box>
        <Box paddingBottom={1}>
          <Typography variant="caption">
            This project was built using the following:
          </Typography>
          <Link
            color="textPrimary"
            href={REACT_LINK}
            onClick={preventDefault}
            variant="h6"
            display="block"
          >
            React
          </Link>
          <Link
            color="textPrimary"
            href={MOBX_LINK}
            onClick={preventDefault}
            variant="h6"
            display="block"
          >
            MobX
          </Link>
          <Link
            color="textPrimary"
            href={MATERIAL_UI_LINK}
            onClick={preventDefault}
            variant="h6"
            display="block"
          >
            Material UI
          </Link>
          <Link
            color="textPrimary"
            href={AXIOS_LINK}
            onClick={preventDefault}
            variant="h6"
            display="block"
          >
            Axios
          </Link>
          <Link
            color="textPrimary"
            href={TYPESCRIPT_LINK}
            onClick={preventDefault}
            variant="h6"
            display="block"
          >
            Typescript
          </Link>
        </Box>
        <Box padding={2}>
          <Typography variant="h5">
            Made with <FavoriteIcon color="error" /> in India
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;

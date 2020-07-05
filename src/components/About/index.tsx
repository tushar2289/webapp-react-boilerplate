import React from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Logo from '../../logo.svg';
import { GITHUB_LINK } from '../../constants';

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
  return (
    <Container maxWidth="sm">
      <Paper square className={classes.root}>
        <img src={Logo} className={classes.logo} alt="logo" />
        <Container>
          <GitHubIcon />
          <Typography variant="h6" display="block" gutterBottom>
            <a href={GITHUB_LINK}>{GITHUB_LINK}</a>
          </Typography>
        </Container>
      </Paper>
    </Container>
  );
};

export default About;

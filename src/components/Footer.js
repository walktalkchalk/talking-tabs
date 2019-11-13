/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../constants/theme';

const useStyles = makeStyles(() => ({
  footer: {
    background: theme.palette.white,
    color: theme.palette.white,
    width: '100%',
  },
  link: {
    fontSize: '11px',
    margin: '5px 10px',
    textAlign: 'right',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <a className={classes.link}
        target="_blank"
        rel="noopener noreferrer"
        href='https://github.com/walktalkchalk/talking-tabs/issues'
      >
        Having Trouble? Submit an issue.
      </a>
    </footer>
  );
}

export default Footer;

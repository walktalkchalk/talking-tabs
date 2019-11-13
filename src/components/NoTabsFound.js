/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUp from '@material-ui/icons/ThumbUp'

import theme from '../constants/theme';

const useStyles = makeStyles(() => ({
  container: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    padding: '2.5em 0em',
    width: '100%',
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: '50px',
    padding: '0px 5px',
  },
  title: {
    fontSize: '16px',
  },
  text: {
    color: theme.palette.grays.medium,
    fontSize: '12px',
  },
}));


const NoTabsFound = () => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <ThumbUp className={classes.icon} />
      <h1 className={classes.title}>
        No Talking Tabs Found
      </h1>
      <h2 className={classes.text}>
        Check other apps for current sound
      </h2>
    </section>
  );
}

export default NoTabsFound;

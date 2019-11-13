/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUp from '@material-ui/icons/ThumbUp'

import theme from '../constants/theme';

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    width: '100%',
  },
  notice: {
    alignContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  icon: {
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
    <div className={classes.container}>
      <div className={classes.notice}>
        <ThumbUp className={classes.icon} />
        <div className={classes.title}>
          No Talking Tabs Found
        </div>
        <div className={classes.text}>
          Check other apps for current sound
        </div>
      </div>
    </div>
  );
}

export default NoTabsFound;

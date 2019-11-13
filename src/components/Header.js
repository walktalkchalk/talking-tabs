/*global chrome*/
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VolumeOff from '@material-ui/icons/VolumeOff'
import VolumeUp from '@material-ui/icons/VolumeUp'

import theme from '../constants/theme';

const useStyles = makeStyles(() => ({
  header: {
    background: theme.palette.primary.main,
    color: '#FFFFFF',
    display: 'flex',
    width: '100%',
  },
  button: {
    flexGrow: 1,
    fontSize: '11px',
    margin: '5px 10px',
    '&:hover': {
      background: theme.palette.primary.secondary
    },
  },
  buttonContent: {
    alignItems: 'center',
    color: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonIcon: {
    fontSize: '34px',
    padding: '0px 5px',
  }
}));

const Header = ({ tabList }) => {
  const classes = useStyles();

  const muteAllTabs = () => {
    tabList.forEach((tab) => {
      chrome.tabs.update(tab.tab.id, {muted: true});
    })
  };
  
  const unmuteAllTabs = () => {
    tabList.forEach((tab) => {
      chrome.tabs.update(tab.tab.id, {muted: false});
    })
  };
  
  return (
    <div className={classes.header}>
      <Button
        className={classes.button}
        onClick={muteAllTabs}
      >
        <div className={classes.buttonContent}>
          <VolumeOff className={classes.buttonIcon} />
          <div>Mute All</div>
        </div>
      </Button>
      <Button
        className={classes.button}
        onClick={unmuteAllTabs}
      >
        <div className={classes.buttonContent}>
          <VolumeUp className={classes.buttonIcon} />
          <div>Unmute All</div>
        </div>
      </Button>
    </div>
  );
}

export default Header;

/*global chrome*/
import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VolumeOff from '@material-ui/icons/VolumeOff'
import VolumeUp from '@material-ui/icons/VolumeUp'

import theme from '../constants/theme';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '400px',
    display: 'flex',
    alignItems: 'center',
  },
  favIcon: {
    margin: '10px 10px',
    background: '#FFFFFF',
    width: '32px',
    height: '32px',
  },
  button: {
    borderRadius: '0',
    fontWeight: 'normal',
    justifyContent: 'start',
    textAlign: 'left',
    textTransform: 'none',
    flexGrow: '1',
    width: '200px',
    padding: '4px',
    '&:hover': {
      background: 'none'
    },
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    
  },
  tabUrl: {
    color: theme.palette.grays.dark,
    fontSize: '15px',
  },
  tabTitle: {
    color: theme.palette.grays.medium,
    fontSize: '12px',
  },
  muteButton: {
    margin: '5px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  mutedIcon: {
    color: theme.palette.red,
  },
  unmutedIcon: {
    color: theme.palette.grays.dark,
  },
}));

const TabControl = ({ tab }) => {
  const classes = useStyles();

  const getHostName = (url) => {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
  }

  return (
    <section className={classes.container}>
      <img className={classes.favIcon}
        src={tab.tab.favIconUrl}
      />
      <Button
        size="small"
        className={classes.button}
        // These two functions are responsible for setting the option in the SidebarContext
        // and setting the selected option in this component's state for styling purposes,
        // respectively
        onClick={() => {
          chrome.windows.update(tab.windowId, {focused: true});
          chrome.tabs.update(tab.tab.id, {selected: true});
          window.close();
        }}
      >
        <section className={classes.buttonContent}>
          <div className={classes.tabUrl}>
            {getHostName(tab.tab.url)}
          </div>
          <div className={classes.tabTitle}>
            {tab.tab.title}
          </div>
        </section>
      </Button>
      <IconButton className={classes.muteButton}
        aria-label="mute"
        size="medium"
        onClick={() => {
          const isTabMuted = tab.tab.mutedInfo.muted
          chrome.tabs.update(tab.tab.id, {muted: !isTabMuted});
        }}
      >
        {tab.tab.mutedInfo.muted ? (
          <VolumeOff className={classes.mutedIcon} />
        ) : (
          <VolumeUp className={classes.unmutedIcon} />
        )}
      </IconButton>
    </section>
  );
}

export default TabControl;

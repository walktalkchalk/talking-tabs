/*global chrome*/
import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '300px'
  },
  button: {
    borderRadius: '0',
    fontWeight: 'normal',
    justifyContent: 'start',
    textAlign: 'left',
    textTransform: 'none',
    width: '250px',
    padding: '4px',
    '&:hover': {
      background: 'none'
    }
  },
  muteButton: {
    margin: '0px',
  }
}));

const TabControl = ({ tab }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.container}
    >
      <IconButton
        aria-label="mute"
        size="small"
        className={classes.muteButton}
        onClick={() => {
          const isTabMuted = tab.tab.mutedInfo.muted
          chrome.tabs.update(tab.tab.id, {muted: !isTabMuted});
        }}
      >
        <FontAwesomeIcon
          icon={tab.tab.mutedInfo.muted ? faVolumeMute: faVolumeUp}
          color={tab.tab.mutedInfo.muted ? 'red' : 'black'}
        />
      </IconButton>
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
        {tab.tab.title}
      </Button>
    </div>
  );
}

export default TabControl;

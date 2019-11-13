/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GoToTabButton from './GoToTabButton';
import MuteButton from './MuteButton';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const TabControl = ({ tab }) => {
  const classes = useStyles();

  const switchToTab = () => {
    chrome.windows.update(tab.windowId, {focused: true});
    chrome.tabs.update(tab.tab.id, {selected: true});
    window.close();
  };

  const toggleTabMuted = () => {
    const isTabMuted = tab.tab.mutedInfo.muted
    chrome.tabs.update(tab.tab.id, {muted: !isTabMuted});
  }

  return (
    <section className={classes.container}>
      <GoToTabButton
        tab={tab.tab}
        onClick={switchToTab}
      />
      <MuteButton 
        isMuted={tab.tab.mutedInfo.muted}
        onClick={toggleTabMuted}
      />
    </section>
  );
}

export default TabControl;

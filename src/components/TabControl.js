/*global chrome*/
import React from 'react';
import { Button } from '@material-ui/core';

const TabControl = ({ tab }) => {
  return (
    <Button
      // className={classes.button}
      fullWidth
      // These two functions are responsible for setting the option in the SidebarContext
      // and setting the selected option in this component's state for styling purposes,
      // respectively
      onClick={() => {
        chrome.windows.update(tab.windowId, {focused: true});
        chrome.tabs.update(tab.tab.id, {selected: true});
      }}
    >
      {tab.tab.title}
    </Button>
  );
}

export default TabControl;

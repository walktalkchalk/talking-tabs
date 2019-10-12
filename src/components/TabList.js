/*global chrome*/
import React, { useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons'

import TabControl from './TabControl'

import theme from '../constants/theme';

const useStyles = makeStyles(() => ({
  list: {
    paddingLeft: '0'
  },
  listItem: {
    fontSize: '14px',
    width: '100%',
    '&:hover': {
      background: theme.palette.primary.secondary
    }
  },
  container: {
    overflow: 'scroll',
    height: `${window.innerHeight - 113}px`
  },
  muteIcon: {
    padding: '5px'
  }
}));

const TabList = () => {
  const classes = useStyles();
  const [tabList, setTabList] = useState([]);

  useEffect(() => {
    chrome.windows.getAll({populate:true},function(windows){
      const tabs = []
      windows.forEach(function(window){
        window.tabs.forEach(function(tab){
          if(tab.audible) {
            tabs.push({
              tab,
              windowId: window.id
            });
          }
        });
      });
      setTabList(tabs);
    });
  })

  var firstItem = <div>
    No tabs recently generated audio
  </div>
  if(tabList.length > 0) {
    firstItem = <div>
      <Button
        onClick={() => {
          tabList.forEach((tab) => {
            chrome.tabs.update(tab.tab.id, {muted: true});
          })
        }}
      >
        <FontAwesomeIcon
          className={classes.muteIcon}
          icon={faVolumeMute}
        />
        Mute all tabs
      </Button>
    </div>
  }

  return (
    <>
      { firstItem }
      <div className={classes.container}>
        <ul className={classes.list}>
          {tabList.map((tab) => (
            <li
              className={classes.listItem}
            >
              <TabControl
                tab={tab}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TabList;

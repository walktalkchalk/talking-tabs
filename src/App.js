/*global chrome*/
import React, { useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUp from '@material-ui/icons/ThumbUp'

import Header from './components/Header';
import NoTabsFound from './components/NoTabsFound';
import TabList from './components/TabList';

import theme from './constants/theme';

const useStyles = makeStyles(() => ({
  root: {
    background: theme.palette.background,
    color: theme.palette.grays.dark,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.875em',
    fontWeight: 400,
    textTransform: 'none',
    whiteSpace: 'nowrap',
    width: '350px',
  },
}));


const App = () => {
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
          };
        });
      });
      setTabList(tabs);
    });
  })

  return (
    <div className="App">
      <header className={classes.root}>
        <Header
          tabList={tabList}
        />
        { tabList.length > 0 ? (
          <TabList 
            tabList={tabList}
          />
        ) : (
          <NoTabsFound />
        )}
      </header>
    </div>
  );
}

export default App;

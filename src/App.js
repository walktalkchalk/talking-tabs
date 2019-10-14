/*global chrome*/
import React, { useEffect, useState} from 'react';
import TabList from './components/TabList';
import Header from './components/Header';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import theme from './constants/theme';

const useStyles = makeStyles(() => ({
  root: {
    background: theme.palette.grays.light,
    color: theme.palette.grays.dark,
    textTransform: 'none',
    whiteSpace: 'nowrap',
    opacity: '0.6',
    fontSize: '0.875em',
    fontWeight: 400,
    '&$selected': {
      borderTop: `solid 3px ${theme.palette.transparent}`,
      paddingTop: 3,
      borderBottom: 'none',
      color: theme.palette.grays.dark,
      background: theme.palette.secondary.secondary,
      opacity: '1'
    }
  },
}));


function App() {
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

  return (
    <div className="App">
      <header className={classes.root}>
        <Header
          tabList={tabList}
        />
        <TabList 
          tabList={tabList}
        />
      </header>
    </div>
  );
}

export default App;

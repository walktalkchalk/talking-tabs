/*global chrome*/
import React, { useEffect, useState } from "react";
import TabList from "./components/TabList";
import Header from "./components/Header";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./constants/theme";

const useStyles = makeStyles(() => ({
  root: {
    background:
      "linear-gradient(30deg, rgba(30,30,30,1) 0%, rgba(60,60,60) 100%)",
    color: theme.palette.grays.dark,
    textTransform: "none",
    whiteSpace: "nowrap",
    fontSize: "0.875em",
    fontWeight: 400,
    "&$selected": {
      borderTop: `solid 3px ${theme.palette.transparent}`,
      paddingTop: 3,
      borderBottom: "none",
      color: theme.palette.grays.dark,
      background: theme.palette.secondary.secondary,
      opacity: "1"
    }
  }
}));

function App() {
  const classes = useStyles();
  const [tabList, setTabList] = useState([]);

  useEffect(() => {
    chrome.windows.getAll({ populate: true }, function(windows) {
      const tabs = [];
      windows.forEach(function(window) {
        window.tabs.forEach(function(tab) {
          if (tab.audible) {
            tabs.push({
              tab,
              windowId: window.id
            });
          }
        });
      });
      setTabList(tabs);
    });
  });

  return (
    <div className="App">
      <header className={classes.root}>
        <Header tabList={tabList} />
        <TabList tabList={tabList} />
      </header>
    </div>
  );
}

export default App;

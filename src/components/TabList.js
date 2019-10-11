/*global chrome*/
import React, { useEffect, useState} from 'react';
import TabControl from './TabControl'

const TabList = () => {
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
  }, [])

  return (
    <>
      {tabList.map((tab) => (
        <TabControl
          tab={tab}
        />
      ))}
    </>
  );
}

export default TabList;

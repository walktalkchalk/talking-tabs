import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
      background: theme.palette.grays.lighter
    }
  },
  container: {
    overflow: 'scroll',
    height: `100%`
  }
}));

const TabList = ({ tabList }) => {
  const classes = useStyles();

  return (
    <>
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

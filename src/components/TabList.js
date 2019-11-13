import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TabControl from './TabControl'

import theme from '../constants/theme';

const useStyles = makeStyles(() => ({
  list: {
    margin: '0px',
    paddingLeft: '0',
    maxHeight: '500px',
  },
  listItem: {
    fontSize: '14px',
    width: '100%',
    '&:hover': {
      background: theme.palette.grays.lighter,
    },
  },
  container: {
    overflow: 'scroll',
  },
}));

const TabList = ({ tabList }) => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
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
    </section>
  );
}

export default TabList;

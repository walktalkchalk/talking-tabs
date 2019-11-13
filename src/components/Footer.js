/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

const Header = ({ tabList }) => {
  const classes = useStyles();

  return (
    <div>
      Talking Tabs
    </div>
  );
}

export default Header;

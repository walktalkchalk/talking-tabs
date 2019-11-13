/*global chrome*/
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import theme from '../constants/theme';

const useStyles = makeStyles(() => ({
  favIcon: {
    margin: '10px 10px',
    background: '#FFFFFF',
    width: '32px',
    height: '32px',
  },
  button: {
    borderRadius: '0',
    fontWeight: 'normal',
    justifyContent: 'start',
    textAlign: 'left',
    textTransform: 'none',
    flexGrow: '1',
    width: '200px',
    padding: '4px',
    '&:hover': {
      background: 'none'
    },
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    
  },
  tabUrl: {
    color: theme.palette.grays.dark,
    fontSize: '15px',
  },
  tabTitle: {
    color: theme.palette.grays.medium,
    fontSize: '12px',
  },
}));

const GoToTabButton = ({ tab, onClick }) => {
  const classes = useStyles();

  const getHostName = (url) => {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
  }

  return (
    <Button className={classes.button}
      size="small"
      onClick={onClick}
    >
      <img className={classes.favIcon}
        src={tab.favIconUrl}
      />
      <section className={classes.buttonContent}>
        <div className={classes.tabUrl}>
          {getHostName(tab.url)}
        </div>
        <div className={classes.tabTitle}>
          {tab.title}
        </div>
      </section>
    </Button>
  );
}

export default GoToTabButton;

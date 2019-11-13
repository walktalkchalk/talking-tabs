/*global chrome*/
import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import VolumeOff from '@material-ui/icons/VolumeOff';
import VolumeUp from '@material-ui/icons/VolumeUp';

import theme from '../constants/theme';

const useStyles = makeStyles(() => ({
  muteButton: {
    margin: '5px',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  mutedIcon: {
    color: theme.palette.red,
  },
  unmutedIcon: {
    color: theme.palette.grays.dark,
  },
}));

const MuteButon = ({ isMuted, onClick }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.muteButton}
      aria-label="mute"
      size="medium"
      onClick={onClick}
    >
      {isMuted ? (
        <VolumeOff className={classes.mutedIcon} />
      ) : (
        <VolumeUp className={classes.unmutedIcon} />
      )}
    </IconButton>
  );
}

export default MuteButon;

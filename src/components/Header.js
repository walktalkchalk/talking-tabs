/*global chrome*/
import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";

import theme from "../constants/theme";

const useStyles = makeStyles(() => ({
  list: {
    paddingLeft: "0"
  },
  header: {
    marginTop: "0",
    paddingTop: "10px",
    color: "white",
    fontWeight: "600",
    fontSize: "1.2em"
  },
  button: {
    background: "linear-gradient(45deg, rgb(56, 150, 78),rgb(150, 200, 102))",
    marginBottom: "15px"
  },
  listItem: {
    fontSize: "14px",
    width: "100%",
    "&:hover": {
      background: theme.palette.primary.secondary
    }
  },
  container: {
    overflow: "scroll",
    height: `${window.innerHeight - 113}px`
  },
  muteIcon: {
    padding: "5px"
  }
}));

const Header = ({ tabList }) => {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.header}>Talking Tabs</p>
      <Button
        className={classes.button}
        onClick={() => {
          tabList.forEach(tab => {
            chrome.tabs.update(tab.tab.id, { muted: true });
          });
        }}
      >
        <FontAwesomeIcon className={classes.muteIcon} icon={faVolumeMute} />
        Mute all
      </Button>
    </div>
  );
};

export default Header;

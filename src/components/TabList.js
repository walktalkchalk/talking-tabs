import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TabControl from "./TabControl";

import theme from "../constants/theme";

const useStyles = makeStyles(() => ({
  list: {
    padding: "0px",
    margin: "0"
  },
  listItem: {
    fontSize: "14px",
    width: "100%",
    padding: "3px 0px",
    fontWeight: "500",
    "&:hover": {
      background: "linear-gradient(45deg, rgb(56, 150, 78),rgb(150, 200, 102))",
      "& svg": {
        color: "white"
      }
    },
    "&:not(:last-child)": {
      borderBottom: "1px solid rgb(100,100,100)"
    }
  },
  container: {
    maxHeight: "250px",
    overflowX: "hidden"
  }
}));

const TabList = ({ tabList }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <ul className={classes.list}>
          {tabList.map(tab => (
            <li className={classes.listItem}>
              <TabControl tab={tab} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TabList;

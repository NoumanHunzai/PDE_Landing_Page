import { makeStyles } from "@material-ui/core";
import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  const classes = useStyles();
  return (
    <Typewriter
      className={classes.blockAd}
      options={{
        strings: ["Safe.", "Secure"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
export default Type;
const useStyles = makeStyles(() => ({
  blockAd: {
    fontSize: 30,
  },
}));

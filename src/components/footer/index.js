import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import logo from "../../assets/logo3.png";

export default function Footer() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.maincontainer}>
        <Box className={classes.main}>
          <Box>
            <div className={classes.innerHead}>
              <img src={logo} alt="logo" className="logo" />
            </div>
          </Box>

          <Box>
            <Typography className={classes.heading} variant="h3">
              price
            </Typography>
            <div className={classes.innerHead}>
              <Typography className="text" variant="subtitle1">
                Free
              </Typography>
              <Typography className="text" variant="subtitle1">
                Premium
              </Typography>
            </div>
          </Box>
          <Box>
            <Typography className={classes.heading} variant="h3">
              Community
            </Typography>
            <div className={classes.innerHead}>
              <Typography className="text" variant="subtitle1">
                Contribution
              </Typography>
              <Typography className="text" variant="subtitle1">
                Blog
              </Typography>
            </div>
          </Box>
          <Box>
            <Typography className={classes.heading} variant="h3">
              Development
            </Typography>
            <div className={classes.innerHead}>
              <Typography className="text" variant="subtitle1">
                Source Code
              </Typography>
              <Typography className="text" variant="subtitle1">
                Model Code
              </Typography>
            </div>
          </Box>
          <Box>
            <Typography className={classes.heading} variant="h3">
              documentation
            </Typography>
            <div className={classes.innerHead}>
              <Typography className="text" variant="subtitle1">
                let's start
              </Typography>
            </div>
          </Box>
        </Box>

        <Box style={{ padding: "2em 1em 0em 1em" }}>
          <Typography variant="overline" className={classes.typo}>
            Copyright © 2023 Phishing Detector Extension. All rights reserved.
          </Typography>
        </Box>
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  maincontainer: {
    background:
      "linear-gradient(0deg, rgba(32,149,186,1) 5%, rgba(15,57,176,1) 89%)",
  },
  main: {
    paddingTop: 30,
    paddingBottom: 30,
    display: "grid",

    gridTemplateColumns: "2fr  1fr 1fr 1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
      justifyItems: "center",
      rowGap: 40,
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr  1fr",
      justifyItems: "start",
      marginLeft: 20,
      gap: 20,
    },
  },

  innerHead: {
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 5,

    "& .logo": {
      paddingLeft: 20,
      width: 125,
      height: 125,
    },

    "& .text": {
      fontSize: 17,
      fontWeight: 700,
      cursor: "pointer",
      color: "white",
      textTransform: "capitalize",
    },
    " & .button": {
      textAlign: "center",
      width: 100,
      marginLeft: 100,
    },
  },

  heading: {
    fontSize: 22,
    fontWeight: 700,
    paddingTop: 40,
    color: "white",
    textTransform: "capitalize",
    cursor: "pointer",
  },
  typo: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    color: "#C3C3C3",
    fontWeight: "bold",
  },
}));

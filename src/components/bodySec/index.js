import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Type from "../text";
import google from "../../assets/chrome_logo.svg";
import firefox from "../../assets/firefox_logo.svg";
import edge from "../../assets/edge_logo.svg";
import safari from "../../assets/safari_logo.svg";
import android from "../../assets/android_logo.svg";
import apple from "../../assets/apple_logo.svg";

export default function Bodysec() {
  const classes = useStyles();
  return (
    <div className={classes.bodySecond}>
      <div>
        <div className={classes.blockAd}>
          Block Sites. Be <Type />
        </div>
        <div className={classes.textSec}>
          <Typography className="text" variant="body1">
            Eliminate the risk of falling victim to phishing scams with PDE's
            advanced technology
          </Typography>
        </div>

        <div className={classes.textSec}>
          <button className={classes.btnLearn}>Get PDE Now</button>
        </div>

        <div className={classes.logoSec}>
          <img className={classes.imge} src={google} alt="imag" />
          <img className={classes.imge} src={firefox} alt="imag" />
          <img className={classes.imge} src={edge} alt="imag" />
          <img className={classes.imge} src={apple} alt="imag" />
          <img className={classes.imge} src={safari} alt="imag" />
          <img className={classes.imge} src={android} alt="imag" />
        </div>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  bodySecond: {
    padding: "90px 0px",
    backgroundColor: "#C3C3C3",
  },
  blockAd: {
    display: "flex",
    gap: 10,
    color: "#2B2B2B",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },

  textSec: {
    paddingTop: 30,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& .text": {
      wordSpacing: 3,
    },
  },

  btnLearn: {
    width: 400,
    height: 60,
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 5,
    border: "none",
    background: " linear-gradient(to right bottom, #0075ff 50%, #0055b7 50%)",
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.04)",
      transitionTiminFunction: " ease-in-out",
      transitionDuration: "0.9s",
    },
  },

  logoSec: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      gap: 15,
    },
  },
  imge: {
    marginTop: 20,
    width: 40,
    [theme.breakpoints.down("xs")]: {
      width: 30,
    },
  },
}));

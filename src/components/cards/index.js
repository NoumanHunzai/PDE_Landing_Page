import { makeStyles } from "@material-ui/core";
import React from "react";

export default function Card({ image, head, text }) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div style={{ paddingTop: 10 }}>
        <img src={image} alt="pro" />
      </div>
      <div>
        <h3>{head}</h3>
      </div>
      <div className={classes.text}>
        <p> {text}</p>
      </div>

      <div className={classes.learnMore}>
        <a className={classes.anchr} href="/#">
          {" "}
          learn more
        </a>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#FFF",
    maxWidth: 250,
    height: 400,
    borderRadius: 6,
    boxShadow: "0px 5px 15px rgb(10 14 71 / 20%)",
    display: "flex",

    alignItems: "center",
    flexDirection: "column",
    gap: 15,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
    },

    "&:hover": {
      transition: "all 0.4s ease-in-out",
    },
  },

  text: {
    padding: 10,
    height: "142px",
  },

  anchr: {
    color: "#0047FF",
    textDecoration: "none",
  },
}));

import { makeStyles } from "@material-ui/core";

import Laptop from "../../assets/laptop.svg";
import React from "react";

export default function HeadSection() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div>
        <img src={Laptop} alt="lap" />
      </div>
      <div>
        <div style={{ display: "flex", gap: 5 }}>
          {/* <div className={classes.new}>
            <h6> new!</h6>
          </div> */}
          <h3>
            Experience safe and secure browsing with PDE's cutting-edge phishing
            detection system
          </h3>
        </div>
        <p>
          With PDE's cutting-edge phishing detection system, you can experience
          safe and secure browsing. Our advanced technology is based on machine
          learning and the latest data set of phishing sites, ensuring that you
          are protected from the latest phishing tactics and techniques. PDE is
          a web-based extension, making it easy to install and use, and also it
          continuously monitors the internet for new and emerging phishing
          sites, and alerts you when a potentially dangerous website is
          detected. Trust PDE to safeguard your sensitive information and
          resources from cyber-attacks, and experience peace of mind while
          browsing the internet.
        </p>
      </div>

      <div>
        <button className={classes.btnLearn}>Learn More</button>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    padding: " 30px 60px",

    background: " linear-gradient(30deg, #E6E6E6 27%, #F4F4F4 27%)",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    gap: 90,
    gridTemplateColumns: "1fr 1fr 1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: " 1fr",
    },
  },
  new: {
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#FFCA00",
  },

  btnLearn: {
    width: 250,
    height: 60,
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 5,
    border: "none",
    background: " linear-gradient(to right bottom, #0075ff 50%, #0055b7 50%)",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.04)",
      transitionTiminFunction: " ease-in-out",
      transitionDuration: "0.9s",
    },
  },
}));

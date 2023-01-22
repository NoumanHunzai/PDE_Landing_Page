import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography style={{ padding: "20px 0px" }} variant="h3">
        {" "}
        About us
      </Typography>
      <div className={classes.main}>
        <div>
          <Typography variant="h6">
            Phishing Detector Extension (PDE) is a leading provider of advanced
            phishing detection technology. We are a team of experts in the field
            of cybersecurity, committed to providing the most advanced and
            effective phishing detection system available.
          </Typography>
        </div>
        <div>
          {" "}
          <Typography variant="h6">
            Our team is composed of experienced professionals with a deep
            understanding of the latest phishing tactics and techniques. We are
            dedicated to constantly researching and developing new ways to
            protect our users from cyber-attacks.
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            We understand the importance of keeping sensitive information and
            resources safe from cyber-criminals, which is why we have developed
            PDE. Our system is based on advanced machine learning techniques and
            the latest data set of phishing sites, which ensures that our users
            are always protected from the latest threats.
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            We pride ourselves on providing an easy to use and efficient
            solution for our customers. PDE is a web-based extension, which
            makes it easy to install and use.
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            Our goal is to provide our users with a secure browsing experience,
            and our tagline "Be Safe, Be Secure" summarises our mission.
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            We are constantly striving to improve our system and are always open
            to feedback from our users. If you have any questions or
            suggestions, please feel free to contact us. We would be happy to
            hear from you.
          </Typography>
        </div>
        <div>
          <Typography variant="h6">
            Thank you for choosing PDE, and we look forward to helping you stay
            safe and secure online.
          </Typography>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    width: "73%",
    padding: "2em",
    color: "#666666",
    margin: "0 auto",
  },
  main: {
    color: "#666666",
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
}));

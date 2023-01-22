import React from "react";
import image1 from "../../assets/speed_icon.svg";
import image2 from "../../assets/privacy_icon.svg";
import image3 from "../../assets/distraction_icon.svg";
import image4 from "../../assets/browse_icon.svg";
import Card from ".";
import { makeStyles } from "@material-ui/core";
export default function MapCard() {
  const classes = useStyles();
  return (
    <div className={classes.cardMapCard}>
      {Data.map(({ image, head, text }) => {
        return (
          <>
            <Card image={image} text={text} head={head} />
          </>
        );
      })}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  cardMapCard: {
    display: "flex",
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -40,
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
    },
  },
}));

const Data = [
  {
    image: image1,
    head: "Real-time Detection",
    text: "PDE constantly monitors the internet for new and emerging phishing sites, and alerts users when a potentially dangerous website is detected.",
  },
  {
    image: image2,
    head: "Machine Learning Model",
    text: "PDE uses a sophisticated machine learning model to analyze websites and determine if they are legitimate or malicious.",
  },
  {
    image: image3,
    head: "Compatibility",
    text: "PDE is compatible with most popular web browsers",
  },
  {
    image: image4,
    head: "User-friendly interface",
    text: "PDE has a user-friendly interface which makes it easy to use for everyone",
  },
];

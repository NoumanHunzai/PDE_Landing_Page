import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CancelIcon from "@material-ui/icons/Cancel";
import logo from "../../assets/logo3.png";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Box, List, ListItem, SwipeableDrawer } from "@material-ui/core";

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOnHover = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SimpleMenu = () => {
    return (
      <div>
        <Menu
          anchorOrigin={{ horizontal: "center", vertical: "center" }}
          transformOrigin={{ horizontal: "center", vertical: "center" }}
          className={classes.menudropdown}
          aria-controls="simple-menu"
          aria-haspopup="true"
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <div style={{ paddingTop: "30px", paddingLeft: "45px" }}>
            <CancelIcon
              className={classes.CancelIconbtn}
              onClick={handleClose}
            />
            <Typography variant="body1">Features</Typography>
          </div>
          <div className={classes.inner}>
            <div>
              <MenuItem className="container">Real-time detection</MenuItem>
              <MenuItem className="container">Machine learning</MenuItem>
              <MenuItem className="container">Geo-location</MenuItem>
              <MenuItem className="container">Automatic updates</MenuItem>
            </div>
            <div>
              <MenuItem className="container">Easy-to-use</MenuItem>
              <MenuItem className="container">Real-time alerts</MenuItem>
              <MenuItem className="container">Browser compatibility</MenuItem>
              <MenuItem className="container">User-friendly</MenuItem>
            </div>
          </div>
        </Menu>
      </div>
    );
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img src={logo} alt="logo" className="logo" />

          <div className={classes.titleContainer}>
            <div className={classes.pageHeadings}>
              <>
                <Typography
                  variant="body1"
                  className={classes.title}
                  onClick={handleOnHover}
                >
                  features
                </Typography>
                <SimpleMenu />
              </>
              <Typography variant="body1" className={classes.title}>
                pricing
              </Typography>

              <Typography variant="body1" className={classes.title}>
                blog
              </Typography>
              <Typography variant="body1" className={classes.title}>
                videos
              </Typography>
              <Typography variant="body1" className={classes.title}>
                demo
              </Typography>
            </div>
          </div>

          <IconButton
            className={classes.menuContainer}
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon className={classes.menuButton} />
          </IconButton>
          <SwipeableDrawer
            className={classes.SwipeDrawer}
            anchor="right"
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            onOpen={() => {}}
          >
            <Box className={classes.arrowsection} p={2}>
              <Box display="flex" alignItems="center">
                <img src={logo} alt="logo" className={classes.logo} />
              </Box>
              <Box display="flex" alignItems="center">
                {open ? (
                  <CancelIcon
                    className={classes.iconCross}
                    variant="contained"
                    fontSize="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  />
                ) : (
                  <></>
                )}
              </Box>
            </Box>
            <List className={classes.list}>
              <ListItem>
                {/* Put items Here */}
                <Box className={classes.HeaderLinks}>
                  <Box>
                    <>
                      <Typography
                        variant="body1"
                        className={classes.HeaderItems}
                      >
                        features
                      </Typography>
                    </>
                  </Box>
                  <Box>
                    <Typography variant="body1" className={classes.HeaderItems}>
                      pricing
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" className={classes.HeaderItems}>
                      blog
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body1" className={classes.HeaderItems}>
                      videos
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body1" className={classes.HeaderItems}>
                      demo{" "}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            </List>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "grid",
    color: "#FFF",
    gridTemplateColumns: "0.7fr 1fr ",
    background:
      "linear-gradient(0deg, rgba(32,149,186,1) 5%, rgba(15,57,176,1) 89%)",

    "& .logo": {
      width: 60,
      height: 60,
      [theme.breakpoints.down("sm")]: {
        padding: "8px 0px",
        width: 60,
      },
      [theme.breakpoints.down("sm")]: {
        padding: "5px 0px",
        width: 60,
      },
    },
    " & a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  buttonOutlined: { height: "25px", marginTop: 5 },
  buttonContained: { height: "25px", marginTop: 5, width: "140px" },
  pageHeadings: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",

    " & a": {
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttonContainer: {
    display: "flex",
    gap: "12px",

    "& a": {
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuContainer: {
    width: 70,
    height: 70,

    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    padding: "7px",
    textTransform: "uppercase",
    "&:hover": {
      cursor: "pointer",
    },
  },

  GitHubIcon: {
    fontSize: "30px",
  },
  menuButton: {
    color: "#FFF",
    width: 30,
    height: 30,
  },

  SwipeDrawer: {
    "& .MuiPaper-root": {
      width: "100%",
      color: "#FFF",
      background:
        "linear-gradient(0deg, rgba(32,149,186,1) 5%, rgba(15,57,176,1) 89%)",
    },
  },

  arrowsection: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
  },
  HeaderLinks: {
    textTransform: "uppercase",
    padding: "0px 10px",
  },
  HeaderItems: {
    fontSize: "16px",
    padding: "10px 0px",
    color: "#FFF",
    "& :hover": {
      cursor: "pointer",
    },
  },
  drawerButtons: {
    display: "flex",
    justifyContent: "space-around",
    margin: "0px 10px ",
  },
  buttonOutlinedDrawer: { height: "25px", width: "150px" },

  menudropdown: {
    color: theme.palette.primary.main,
    "& .MuiMenu-paper   ": {
      position: "relative",
      top: "55px !important",
      marginLeft: 110,
      width: 650,
      height: 280,
      [theme.breakpoints.down("md")]: {
        marginLeft: 20,
        width: 730,
      },
    },
  },

  inner: {
    display: "grid",
    margin: " 10px 30px",
    columnGap: 20,

    gridTemplateColumns: "1fr 1fr",

    "& .container": {
      paddingTop: 10,
    },
  },
  logo: {
    width: 60,
    height: 60,
  },

  CancelIconbtn: {
    width: 30,
    height: 30,
    position: "relative",
    top: -33,
    right: 10,
    float: "right",
    cursor: "pointer",
  },
}));

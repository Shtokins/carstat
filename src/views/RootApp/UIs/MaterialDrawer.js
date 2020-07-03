import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const drawerWidth = 240;
// eslint-disable-next-line no-undef
const publicImageFolder = process.env.PUBLIC_URL + "/images";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export const MaterialDrawer = ({
  collapsed,
  setCollapsed,
  children,
  uiName,
  setUI
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setCollapsed(false);
  };

  const handleDrawerClose = () => {
    setCollapsed(true);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: !collapsed
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: !collapsed
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Material Appbar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: !collapsed,
          [classes.drawerClose]: collapsed
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: !collapsed,
            [classes.drawerClose]: collapsed
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            key="antd"
            selected={uiName === "antd"}
            onClick={() => setUI("antd")}
          >
            <ListItemIcon>
              <img
                alt=""
                src={publicImageFolder + "/antdLogo.png"}
                width={30}
              />
            </ListItemIcon>
            <ListItemText primary="Ant Design" />
          </ListItem>
          <ListItem
            button
            key="semantic"
            selected={uiName === "semantic"}
            onClick={() => setUI("semantic")}
          >
            <ListItemIcon>
              <img alt="" src={publicImageFolder + "/suiLogo.png"} width={30} />
            </ListItemIcon>
            <ListItemText primary="Semantic UI" />
          </ListItem>
          <ListItem
            button
            key="material"
            selected={uiName === "material"}
            onClick={() => setUI("material")}
          >
            <ListItemIcon>
              <img alt="" src={publicImageFolder + "/muiLogo.png"} width={30} />
            </ListItemIcon>
            <ListItemText primary="Material UI" />
          </ListItem>
          <ListItem
            button
            key="atlassian"
            selected={uiName === "atlassian"}
            onClick={() => setUI("atlassian")}
          >
            <ListItemIcon>
              <img
                alt=""
                src={publicImageFolder + "/atlassianKitLogo.png"}
                width={30}
              />
            </ListItemIcon>
            <ListItemText primary="Atlassian Kit" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

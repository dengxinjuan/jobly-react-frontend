import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `yellow`,
  },
});

const navLinks = [
  { title: `Company`, path: `/companies` },
  { title: `Job`, path: `/jobs` },
  { title: `Profile`, path: `/profile` },
];

const LoggedUserNav = ({ logout }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <a href="/">
              <Home fontSize="large" />
            </a>
          </IconButton>

          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}

            <a className={classes.linkText} onClick={logout}>
              <ListItem button>
                <ListItemText primary="Log Out" />
              </ListItem>
            </a>
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default LoggedUserNav;

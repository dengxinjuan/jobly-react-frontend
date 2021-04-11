import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import UserContext from "./UserContext";
import { useContext } from "react";

const ACTIVE_STYLE = {
  fontWeight: "bold",
  color: "gold",
  padding: "10px",
};

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);
  function loggedIn() {
    return (
      <div>
        <NavLink exact to="/companies" activeStyle={ACTIVE_STYLE}>
          CompanyList
        </NavLink>

        <NavLink exact to="/jobs" activeStyle={ACTIVE_STYLE}>
          Jobs
        </NavLink>
        <NavLink exact to="/profile" activeStyle={ACTIVE_STYLE}>
          Profile
        </NavLink>
      </div>
    );
  }

  function logoutNav() {
    return (
      <NavLink exact to="/signup" activeStyle={ACTIVE_STYLE}>
        SignUp
      </NavLink>
    );
  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button>Hello!</Button>
        <NavLink exact to="/" activeStyle={ACTIVE_STYLE}>
          Home
        </NavLink>
        {currentUser ? loggedIn() : logoutNav()}

        <NavLink exact to="/login" onClick={logout} activeStyle={ACTIVE_STYLE}>
          Log {currentUser ? "out" : "in"}!
          {currentUser ? currentUser.username : "user"}
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

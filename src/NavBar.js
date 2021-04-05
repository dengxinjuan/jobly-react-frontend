import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const ACTIVE_STYLE = {
  fontWeight: "bold",
  color: "gold",
  margin: "10px",
};

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button>Hello!</Button>
        <NavLink exact to="/" activeStyle={ACTIVE_STYLE}>
          Home
        </NavLink>
        <div>
          <NavLink exact to="/companies" activeStyle={ACTIVE_STYLE}>
            CompanyList
          </NavLink>

          <NavLink exact to="/jobs" activeStyle={ACTIVE_STYLE}>
            Jobs
          </NavLink>

          <NavLink exact to="/login" activeStyle={ACTIVE_STYLE}>
            LogIn
          </NavLink>
          <NavLink exact to="/signup" activeStyle={ACTIVE_STYLE}>
            SignUp
          </NavLink>
          <NavLink exact to="/profile" activeStyle={ACTIVE_STYLE}>
            Profile
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

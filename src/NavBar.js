import { NavLink } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import UserContext from "./UserContext";
import { useContext } from "react";
import UserNav from "./twoNavs/UserNav";
import LoggedUserNav from "./twoNavs/LoggedUserNav";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <AppBar position="fixed">
      {currentUser ? <LoggedUserNav logout={logout} /> : <UserNav />}
    </AppBar>
  );
}

export default NavBar;

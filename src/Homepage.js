import { useContext } from "react";
import UserContext from "./UserContext";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { currentUser } = useContext(UserContext);
  function loggedView() {
    return (
      <div>
        <Button variant="contained" color="primary" size="large">
          <Link exact to="/login">
            Log In
          </Link>
        </Button>
        <Button variant="contained" color="yellow" size="large">
          <Link exact to="signup">
            Sign Up
          </Link>
        </Button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h2>
          Dear {currentUser ? currentUser.username : "user "}, Welcome to the
          jobly!
        </h2>
      </div>
      {currentUser ? "Start Search Now!" : loggedView()}
    </div>
  );
};

export default HomePage;

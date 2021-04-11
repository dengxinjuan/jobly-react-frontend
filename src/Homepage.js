import { useContext } from "react";
import UserContext from "./UserContext";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <div>
        <h2>
          Dear {currentUser ? currentUser.username : "user "}, Welcome to the
          jobly!
        </h2>
      </div>

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
    </div>
  );
};

export default HomePage;

import { useContext } from "react";
import UserContext from "./UserContext";
import LoginForm from "./LoginForm";

const HomePage = () => {
  const currentUser = useContext(UserContext);
  return (
    <div>
      {currentUser ? currentUser.username : "Dear user, "} Welcome to the jobly!
      {currentUser ? "search start now" : <LoginForm />}
    </div>
  );
};

export default HomePage;

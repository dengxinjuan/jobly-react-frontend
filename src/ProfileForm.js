import { useContext } from "react";
import UserContext from "./UserContext";

const ProfileForm = () => {
  const currentUser = useContext(UserContext);
  return (
    <div>
      UserName: {currentUser ? currentUser.username : "Hello"}
      Email: {currentUser.email}
      This is ProfileForm!
    </div>
  );
};

export default ProfileForm;

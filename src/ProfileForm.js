import { useContext, useState } from "react";
import UserContext from "./UserContext";
import JoblyApi from "./api";
import Alert from "./Alert";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const ProfileForm = () => {
  const classes = useStyles();
  const { currentUser, setCurrentUser } = useContext(UserContext); // get current user from useContext

  const INITIAL_DATA = {
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [formErrors, setFormErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useState(false);

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

  /* on form submit, call api. clear error, set user info*/
  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (errors) {
      debugger;
      setFormErrors(errors);
      return;
    }

    setFormData((f) => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    // trigger reloading of user information throughout the site
    setCurrentUser(updatedUser);
  }

  return (
    <div>
      <div>
        <Avatar className={classes.orange}>{currentUser.lastName}</Avatar>
        {currentUser ? currentUser.username : "Hello"}
      </div>
      <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <h3>Profile</h3>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Confirm password to make changes:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {formErrors.length ? (
                <Alert type="danger" messages={formErrors} />
              ) : null}

              {saveConfirmed ? (
                <Alert type="success" messages={["Updated successfully."]} />
              ) : null}

              <button
                className="btn btn-primary btn-block mt-4"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;

import "./App.css";
import JoblyApi from "./api";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import jwt from "jsonwebtoken";
import UserContext from "./UserContext";

function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [infoLoaded, setInfoLoaded] = useState(false);

  /** Handles site-wide signup.
   *
   * Automatically logs them in (set token) upon signup.
   *
   * Make sure you await this function and check its return value!
   */
  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  /** Handles site-wide login.
   *
   * Make sure you await this function and check its return value!
   */
  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  /*log out we set everything to null*/

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run. It only needs to re-run when a user logs out, so
  // the value of the token is a dependency for this effect.

  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            // put the token on the Api class so it can use it to call the API.
            JoblyApi.token = token;
            let currentUser = await JoblyApi.getCurrentUser(username);
            setCurrentUser(currentUser);
            //setApplicationIds(new Set(currentUser.applications));
            console.log(currentUser);
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
      }
      // set infoLoaded to false while async getCurrentUser runs; once the
      // data is fetched (or even if an error happens!), this will be set back
      // to false to control the spinner.
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  return (
    <BrowserRouter>
      <UserContext.Provider value={currentUser}>
        <div className="App">
          <header className="App-header">
            <NavBar logout={logout} />
            <Routes login={login} signup={signup} />
          </header>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

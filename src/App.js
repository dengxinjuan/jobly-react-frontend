import "./App.css";
import JoblyApi from "./api";
import axios from "axios";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const [token, setToken] = useState(null);

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

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes login={login} signup={signup} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

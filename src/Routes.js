import { BrowserRouter, Route, Switch } from "react-router-dom";
import Company from "./Company";
import CompanyList from "./CompanyList";
import HomePage from "./Homepage";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import ProfileForm from "./ProfileForm";
import SignUpForm from "./SignUpForm";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/companies">
          <CompanyList />
        </Route>
        <Route exact path="/companies/:handle">
          <Company />
        </Route>
        <Route exact path="/jobs">
          <JobList />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignUpForm />
        </Route>
        <Route exact path="/profile">
          <ProfileForm />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;

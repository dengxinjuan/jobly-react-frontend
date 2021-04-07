import { BrowserRouter, Route, Switch } from "react-router-dom";
import Company from "./companies/Company";
import CompanyList from "./companies/CompanyList";
import HomePage from "./Homepage";
import JobList from "./jobs/JobList";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import SignUpForm from "./SignUpForm";
import Job from "./jobs/Job";

function Routes({ login, signup }) {
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
        <Route exact path="/jobs/:id">
          <Job />
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

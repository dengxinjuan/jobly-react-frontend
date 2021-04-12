import { BrowserRouter, Route, Switch } from "react-router-dom";
import Company from "./companies/Company";
import CompanyList from "./companies/CompanyList";
import HomePage from "./Homepage";
import JobList from "./jobs/JobList";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import SignUpForm from "./SignUpForm";
import Job from "./jobs/Job";
import PrivateRoute from "./routes/PrivateRoute";

function Routes({ login, signup }) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <PrivateRoute exact path="/companies">
          <CompanyList />
        </PrivateRoute>
        <Route exact path="/companies/:handle">
          <Company />
        </Route>
        <PrivateRoute exact path="/jobs">
          <JobList />
        </PrivateRoute>
        <Route exact path="/jobs/:id">
          <Job />
        </Route>
        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>
        <Route exact path="/signup">
          <SignUpForm signup={signup} />
        </Route>
        <PrivateRoute exact path="/profile">
          <ProfileForm />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default Routes;

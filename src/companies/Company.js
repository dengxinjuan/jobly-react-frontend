import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import JobCard from "../jobs/JobCard";

const Company = () => {
  const { handle } = useParams(); // grab company handle from route
  const [theCompany, setTheCompany] = useState(null);

  useEffect(
    function getCompanyAndJobsForUser() {
      async function getCompany() {
        setTheCompany(await JoblyApi.getCompany(handle));
      }

      getCompany();
    },
    [handle]
  );

  console.log(theCompany);
  if (!theCompany) return "Loading";

  return (
    <div>
      <List>
        <ListItem>Company:</ListItem>
        <img src={theCompany.logoUrl} alt={theCompany.handle} />
        <ListItemText>
          The Employee Number is {theCompany.numEmployees}
        </ListItemText>
        <ListItemText>{theCompany.description}</ListItemText>

        <ListItem>Available Jobs:</ListItem>
        <Grid container spacing={3} justify="center">
          {theCompany.jobs.map((job) => (
            <Grid style={{ display: "row", padding: 20 }}>
              <JobCard
                id={job.id}
                title={job.title}
                salary={job.salary}
                equity={job.equity}
                companyName={job.companyName}
                companyHandle={job.companyHandle}
              />
            </Grid>
          ))}
        </Grid>
      </List>
    </div>
  );
};

export default Company;

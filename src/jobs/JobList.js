import JobCard from "./JobCard";
import JoblyApi from "../api";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SearchForm from "../SearchForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 25,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "row",
  },
}));

function JobList() {
  const classes = useStyles();
  const [allJobs, setAllJobs] = useState(null);

  useEffect(function getAllJobs() {
    async function getJobs() {
      let data = await JoblyApi.request("jobs");
      setAllJobs(data.jobs);
    }
    getJobs();
  }, []);

  //we use the search and use search form to filter the jobs
  async function search(name) {
    let companies = await JoblyApi.getJobsByTitle(name);
    setAllJobs(companies);
  }

  console.log(allJobs);
  if (!allJobs) return "LOADING!";

  return (
    <div className={classes.root}>
      <hr></hr>
      <h3>Search the jobs.</h3>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SearchForm search={search} />
          </Paper>
        </Grid>

        {allJobs.map((job) => (
          <Grid item xs={3}>
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
    </div>
  );
}

export default JobList;

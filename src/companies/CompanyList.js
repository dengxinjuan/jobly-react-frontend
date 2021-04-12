import { useEffect, useState } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

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

function CompanyList() {
  const classes = useStyles();
  const [allCompany, setAllCompany] = useState(null);

  useEffect(function getall() {
    async function getCompany() {
      setAllCompany(await JoblyApi.getAllCompanies());
    }

    getCompany();
  }, []);

  //console.log(allCompany);
  if (!allCompany) return "loading!";

  /* we decalre the searchCompanyName function to pass in the form*/
  async function search(name) {
    let companies = await JoblyApi.getCompanyByName(name);
    setAllCompany(companies);
    console.log(allCompany);
  }

  return (
    <div className={classes.root}>
      <hr></hr>
      <h3>Search the dream company!</h3>

      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SearchForm search={search} />
          </Paper>
        </Grid>

        {allCompany.map((n) => (
          <Grid item xs={3}>
            <CompanyCard
              name={n.name}
              description={n.description}
              handle={n.handle}
              logoUrl={n.logoUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CompanyList;

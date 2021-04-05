import { useEffect, useState } from "react";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

  console.log(allCompany);
  if (!allCompany) return "loading!";

  return (
    <div className={classes.root}>
      <h1>Hello!!!</h1>

      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Paper className={classes.paper}>Company List!</Paper>
        </Grid>

        {allCompany.map((n) => (
          <Grid item xs={12} sm={6}>
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

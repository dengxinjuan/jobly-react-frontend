import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SearchForm = ({ search }) => {
  const classes = useStyles(); //use material ui
  const [searchTerm, setSearchTerm] = useState(""); //set search term
  /*handle change*/
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  /*handle submit and herit search function*/
  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        type="text"
        label="Search Term"
        variant="outlined"
        color="primary"
        size="small"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} size="large">
        Search!
      </Button>
    </form>
  );
};

export default SearchForm;

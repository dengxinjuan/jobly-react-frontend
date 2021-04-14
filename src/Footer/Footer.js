import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2020 Xinjuan
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

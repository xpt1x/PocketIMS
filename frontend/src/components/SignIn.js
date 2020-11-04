import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { navigate } from "@reach/router";
import Loading from "./common/Loading";
import Api from "../ApiLayer/Api";
import { Chip, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  info: {
    marginRight: theme.spacing(1.5)
  },
}));

function SignIn({ enqueueSnackbar }) {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setLoading(true);

    const uid = document.getElementById("uid").value;
    const pass = document.getElementById("password").value;
    const formdata = new FormData();
    formdata.append("uid", uid);
    formdata.append("password", pass);

    Api.post("/signin", formdata).then((response) => {
      setLoading(false);
      if (!response.ok) {
        console.log(response.problem);
        enqueueSnackbar(response.problem, {variant: 'error'});
      } else {
        // response ok
        if (response.data.error) {
          // project api has responded with an error, set an error state
          enqueueSnackbar(response.data.error, {variant: 'error' });
          console.log(response.data.error);
        } else if (response.data.success) {
          // correct response
          enqueueSnackbar("Login successful", {variant: 'success' });
          localStorage.setItem("uid", uid);
          localStorage.setItem("password", pass);
          navigate("dashboard", { replace: true });
        } else {
          enqueueSnackbar("Server Issue", { variant: -1 });
        }
      }
    });
  };

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      enqueueSnackbar("Welcome! You are now on dashboard", {variant: 'info' });
      navigate("dashboard", { replace: true });
    }
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Loading open={loading} />
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate id="signin-form">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="uid"
            label="UID"
            name="uid"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Grid container justify="flex-end">
        <Chip
          label="PocketIMS is an open source project"
          variant="outlined"
          onClick={() =>  window.open('https://github.com/xpt1x/PocketIMS/', "_blank")}
        />
        <Typography className={classes.info} variant="overline" color="textSecondary" inline align="justify">
          {"Powered by "}
          <Link color="inherit" href="https://github.com/cu-unofficial/uims-api" target="_blank">
            UIMS-API
          </Link>
        </Typography>
        </Grid>
      </Box>
    </Container>
  );
}

export default SignIn;

import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Link,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { create } from "apisauce";
import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const api = create({ baseURL: "https://api.github.com/repos/xpt1x/PocketIMS" });

export default function About(props) {
  const classes = useStyles();
  const [contributors, setContributors] = useState(undefined);
  useEffect(() => {
    api.get("/contributors").then((response) => {
      if (!response.ok) console.log(response.problem);
      else {
        setContributors(response.data);
      }
    });
  }, []);
  return (
    <>
      <Dialog open={props.open} onClose={props.onclose}>
        <DialogTitle>About PocketIMS
          {props.onclose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={props.onclose}>
            <CloseIcon />
          </IconButton>
        ) : null}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            PocketIMS is a better implementation of <Link color="inherit" href="https://github.com/cu-unofficial/uims-api" target="_blank">UIMS-API</Link>, this project picks up where <Link color="inherit" href="https://github.com/xpt1x/SnapAttendance/" target="_blank">SnapAttendance</Link> leaves off and aims to provide faster access to important modules from CUIMS with a better UI and UX.  
            Appliation has a minimal UI built with ReactJS, MaterialUI. User's data is not kept on any server or DB, its stored locally on user's end
          </Typography>
          <Typography gutterBottom>
            Github Repository:{" "}
            <Link href="https://github.com/xpt1x/PocketIMS" target="_blank">
              https://github.com/xpt1x/PocketIMS
            </Link>
          </Typography>
          <Typography variant="button" gutterBottom>
            <strong>Contributors</strong>
          </Typography>

          <AvatarGroup style={{ marginTop: "1%" }} max={5}>
            {contributors !== undefined
              ? contributors.map((contributor, idx) => (
                  <Avatar
                    className={classes.large}
                    alt={contributor.login}
                    src={contributor.avatar_url}
                    key={idx}
                  />
                ))
              : null}
          </AvatarGroup>
        </DialogContent>
      </Dialog>
    </>
  );
}

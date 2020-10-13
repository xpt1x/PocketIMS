import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import { create } from "apisauce";
import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const api = create({ baseURL: "https://api.github.com/repos/xpt1x/PocketIMS" });

export default function About(props) {
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
        <DialogTitle>About PocketIMS</DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            PocketIMS is an <strong>open source</strong> project built using
            ReactJS, MaterialUI and powered by requests, beautifulsoup.
          </Typography>
          <Typography gutterBottom>
            Github Repository:{" "}
            <Typography color="textSecondary">
              https://github.com/xpt1x/PocketIMS
            </Typography>
          </Typography>
          <Typography variant="button" gutterBottom>
            <strong>Contributors</strong>
          </Typography>

          <AvatarGroup style={{ marginTop: "1%" }} max={5}>
            {contributors !== undefined
              ? contributors.map((contributor) => (
                  <Avatar
                    alt={contributor.login}
                    src={contributor.avatar_url}
                  />
                ))
              : null}
          </AvatarGroup>
        </DialogContent>
      </Dialog>
    </>
  );
}

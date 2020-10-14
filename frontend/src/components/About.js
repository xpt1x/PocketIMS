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
            <a href="https://github.com/xpt1x/PocketIMS" target="_blank" style={{color: 'rgba(255, 255, 255, 0.7)'}} >https://github.com/xpt1x/PocketIMS</a>
          </Typography>
          <Typography variant="button" gutterBottom>
            <strong>Contributors</strong>
          </Typography>

          <AvatarGroup style={{ marginTop: "1%" }} max={5}>
            {contributors !== undefined
              ? contributors.map((contributor, idx) => (
                  <Avatar
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

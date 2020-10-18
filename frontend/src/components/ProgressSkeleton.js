import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    marginTop: "60px",
    maxWidth: "860px",
    left: "50%",
    transform: "translatex(-50%)",
  }
}));

export default function ProgressSkeleton(){
  const classes = useStyles();

  const skmap = [1, 2, 3, 4, 5];

  return (
    <div className={classes.root}>
      {skmap.map( elm => (
        <Card key = {elm} style={{"marginTop": "20px", "height" : "160px", "width" : "100%"}}>
        <div >
          <div style={{ marginLeft: "10px", transform: "translateY(30%)"}} >
            <Skeleton variant="text" style={{"height" : "30px", "width" : "50%"}} />
            <Skeleton variant="text" style={{"height" : "20px", "width" : "25%"}} />
            <Skeleton variant="text" style={{"height" : "20px", "width" : "30%"}} />
            <Skeleton variant="text" style={{"height" : "25px", "width" : "20%"}} />
          </div>
          <div style={{ float: "right", top: "50%", transform: "translateY(-66%)", marginRight: "34px"}}>
            <Skeleton variant="circle" width={90} height={90} />
          </div>
        </div>

      </Card>
      ))}
      
    </div>
  );
}

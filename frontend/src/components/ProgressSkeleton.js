import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from '@material-ui/lab/Skeleton';
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
    }
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
            <Skeleton variant="text" style={{"height" : "30px", "width" : "70%"}} />
            <Skeleton variant="text" style={{"height" : "20px", "width" : "35%"}} />
            <Skeleton variant="text" style={{"height" : "20px", "width" : "35%"}} />
            <Skeleton variant="text" style={{"height" : "25px", "width" : "20%"}} />
          </div>
          <div style={{ float: "right", top: "50%", transform: "translateY(-60%)", marginRight: "10px"}}>
            <Skeleton variant="circle" width={90} height={90} />
          </div>
        </div>

      </Card>
      ))}
      
    </div>
  );
}

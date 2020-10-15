import React, { useState } from "react";
import {
  Step,
  Stepper,
  StepLabel,
  Container,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Loading from "./common/Loading";
import { style } from "@material-ui/system";

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#2196f3",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition:
      "width 0.5s, height 0.5s, box-shadow 0.5s, background-color 0.5s",
  },
  active: {
    width: 50,
    height: 50,
    backgroundColor: "#ff5722",
    boxShadow: "0px 0px 20px #ff5722",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
  },
  content: {
    marginTop: theme.spacing(-1),
  },
  div: {
    top: "80px",
    width: "300px",
    marginLeft: "15%",
    position: "absolute",
    display: "flex",
    justifyContent: "left",
  },
}));

function Icon(props) {
  const classes = useColorlibStepIconStyles();
  const Days = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    7: "Sun",
  };
  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: props.active,
      })}
    >
      {Days[String(props.icon)]}
    </div>
  );
}
function Connector() {
  return (
    <div
      style={{
        width: "2px",
        height: "60px",
        backgroundColor: "#fff",
        position: "relative",
        left: "-4px",
      }}
    ></div>
  );
}

function getPresentDay() {
  let date = new Date();
  let day = date.getDay();
  return day - 1;
}

function TimeTable(props) {
  const [activeStep, setActiveStep] = useState(getPresentDay());
  const styles = useStyles();
  const handleStep = (step) => () => {
    setActiveStep(step - 1);
  };
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const day_map = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };
  return props.timetable ? (
    <Container>
      <Stepper
        orientation="vertical"
        nonLinear
        style={{
          top: "60px",
          position: "relative",
          width: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
        }}
        connector={<Connector />}
        activeStep={activeStep}
      >
        {arr.map((elm) => (
          <Step key={elm}>
            <StepLabel StepIconComponent={Icon} onClick={handleStep(elm)} />
          </Step>
        ))}
      </Stepper>
      <div className={styles.div}>
        <Card className={styles.root}>
          <CardHeader
            title="Subject Name"
            subheader="Teacher name"
            avatar={<Avatar>A</Avatar>}
          />
          <CardContent className={styles.content}>
            <Typography variant="body2" color="textSecondary">
              Timings: XYZ - [L]
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  ) : (
    <Loading open={!props.timetable} />
  );
}

export default TimeTable;

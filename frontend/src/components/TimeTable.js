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
import { flexbox, style } from "@material-ui/system";
import "./TimeTable.scss"

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
    transition: ".2s",
  },
  active: {
    transform: "scale(1.5)",
    backgroundColor: "#ff5722",
    boxShadow: "0px 0px 20px #ff5744aa",
    transition: ".2s"
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "300px",
  },

  content: {
    // marginTop: theme.spacing(-1),
  },

  div: {
    // top: "80px",
    // width: "300px",
    // marginLeft: "15%",
    // position: "absolute",
    // display: "flex",
    // justifyContent: "left",
  },

  time_table: {
    position: "relative",
    top: "80px",
    maxWidth: "860px",
    display: "flex",
    flexDirection: "row",
  },

  stepper: {
    display: "flex",
    marginRight: "2%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "transparent",
    paddingLeft: "0",
  },

  step: {
    width: "40px",
    height: "40px",
  },

  card_wrapper: {
    flex: "1",
  },

  card: {
    marginBottom: "20px",
    boxShadow: "0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)",
  }

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
        backgroundColor: "#ededed",
        // position: "relative",
        // left: "-4px",
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
    <Container className={styles.time_table}>
      <Stepper
        orientation="vertical"
        nonLinear
        connector={<Connector />}
        activeStep={activeStep}
        className={styles.stepper}
      >
        {arr.map((elm) => (
          <Step key={elm} className={styles.step}>
            <StepLabel StepIconComponent={Icon} onClick={handleStep(elm)} />
          </Step>
        ))}
      </Stepper>
      <div className={styles.card_wrapper}>
        <Card className={styles.card}>
          <CardHeader
            title="Subject Name"
            subheader="Teacher name"
            avatar={<Avatar>A</Avatar>}
          />
          <CardContent className="">
            <Typography variant="body2" color="textSecondary">
              Timings: XYZ - [L]
            </Typography>
          </CardContent>
        </Card>
        <Card className={styles.card}>
          <CardHeader
            title="Subject Name"
            subheader="Teacher name"
            avatar={<Avatar>A</Avatar>}
          />
          <CardContent className="">
            <Typography variant="body2" color="textSecondary">
              Timings: XYZ - [L]
            </Typography>
          </CardContent>
        </Card>
        <Card className={styles.card}>
          <CardHeader
            title="Subject Name"
            subheader="Teacher name"
            avatar={<Avatar>A</Avatar>}
          />
          <CardContent className="">
            <Typography variant="body2" color="textSecondary">
              Timings: XYZ - [L]
            </Typography>
          </CardContent>
        </Card>
        <Card className={styles.card}>
          <CardHeader
            title="Subject Name"
            subheader="Teacher name"
            avatar={<Avatar>A</Avatar>}
          />
          <CardContent className="">
            <Typography variant="body2" color="textSecondary">
              Timings: XYZ - [L]
            </Typography>
          </CardContent>
        </Card>
        <Card className={styles.card}>
          <CardHeader
            title="Subject Name"
            subheader="Teacher name"
            avatar={<Avatar>A</Avatar>}
          />
          <CardContent className="">
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

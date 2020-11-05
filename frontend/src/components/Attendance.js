import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import AttendanceSkeleton from "./AttendanceSkeleton";
import Container from "@material-ui/core/Container"
// import AttendanceSkeleton from "./AttendanceSkeleton"

const circularProgressTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#34bf58",
    },
    secondary: {
      main: "#e05151",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  content: {
    fontSize: 12,
  },
  fullWidth: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(30),
  },
  boxGreen: {
    borderColor: "#34bf58",
  },
  boxRed: {
    borderColor: "#e05151",
  },
  circular: {
    position: "absolute",
    top: "50%",
    right: "3%",
    transform: "translateY(-50%)",
  },
  colorGreen: {
    color: "#34bf58",
  },
  colorRed: {
    color: "#e05151",
  },
}));

function CircularProgressWithLabel(props) {
  const classes = useStyles();
  return (
    <Box className={classes.circular} position="relative" display="inline-flex">
      <ThemeProvider theme={circularProgressTheme}>
        <CircularProgress size={80} variant="static" {...props} />
        
      </ThemeProvider>
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" component="div" color="textPrimary">
          {props.lectures !== "0" ? (
            props.value
          ) : (
            <Typography color="textSecondary"> NA </Typography>
          )}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};


export default function Attendance({ attendance, setSubject, children }) {
  const classes = useStyles();

  function compareTitles(a, b) {
    if (a.Title < b.Title) return -1;
    else if (a.Title > b.Title) return 1;
    else return 0;
  }

  const cardClickHandler = (subject) => {
    if (parseInt(subject.Total_Delv) !== 0) {
      setSubject(subject);
      return navigate(`/dashboard/attendance/${subject.Code}`);
    }
    return false;
  };

  return (
    <>
      {children}
      {attendance ? (
        <List
          component="ul"
          style={{
            top: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {attendance.sort(compareTitles).map((subject) => (
            <ListItem
              key={subject.Code}
              style={{ maxWidth: "860px", marginBottom: "20px" }}
            >
              <CardActionArea>
                <Card
                  className={classes.fullWidth}
                  onClick={() => {
                    cardClickHandler(subject);
                  }}
                  elevation={10}
                  style={{ marginBottom: "0" }}
                >
                  <Box
                    className={
                      parseFloat(subject.EligibilityPercentage) >= 75.0
                        ? classes.boxGreen
                        : classes.boxRed
                    }
                    borderLeft={7}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {subject.Title.toUpperCase()}
                      </Typography>
                      <CircularProgressWithLabel
                        lectures={
                          parseInt(subject.Total_Delv) !== 0 ? "1" : "0"
                        }
                        value={parseFloat(subject.EligibilityPercentage)}
                        color={
                          parseFloat(subject.EligibilityPercentage) >= 75.0
                            ? "primary"
                            : "secondary"
                        }
                      />
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        className={classes.content}
                      >
                        Total Attended: {subject.Total_Attd}
                      </Typography>
                      <Typography
                        variant="h6"
                        gutterBottom
                        color="textSecondary"
                        className={classes.content}
                      >
                        Total Delivered: {subject.Total_Delv}
                      </Typography>
                      <Typography
                        variant="overline"
                        gutterBottom
                        color="textPrimary"
                        className={classes.content}
                      >
                        [{subject.Code}]
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </CardActionArea>
            </ListItem>
          ))}
        </List>
      ) : (
        <Container>
          <AttendanceSkeleton />
        </Container>
      )}
    </>
  );
}

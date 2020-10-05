import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Lectures from "./Lectures";
import './TimeTable.css';
import { navigate } from "@reach/router";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minWidth: "100%",
  }
}));

export default function Timetable({timetable}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  if(!timetable){
    navigate('/dashboard')
  }
  console.log(timetable);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className="tabs"
        scrollButtons="on"
      >

        <Tab label="Mon  " className="Tabstyle" />
        <Tab label="Tue  " className="Tabstyle" />
        <Tab label="Wed  " className="Tabstyle" />
        <Tab label="Thu  " className="Tabstyle" />
        <Tab label="Fri  " className="Tabstyle" />
        <Tab label="Sat  " className="Tabstyle" />
        <Tab label="Sun  " className="Tabstyle" />
        
      </Tabs>
      <TabPanel value={value} index={0} className="TabPanel">
        <Lectures />
      </TabPanel>
      <TabPanel value={value} index={1} className="TabPanel">
        <Lectures />
      </TabPanel>
      <TabPanel value={value} index={2} className="TabPanel">
        <Lectures />
      </TabPanel>
      <TabPanel value={value} index={3} className="TabPanel">
        <Lectures />
      </TabPanel>
      <TabPanel value={value} index={4} className="TabPanel">
        <Lectures />
      </TabPanel>
      <TabPanel value={value} index={5} className="TabPanel">
        <Lectures />
      </TabPanel>
      <TabPanel value={value} index={6} className="TabPanel">
        <Lectures />
      </TabPanel>
    </div>
  );
}

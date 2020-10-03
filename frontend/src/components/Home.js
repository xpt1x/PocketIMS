import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Attendance from "./Attendance";
import Timetable from "./Timetable";


const Home = (props) => {
  
  const { match , history } = props;
  const { params } = match;
  const { page } = params;

   const tabNameToIndex = {
    0: "attendance",
    1: "timetable"
  };

  const indexToTabName = {
    attendance: 0,
    timetable: 1
  };


  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="Attendance" />
          <Tab label="Timetable" />
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <Attendance />}
      {selectedTab === 1 && <Timetable />}
    </>
  );
};

export default Home;

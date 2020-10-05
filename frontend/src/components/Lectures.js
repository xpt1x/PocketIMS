import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FlatList from "flatlist-react";
import './Lectures.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Lectures() {
  const [timings, setTimnings] = useState({
    time1: {
      sname: "A",
      type: "practical",
      tname: "Sir/Mam",
      group: "A/B"
    },
    time2: {
      sname: "B",
      type: "practical",
      tname: "Sir/Mam",
      group: "B/A"
    },
    time3: {
      sname: "C",
      type: "theory",
      tname: "Sir/Mam",
      group: "A/B/C"
    },
    time4: {
      sname: "D",
      type: "theory",
      tname: "Sir/Mam",
      group: "A/B/C"
    },
    time5: {
      sname: "E",
      type: "Practical",
      tname: "Sir/Mam",
      group: "A/B/C"
    },
    time6: {
      sname: "F",
      type: "theory",
      tname: "Sir/Mam",
      group: "A/B/C"
    }

  });

  var class_details = [];
  Object.entries(timings).map(([key, values]) =>
    class_details.push({
      ...values,
      time: key
    })
  );


  const classes = useStyles();

  function FormRow(props) {
    // console.log(class_details);

    return (
      <div style={{
          width:"100%"
      }}>
        <div className="main" >

          <div style={{ flex: 1 }}>
              {props.time}
            </div>

          <div style={{ flex: 4 }}  className="parentDiv">
                <div  className="semiParentDiv">
                    <div  className="childDiv">
                        {props.sname}
                    </div>

                    <div  className="childDiv">
                        {props.type}
                    </div>
                </div>
                <div  className="semiParentDiv">
                    <div  className="childDiv">
                        {props.tname}
                    </div>

                    <div  className="childDiv">
                        {props.group}
                    </div>
                </div>
            

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <FlatList list={class_details} renderItem={FormRow} />
    </div>
  );
}


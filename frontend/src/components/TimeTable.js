import React, { useState } from 'react'
import {Step, Stepper, StepLabel, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#2196f3',
      zIndex: 1,
      color: "#fff",
      width: 40,
      height: 40,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: "pointer",
      transition: "width 0.5s, height 0.5s"
    },
    active: {
      width: 60,
      height: 60,
      backgroundColor: "#ff5722",
    }
});

function Icon(props){
    const classes = useColorlibStepIconStyles();
    const Days = {1: "Mon", 2: "Tue", 3: "Wed", 4: "Thu", 5: "Fri", 6: "Sun"}
    return (
        <div className={clsx(classes.root, {
            [classes.active]: props.active,
          })}>
            {Days[String(props.icon)]}
        </div>
    )
}
function Connector(){
    return (
        <div style={{width: "2px", height: "60px", backgroundColor: '#fff', position: "relative", left: "-4px"}}></div>
    )
}


function TestTimetable2() {
    const [activeStep, setActiveStep] = useState(0)

    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    const arr = [0,1,2,3,4,5]
    return (
        <Container>
            <Stepper orientation="vertical" nonLinear 
            style={{top: "60px", position: "relative", width: "40px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent"}}
            connector={<Connector/>}
            activeStep={activeStep}>
                {arr.map(elm => (
                    <Step>
                        <StepLabel StepIconComponent={Icon} onClick={handleStep(elm)}/>
                    </Step>
                ))}
            </Stepper>
        </Container>
    )
}

export default TestTimetable2

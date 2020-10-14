import React, { useState } from 'react'
import {Step, Stepper, StepLabel, Container} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#000',
      width: 40,
      height: 40,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: "pointer"
    },
    active: {
        backgroundColor: '#2196f3',
        color: "#fff"
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
        <div style={{width: "2px", height: "60px", backgroundColor: '#ccc', position: "relative", left: "-4px"}}></div>
    )
}


function TestTimetable2() {
    const [activeStep, setActiveStep] = useState(0)

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <Container>
            <Stepper orientation="vertical" nonLinear 
            style={{top: "60px", position: "relative", width: "40px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "transparent"}}
            connector={<Connector/>}
            activeStep={activeStep}>
                <Step>
                    <StepLabel StepIconComponent={Icon} onClick={handleStep(0)}/>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={Icon} onClick={handleStep(1)}/>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={Icon} onClick={handleStep(2)}/>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={Icon} onClick={handleStep(3)}/>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={Icon} onClick={handleStep(4)}/>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={Icon} onClick={handleStep(5)}/>
                </Step>
            </Stepper>
        </Container>
    )
}

export default TestTimetable2

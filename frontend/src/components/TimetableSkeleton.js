import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Card, CardContent, CardHeader, Container, makeStyles, Step, StepLabel, Stepper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      top: "60px",
      maxWidth: "860px",
      left: "52%",
      transform: "translatex(-50%)",
      display: "flex",
      flexDirection: "row",
    },
    time_table: {
        display: "flex",
        flexDirection: "row",
    },
    card: {
        marginTop: "20px",
        height: "150px",
        width: "95%"
    },
    chip1: {
        marginLeft: "1%",
        borderRadius: "100px"
    },
    chip2: {
        marginLeft: "2%",
        borderRadius: "100px",
    },
    cardContent: {
        paddingTop: "10px", 
        display: "flex", 
        alignItems: "center"
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
    connector: {
    width: "2px",
    height: "60px",
    backgroundColor: "#ededed",
    },
  }));

export default function TimetableSkeleton ()
{
    function Icon(){
        return <Skeleton variant="circle" width={40} height={40} />
    }
    
    const classes = useStyles();
    const skmap = [1,2,3,4,5]
    const stMap = [1,2,3,4,5,6,7]
    return(
        <Container>
            <div className={classes.root}>
                <Stepper
                    orientation="vertical"
                    nonLinear
                    connector={<Skeleton variant="rect" width={2} height={60} />}
                    className={classes.stepper}
                >
                    {stMap.map((elm) => (
                        <Step key={elm} className={classes.step}>
                        <StepLabel StepIconComponent={Icon} />
                    </Step>
                    ))}
                </Stepper>
                <div style={{width: "100%", marginBottom: "20px"}}>
                    {skmap.map( elm => (
                        <Card key = {elm} className={classes.card}>
                            <CardHeader
                            avatar={<Skeleton variant="circle" width={40} height={40} />}
                            title={<Skeleton variant="text" width={180} height={20} />}
                            subheader={<Skeleton variant="text" width={168} height={18} />}
                            >
                            </CardHeader>
                            <CardContent className={classes.cardContent}>
                                <Skeleton className={classes.chip1} variant="rect"  width={114} height={32} />
                                <Skeleton className={classes.chip2} variant="rect"  width={67} height={24} />                    
                            </CardContent>
                        </Card>)
                    )}
                </div>
            </div>
        </Container>
    )
}
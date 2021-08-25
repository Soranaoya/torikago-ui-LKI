import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import RoomCard from "/pages/roomcard";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    textAlign: 'center',
  },
  containerStyle: {
    width: 1000, 
    height: 600,
    display: 'inline-block',
  },
  rowStyle: {
    padding:"0px",
  },
  colStyle: {
    padding:"3px",
  },
}));

export default function StackingPlan() {
  const myclass = useStyles();

  function FormRow() {
    return (
      // <React.Fragment>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='M-1' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
          <RoomCard roomid='M-2' roomtype='9'/>
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='L-3' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='O-4' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='P-5' roomtype='2' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='Q-6' roomtype='3' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='R-7' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='S-8' roomtype='1' />
          </Grid>
        </Grid>
      // </React.Fragment>
    );
  }

  function FormRow3() {
    return (
      // <React.Fragment>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='M-1' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='M-2' roomtype='1'/>
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='L-3' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='O-4' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='P-5' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='Q-6' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='R-7' roomtype='1' />
          </Grid>
          <Grid item xs={1} className={myclass.colStyle}>
            <RoomCard roomid='S-8' roomtype='1' />
          </Grid>
        </Grid>
      // </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      // <React.Fragment>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={8} sm={4} className={myclass.colStyle}>
            <RoomCard roomid='M-2' roomtype='1' />
          </Grid>
          <Grid item xs={8} sm={2} className={myclass.colStyle}>
            <RoomCard roomid='L-3' roomtype='1' />
          </Grid>
          <Grid item xs={8} sm={2} className={myclass.colStyle}>
            <RoomCard roomid='O-4' roomtype='1' />
          </Grid>
        </Grid>
      // </React.Fragment>
    );
  }

  return (
    <div className={myclass.root}>
      <div className={myclass.containerStyle}>
        <Grid container style={{padding:'3px'}} alignItems="center" justifyContent="center">
          <Card style={{ backgroundColor:'lightblue',marginBottom:'20px',marginTop:'10px',width:'66%' }}>
            <Typography component="h4" variant="h4">
            鳥かごUI
            </Typography>
          </Card>
          <Grid container item xs={"auto"} className={myclass.rowStyle}>
            <FormRow />
          </Grid>
          <Grid container item xs={"auto"} className={myclass.rowStyle}>
            <FormRow />
          </Grid>
          <Grid container item xs={"auto"} className={myclass.rowStyle}>
            <FormRow />
          </Grid>
          <Grid container item xs={"auto"} className={myclass.rowStyle}>
            <FormRow3 />
          </Grid>
          <Grid container item xs={"auto"} className={myclass.rowStyle}>
            <FormRow3 />
          </Grid>
          <Grid container item xs={"auto"} className={myclass.rowStyle}>
            <FormRow3 />
          </Grid>
          <Grid container item xs={"auto"} className={myclass.rowStyle}>
            <FormRow2 />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}


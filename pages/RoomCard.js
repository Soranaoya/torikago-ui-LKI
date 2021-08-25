import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Popup from './Popup';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50px",
  },
}));

export default function RoomCard(props) {
  const myclass = useStyles();
  const {roomtype, roomid} = props;
  var backStyles = ' roomStyle1 ';

  // roomtype : 9 ：部屋なし　１：使用中　２：空部屋
  if (roomtype == '9') {
    return (<div></div>);
  }

  if (roomtype == '1') {
    backStyles = ' roomStyle1 ';
  } else if (roomtype == '2') {
    backStyles = ' roomStyle2 ';
  } else if (roomtype == '3') {
    backStyles = ' roomStyle3 ';
  }

  return (
    <CardActionArea>
    <Card className={backStyles + myclass.root}>
       <Popup roomid={roomid} roomtype={roomtype} backStyles={backStyles} />
    </Card>
    </CardActionArea>
  );
}

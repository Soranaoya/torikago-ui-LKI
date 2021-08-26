import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    paper: {
        // padding: theme.spacing(1),
        textJustify: "auto",
        textAlign: 'center',
        verticalAlign : 'middle',
        color: theme.palette.text.secondary,
        backgroundColor: "lightblue",
        minWidth: "50px",
        width: "100%",
        height: "50px",
        opacity: 0.8,
        alignContent: "auto",
    },
    roomButton:{
      width: '100%',
      height: '100%',
    }
  }));

const styles = (theme) => ({
root: {
    margin: 0,
    padding: theme.spacing(2),
    innerWidth: 300,
    innerHeight: 200,
},
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
      </MuiDialogTitle>
    );
  });

const DialogContent = withStyles((theme) => ({
root: {
    padding: theme.spacing(2),
},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
root: {
    margin: 0,
    padding: theme.spacing(1),
},
}))(MuiDialogActions);

const HtmlTooltip = withStyles((theme) => ({
tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 520,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
},
}))(Tooltip);

export default function Popup(props) {
    const myclass = useStyles();
    const {roomtype, roomid, backStyles} = props;

    return (
        <HtmlTooltip arrow placement="right"
                title={
                <React.Fragment>
                    <DialogTitle id="customized-dialog-title">
                    95-B type 3LDK + WIC + SIC + TR
                    </DialogTitle>
                    <DialogContent dividers>
                    <Typography gutterBottom>
                        専有面積/ 95.26㎡(約28.81坪)　バルコニー面積/9.05㎡
                    </Typography>
                    <Typography gutterBottom>
                        <img src={"/images/houselayout1.png"} width="400" height="300"/>
                    </Typography>
                    <Typography gutterBottom>
                        空部屋
                    </Typography>
                    </DialogContent>
                    <DialogActions>
                    部屋番号：{roomid}
                    </DialogActions>
                </React.Fragment>
                }
        >
            <Paper className={backStyles + myclass.paper} xs={"auto"} style={{width:'100%'}}>
            <Button className={backStyles + myclass.roomButton} autoFocus color="primary" href="http://sora-tech.net/floorplan">
                {roomid}
            </Button>
            </Paper>
        </HtmlTooltip>
    );
}

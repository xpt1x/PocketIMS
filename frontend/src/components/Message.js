import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Message({message}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') 
      return;
    setOpen(false);
  };

  var variant = 'warning'
  switch (message.variant) {
    case -1:
      variant = 'error'
      break;
    case 1:
      variant = 'success'
      break;
    case 0:
      variant = 'info'
      break;
    default:
      break;
  }

  return (
    <div className={classes.root}>
      <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant}>
          {message.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
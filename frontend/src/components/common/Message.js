import React, {useState} from 'react';
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
  const [open, setOpen] = useState(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') 
      return;
    setOpen(false);
  };

  var variant_text = 'warning'
  switch (message.variant) {
    case -1:
      variant_text = 'error'
      break;
    case 1:
      variant_text = 'success'
      break;
    case 0:
      variant_text = 'info'
      break;
    default:
      break;
  }

  return (
    <div className={classes.root}>
      <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={variant_text}>
          {message.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
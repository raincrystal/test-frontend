import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
  Button,
  Link,
  Typography,
  withStyles,
} from '@material-ui/core';
import MuiDialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/styles';

const Dialog = withStyles((theme) => ({
  paper: {
    padding: theme.spacing(3, 5, 1, 5),
  },
}))(MuiDialog);

const useStyles = makeStyles((theme) => ({
  mh: {
    margin: theme.spacing(0, 1),
  },
  title: {
    fontSize: 35,
    fontWeight: 600,
    textAlign: 'center',
  },
  otherLink: {
    display: 'flex',
    padding: theme.spacing(2, 0),
  },
  actions: {
    margin: theme.spacing(2, 0),
  },
}));

const CustomModal = (props) => {
  const classes = useStyles();

  const { handleLogin } = props;

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    handleLogin();
  };

  const preventDefault = (event) => event.preventDefault();

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
      <DialogTitle>
        <Typography className={classes.title}>Welcome to Login</Typography>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Username"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        <div className={classes.otherLink}>
          <Link className={classes.forgotLink} href="/login" onClick={preventDefault}>
            Forgot username?
          </Link>
          <Typography className={classes.mh}>or</Typography>
          <Link className={classes.forgotLink} href="/login" onClick={preventDefault}>
            Forgot password?
          </Link>
        </div>
        <div className={classes.otherLink}>
          <Link className={classes.createLinK} href="/login" onClick={preventDefault}>
            Create account
          </Link>
        </div>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

CustomModal.propTypes = {
  handleLogin: PropTypes.func,
};

CustomModal.defaultProps = {
  handleLogin: () => {},
};

export default CustomModal;

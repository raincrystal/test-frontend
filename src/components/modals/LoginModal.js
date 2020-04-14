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
  InputLabel,
  FormControl,
} from '@material-ui/core';
import MuiDialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/styles';
import NativeSelect from '@material-ui/core/NativeSelect';

const Dialog = withStyles((theme) => ({
  root: {
    '& .MuiBackdrop-root': {
      display: 'none',
    },
  },
  paper: {
    padding: theme.spacing(3, 3, 1, 3),
    background: '#f7f7f7',
    border: '3px solid #0066cc',
    borderRadius: '20px',
    boxShadow: '0 0 3px 3px #EEEEEE',
    maxWidth: 400,
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
    padding: theme.spacing(1, 0),
  },
  actions: {
    margin: theme.spacing(1, 0),
  },
  formControl: {
    margin: theme.spacing(1, 0),
  },
}));

const roles = [
  'System Admin',
  'Contract Specialist',
  'Small Business Specialist',
  'Technical Specialist',
  'Financial',
  'Vendor/Contractor',
  'Logistis',
];

const CustomModal = (props) => {
  const classes = useStyles();

  const { handleLogin } = props;

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    handleLogin();
  };

  const roleOptions = roles.map((r) => ({
    value: r.split(' ').join('_'),
    label: r,
  }));
  const [role, setRole] = useState('');
  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const preventDefault = (event) => event.preventDefault();

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
      <DialogTitle>
        <Typography className={classes.title}>Login</Typography>
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
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-helper">Role</InputLabel>
          <NativeSelect
            value={role}
            onChange={handleChangeRole}
          >
            <option value=""></option>
            {roleOptions.map((userRole) => (
              <option value={userRole.value} key={userRole.value}>{userRole.label}</option>
            ))}
          </NativeSelect>
        </FormControl>
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
  handleLogin: () => {
  },
};

export default CustomModal;

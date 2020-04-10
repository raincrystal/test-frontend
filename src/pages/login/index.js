import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import LoginModal from '../../components/modals/LoginModal';
import backgroundImage from '../../assests/blockchain_3.jpg';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 80,
    fontWeight: 600,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: theme.spacing(8),
  },
  wrapper: {
    width: '100%',
    height: '100vh',
  },
  background: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const Login = () => {
  const classes = useStyles();

  const [gotoHomepage, setGotoHomepage] = useState(false);
  const handleLogin = () => {
    setGotoHomepage(true);
  };

  if (gotoHomepage) {
    return <Redirect to="/homepage" />;
  }

  return (
    <div className={classes.wrapper}>
      <img src={backgroundImage} className={classes.background} alt="background" />
      <Typography className={classes.title}>Market Research Tool</Typography>
      <LoginModal handleLogin={handleLogin} />
    </div>
  );
};

export default Login;

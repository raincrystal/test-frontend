import React from 'react';

import { makeStyles } from '@material-ui/styles';
import TopBar from '../../components/topbar';
import CustomTabs from '../../components/tabs';

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

const Homepage = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <TopBar />
      <CustomTabs />
    </div>
  );
};

export default Homepage;

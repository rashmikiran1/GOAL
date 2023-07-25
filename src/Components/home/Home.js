import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../Store/Auth-Context';
import Button from '../UI/Button/Button';

const Home = (props) => {
  const cts = useContext(AuthContext)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={cts.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;

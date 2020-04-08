import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import styles from './styles';

const Header: React.FC<{}> = () => {
  const classes = styles();

  return (
    <Grid
      container
      component="header"
      alignItems="center"
      justify="center"
      className={classes.header}
    >
      <Typography
        variant="button"
        align="center"
        color="primary"
        className={classes.logo}
      >
        LocoLoco
      </Typography>
    </Grid>
  );
};

export default Header;

import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import styles from './styles';

const Landing: React.FC<{}> = () => {
  const classes = styles();

  return (
    <Grid container direction="column" alignContent="center" className={classes.page}>
      <section className={classes.section}>
        <Typography component="h1" variant="h3" align="center">
          Great food in your community.
        </Typography>
        <Typography component="p" align="center">
          We decided to make something to help local communities find great food in their area...
          without paying the middle man.
        </Typography>
      </section>
      <section className={classes.section}>
        <Typography component="h2" variant="h3" align="center">
          List your business today
        </Typography>
        <Typography component="p" align="center">
          Getting setup is easy - it takes less than 10 minutes. Oh, and it&apos;s free of course...
        </Typography>
      </section>
    </Grid>
  );
};

export default Landing;

import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import styles from '../styles';

const PrivacyPolicy: React.FC = () => {
  const classes = styles();

  return (
    <Grid container direction="column" alignContent="center" className={classes.page}>
      <section className={classes.section}>
        <Typography component="h1" variant="h3" align="center" className={classes.title}>
          Privacy Policy
        </Typography>
        <Typography component="p" align="center" className={classes.info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non auctor quam.
          Donec ac pretium ante. Donec fermentum dolor nisl, et venenatis magna accumsan sed.
          Donec imperdiet tempor sapien, sit amet fermentum ante blandit sit amet.
          Cras finibus elementum euismod. Nam sodales euismod diam, vel faucibus tortor
          tincidunt et.
          Proin id dui a nulla iaculis fringilla. Mauris cursus egestas tempus.
          Phasellus ut nisi varius, faucibus nunc ac, congue tortor.
          Vestibulum vel ligula eget ligula gravida malesuada.
        </Typography>
      </section>
    </Grid>
  );
};

export default PrivacyPolicy;

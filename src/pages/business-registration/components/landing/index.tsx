import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';

import styles from './styles';

type Props = {
  goToNextStep: () => void;
}

const Landing: React.FC<Props> = ({ goToNextStep }: Props) => {
  const classes = styles();

  return (
    <Grid container direction="column" alignContent="center">
      <section className={classes.section}>
        <Typography component="h1" variant="h3" align="center" className={classes.title}>
          How this works
        </Typography>
        <Typography component="h2" variant="h4" align="center" className={classes.subtitle}>
          What we do...
        </Typography>
        <Typography component="p" align="center" className={classes.info}>
          List your restaurant so it&apos;s easy to find
          <br />
          Host restaurant details and menus
          <br />
          Allow you to take orders/payments from customers
          <br />
          Alert you on who has ordered what
          <br />
          Share their contact details
        </Typography>
        <Typography component="h2" variant="h4" align="center" className={classes.subtitle}>
          ... and what we don&apos;t
        </Typography>
        <Typography component="p" align="center" className={classes.info}>
          Make deliveries
          <br />
          Take money from your customers
          <br />
          Handle customer complaints or refunds for orders
          <br />
          Take responsibility for accuracy of information
        </Typography>
      </section>
      <section className={classes.section}>
        <Button
          color="primary"
          size="large"
          variant="contained"
          className={classes.submitButton}
          onClick={goToNextStep}
        >
          Next: About you
        </Button>
      </section>
    </Grid>
  );
};

export default Landing;

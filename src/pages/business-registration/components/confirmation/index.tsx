import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { DASHBOARD_PATH } from '@routes';

import styles from './styles';

const Confirmation: React.FC<{}> = () => {
  const classes = styles();
  const history = useHistory();

  const goToDashBoard: void = () => {
    history.push(DASHBOARD_PATH);
  };

  return (
    <Grid container direction="column" alignContent="center" className={classes.page}>
      <section className={classes.section}>
        <Typography component="h1" variant="h4" align="center" className={classes.subtitle}>
          All done!
        </Typography>
        <Typography component="p" className={classes.info}>
          Thanks for sending us your business’s details
        </Typography>
        <Typography component="p" className={classes.info}>
          Before your listing goes live we’ll check it over and get in touch if we spot any gaps.
          <br />
          This should take less than 48 hours.
        </Typography>
        <Typography component="p" className={classes.info}>
          Then you can start taking orders, so keep an eye on your inbox!
        </Typography>
      </section>
      <section className={classes.section}>
        <Button
          color="primary"
          size="large"
          variant="contained"
          className={classes.submitButton}
          onClick={goToDashBoard}
        >
          Go to Dashboard
        </Button>
      </section>
    </Grid>
  );
};

export default Confirmation;

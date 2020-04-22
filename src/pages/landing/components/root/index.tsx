import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import RegisterForm from '../../containers/register-form';

import styles from './styles';

const Landing: React.FC<{}> = () => {
  const classes = styles();

  return (
    <Grid container direction="column" alignContent="center" className={classes.page}>
      <section className={classes.section}>
        <Typography component="h1" variant="h4" align="center" className={classes.subtitle}>
          Our Purpose
        </Typography>
        <Typography component="p" align="center" className={classes.info}>
          To reconnect communities and by doing so improve the lives of people in those communities
        </Typography>
        <Typography component="h2" variant="h4" align="center" className={classes.subtitle}>
          The Problem
        </Typography>
        <Typography component="p" align="center" className={classes.info}>
          For many businesses, digital is still difficult. They find it hard to build
          a relationshipwith customers and to communicate effectively with them.
          <br />
          Often they turn to social networks as a stop-gap, or outsource the problem
          to third parties who take valuable margin, while delivering little incremental value.
          <br />
          We believe it’s time for a new model that empowers businesses without getting in the way.
        </Typography>
        <Typography component="h2" variant="h4" align="center" className={classes.subtitle}>
          Introducing Loql
        </Typography>
        <Typography component="p" align="center" className={classes.info}>
          Loql is a simple to use, affordable and open digital platform to allow small
          businesses to interact more effectively with their communities.
          <br />
          Customers get an experience that is a joy to use, secure and trustworthy.
          <br />
          Businesses get a new digital channel without the massive overheads that come
          with working with a third party. The relationship with the customer, margin,
          and data are all in the hands of the business - not a software company.
        </Typography>
        <Typography component="h2" variant="h4" align="center" className={classes.subtitle}>
          By the community, for the community
        </Typography>
        <Typography component="p" align="center" className={classes.info}>
          We’re a team of volunteers doing this because we think it’s the right thing to do
          - particularly during a crisis. If you’re interested in helping out, get in touch
          - we’d love to hear from you.
        </Typography>
      </section>
      <section className={classes.section}>
        <Typography component="p" align="center">
          If you’re a business and interested in joining our pilot programme, sign up here.
        </Typography>
        <RegisterForm />
      </section>
    </Grid>
  );
};

export default Landing;

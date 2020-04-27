import React from 'react';
import axios from 'axios';
import { setAuthorizationHeader } from '@config/axios';
import {
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import { toJS } from 'mobx';
import { useStore } from '@store';

import styles from './styles';

type Props = {
  goToNextStep: () => void;
}

const Review: React.FC<Props> = ({ goToNextStep }: Props) => {
  const classes = styles();
  const { trade, session } = useStore();
  const { token } = { ...toJS(session) };

  const { register: registrationData } = { ...toJS(trade) };

  const submit: void = () => {
    setAuthorizationHeader(token);
    axios.post(
      '/restaurants/create',
      { registrationData },
    )
      .then((response) => {
        console.log(response);
        goToNextStep();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    userDetails,
    businessDetails,
    deliveryDetails,
    paymentDetails,
  } = registrationData;
  
  // Disable to allow formatting of user data
  /* eslint-disable react/jsx-one-expression-per-line */
  return (
    <Grid container direction="column" alignContent="center">

      <section className={classes.section}>
        <Typography component="h1" variant="h4" align="center" className={classes.title}>
          Review
        </Typography>
        <Typography component="p" align="center">
          You can edit all of this information later
        </Typography>
      </section>

      <section className={`${classes.section} ${classes.sectionBorder}`}>
        <Typography component="h3" variant="h4" align="center" className={classes.subtitle}>
          Your Info
        </Typography>
        <Typography component="p">
          {userDetails.firstName} {userDetails.lastName}
        </Typography>
        <Typography component="p">
          {userDetails.email}
        </Typography>
        <Typography component="p">
          Role: { userDetails.role }
        </Typography>
        <Typography component="p">
          { userDetails.phone }
        </Typography>
      </section>

      <section className={`${classes.section} ${classes.sectionBorder}`}>
        <Typography component="h3" variant="h4" align="center" className={classes.subtitle}>
          Business Info
        </Typography>
        <Typography component="p">
          {businessDetails.name}, {businessDetails.address.number} {businessDetails.address.street},
          {' '} {businessDetails.address.city},
          {' '} {businessDetails.address.county} {businessDetails.postcode}
        </Typography>
        <Typography component="p">
          {businessDetails.phone}
        </Typography>
        <Typography component="p">
          {businessDetails.website}
        </Typography>
        <Typography component="p">
          Type(s): {businessDetails.cuisineType.join(', ')}
        </Typography>
        <Typography component="p">
          Service(s): {businessDetails.offerType.join(', ')}
        </Typography>
        <Typography component="p">
          Payment: {paymentDetails.type.join(', ')}
        </Typography>
        <Typography component="p">
          Open for: {businessDetails.openFor.join(', ')}
        </Typography>
        <Typography component="p">
          Open on: {businessDetails.openDays.join(', ')}
        </Typography>
        <Typography component="p">
          Min. Order Value: &pound;{Number.parseFloat(deliveryDetails.minimumOrder).toFixed(2)}
        </Typography>
        <Typography component="p">
          {/* Fix NaN error */}
          Delivery Charge: &pound;{Number.parseFloat(deliveryDetails.deliveryCharge).toFixed(2)}
        </Typography>
        <Typography component="p">
          Delivery Postcodes: {deliveryDetails.acceptedPostcodes}
        </Typography>
      </section>

      <section className={`${classes.section} ${classes.sectionBorder}`}>
        Before your listing goes live we’ll check it over and get in touch if we spot any gaps.
        This should take less than 48 hours.
      </section>

      <section className={classes.section}>
        <Button
          color="primary"
          size="large"
          variant="contained"
          className={classes.submitButton}
          onClick={submit}
        >
          Submit Listing
        </Button>
      </section>
    </Grid>
  );
};

export default Review;

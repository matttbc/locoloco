import React from 'react';
import { Form, FormikProps } from 'formik';
import { Button, Typography } from '@material-ui/core';

import FormField from '@components/form-field';

import styles from '@styles/forms';

export type Values = {
  deliveryOptions: string[];
  minimumOrder: string;
  deliveryCharge: string;
  acceptedPostcodes: string[];
};

const DeliveryInfoForm: React.FC<FormikProps<Values>> = () => {
  const classes = styles();

  return (
    <div className={classes.formWrapper}>
      <Typography component="h1" variant="h4" align="center" className={classes.title}>
        Getting food to your customers
      </Typography>
      <Form className={classes.form}>
        <div className={classes.formGroup}>
          <FormField
            label="How can your customers get their food from your resturant?"
            name="deliveryOptions"
            fullWidth
            type="checkboxGroup"
            options={[
              { label: 'Takeaway', value: 'takeaway' },
              { label: 'Local Delivery', value: 'localDelivery' },
            ]}
            helpText="Select all that apply"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="Enter your minimum order value"
            name="minimumOrder"
            fullWidth
            type="text"
            helpText="If you don't have one then leave blank"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="Enter your delivery charge"
            name="deliveryCharge"
            fullWidth
            type="text"
            helpText="If delivery is free then enter 0"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="Enter the postcode areas you deliver to"
            name="acceptedPostcodes"
            fullWidth
            type="text"
            helpText="Enter a list of post code areas separated by a comma e.g N22, N15"
          />
        </div>
        <div className={classes.formGroup}>
          <Button
            type="submit"
            color="primary"
            size="large"
            variant="contained"
            className={classes.submitButton}
          >
            Next: Payment Info
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default DeliveryInfoForm;

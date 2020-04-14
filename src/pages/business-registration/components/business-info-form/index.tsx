import React from 'react';
import { Form, FormikProps } from 'formik';
import { Button, Typography } from '@material-ui/core';

import FormField from '@components/form-field';

import styles from '@styles/forms';

export type Values = {
  name: string;
  postcode: string;
  offerType: string[];
  cuisineType: string[];
}

const BusinessInfoForm: React.FC<FormikProps<Values>> = () => {
  const classes = styles();

  return (
    <div className={classes.formWrapper}>
      <Typography component="h1" variant="h4" align="center" className={classes.title}>
        Tell us about your restaurant
      </Typography>
      <Form className={classes.form}>
        <div className={classes.formGroup}>
          <FormField
            label="Restaurant name"
            name="name"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="Restaurant postcode"
            name="postcode"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="What do you offer?"
            name="offerType"
            fullWidth
            type="checkboxGroup"
            options={[
              { label: 'Takeaway', value: 'takeaway' },
              { label: 'Delivery', value: 'delivery' },
              { label: 'Pantry', value: 'pantry' },
            ]}
            helpText="Select at least one"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="What cuisines do you offer?"
            name="cuisineType"
            fullWidth
            type="checkboxGroup"
            options={[
              { label: 'French', value: 'french' },
              { label: 'Italian', value: 'italian' },
              { label: 'Japanese', value: 'japanese' },
              { label: 'Chinese', value: 'chinese' },
            ]}
            helpText="Select at least one"
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
            Next: Restaurant details
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BusinessInfoForm;

import React from 'react';
import { Form, FormikProps } from 'formik';
import { Button, Typography } from '@material-ui/core';

import FormField from '@components/form-field';

import styles from '@styles/forms';

export type Values = {
  address: {
    street: string;
    number: string;
    city: string;
    county: string;
  };
  phone: string;
  website: string;
  openFor: string[];
  openDays: string[];
}

const BusinessDetailsForm: React.FC<FormikProps<Values>> = () => {
  const classes = styles();

  return (
    <div className={classes.formWrapper}>
      <Typography component="h1" variant="h4" align="center" className={classes.title}>
        More about your restaurant
      </Typography>
      <Form className={classes.form}>
        <div className={classes.formGroup}>
          <FormField
            label="Street"
            name="address.street"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="House number"
            name="address.number"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="City"
            name="address.city"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="County"
            name="address.county"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="Restaurant phone number"
            name="phone"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="Restaurant website"
            name="website"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <Typography component="p" variant="h5">
            Customise your page
          </Typography>
          <Typography component="p">
            Add a logo an image to your listing. this can also be done later.
          </Typography>
          <FormField
            label="Upload your logo"
            name="logo"
            fullWidth
            type="file"
            accept="image/*"
          />
          <FormField
            label="Upload an image"
            name="image"
            fullWidth
            type="file"
            accept="image/*"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="What are you open?"
            name="openFor"
            fullWidth
            type="checkboxGroup"
            options={[
              { label: 'Breakfast', value: 'breakfast' },
              { label: 'Lunch', value: 'lunch' },
              { label: 'Dinner', value: 'dinner' },
            ]}
            helpText="Select at least one. Opening times added later."
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="What days are you open?"
            name="openDays"
            fullWidth
            type="checkboxGroup"
            options={[
              { label: 'Sunday', value: 'sunday' },
              { label: 'Monday', value: 'monday' },
              { label: 'Tuesday', value: 'tuesday' },
              { label: 'Wednesday', value: 'wednesday' },
              { label: 'Thursday', value: 'thursday' },
              { label: 'Friday', value: 'friday' },
              { label: 'Saturday', value: 'saturday' },
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
            Next: Delivery info
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BusinessDetailsForm;

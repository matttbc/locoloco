import React from 'react';
import { Form, FormikProps } from 'formik';
import { Button, Typography } from '@material-ui/core';

import FormField from '@components/form-field';

import styles from '@styles/forms';

export type Values = {
  firstName: string;
  lastName: string;
  role: string;
  phone: string;
}

const UserDetailsForm: React.FC<FormikProps<Values>> = () => {
  const classes = styles();

  return (
    <div className={classes.formWrapper}>
      <Typography component="h1" variant="h4" align="center" className={classes.title}>
        Tell us about you
      </Typography>
      <Form className={classes.form}>
        <div className={classes.formGroup}>
          <FormField
            label="First name"
            name="firstName"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="Last name"
            name="lastName"
            fullWidth
            type="text"
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="Your role"
            name="role"
            fullWidth
            type="select"
            options={[
              { text: 'Owner', value: 'owner' },
              { text: 'Manager', value: 'manager' },
            ]}
          />
        </div>
        <div className={classes.formGroup}>
          <FormField
            label="Mobile number"
            name="phone"
            fullWidth
            type="text"
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
            Next: Restaurant info
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UserDetailsForm;

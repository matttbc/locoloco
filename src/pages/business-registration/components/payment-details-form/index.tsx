import React from 'react';
import { Form, FormikProps } from 'formik';
import { Button, Typography } from '@material-ui/core';

import FormField from '@components/form-field';

import styles from '@styles/forms';

export type Values = {
  type: string[];
  stripe: {
    key: string;
    secret: string;
  };
}

const PaymentDetailsForm: React.FC<FormikProps<Values>> = ({ values }: FormikProps<Values>) => {
  const classes = styles();

  return (
    <div className={classes.formWrapper}>
      <Typography component="h1" variant="h4" align="center" className={classes.title}>
        Getting paid
      </Typography>
      <Form className={classes.form}>
        <div className={classes.formGroup}>
          <FormField
            label="Which payment method do you want to accept?"
            name="type"
            fullWidth
            type="checkboxGroup"
            options={[
              { label: 'Cash', value: 'cash' },
              { label: 'Online payment', value: 'online' },
            ]}
            helpText="Select all that apply."
          />
        </div>
        {values.type.includes('online') && (
          <>
            <div className={classes.formGroup}>
              <Typography component="p">
                To accept Loql Digital Payments, you will first need a Stripe Account and
                know your Stripe Publishable Key and Secret
              </Typography>
              <FormField
                label="Stripe publishable key"
                name="stripe.key"
                fullWidth
                type="text"
              />
              <FormField
                label="Stripe secret"
                name="stripe.secret"
                fullWidth
                type="text"
              />
            </div>
          </>
        )}
        <div className={classes.formGroup}>
          <Button
            type="submit"
            color="primary"
            size="large"
            variant="contained"
            className={classes.submitButton}
          >
            Next: Terms and Conditions
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PaymentDetailsForm;

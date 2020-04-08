import React from 'react';
import { Form, FormikProps } from 'formik';
import { Button } from '@material-ui/core';

import FormField from '@components/form-field';

import styles from './styles';

type Values = {
  businessName: string;
}

const RegisterForm: React.FC<FormikProps<Values>> = () => {
  const classes = styles();

  return (
    <Form className={classes.registerForm}>
      <div className={classes.formGroup}>
        <FormField
          label="Business name"
          name="businessName"
          placeholder="eg The Big Pizza Co"
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
          Get started
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;

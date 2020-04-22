import React from 'react';
import { Form, FormikProps } from 'formik';
import {
  Button,
  Typography,
  FormGroup,
} from '@material-ui/core';

import FormField from '@components/form-field';

import styles from '@styles/forms';

export type Values = {
  terms: boolean;
  privacyPolicy: boolean;
}

const LegalAcknowledgementForm: React.FC<FormikProps<Values>> = () => {
  const classes = styles();

  return (
    <div className={classes.formWrapper}>
      <Typography component="h1" variant="h4" align="center" className={classes.title}>
        The legal bit
      </Typography>
      <Typography component="p" align="center" className={classes.title}>
        By listing your restaurant here you’re agreeing x, and we’re agreeing not to do y.
      </Typography>
      <Form className={classes.form}>
        <div className={classes.formGroup}>
          <FormGroup>
            <FormField
              label="Terms &amp; Conditions"
              labelLink="/terms-and-conditions"
              name="terms"
              fullWidth
              type="checkbox"
            />
            <FormField
              label="Privacy Policy"
              labelLink="/privacy-policy"
              name="privacyPolicy"
              fullWidth
              type="checkbox"
            />
          </FormGroup>
        </div>
        <div className={classes.formGroup}>
          <Button
            type="submit"
            color="primary"
            size="large"
            variant="contained"
            className={classes.submitButton}
          >
            Next: Review
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LegalAcknowledgementForm;

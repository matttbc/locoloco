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
              { label: 'African', value: 'african' },
              { label: 'American', value: 'american' },
              { label: 'Argentinian', value: 'argentinian' },
              { label: 'Asian', value: 'asian' },
              { label: 'Fusion', value: 'fusion' },
              { label: 'British', value: 'british' },
              { label: 'Caribbean', value: 'caribbean' },
              { label: 'Chinese', value: 'chinese' },
              { label: 'Ethiopian', value: 'ethiopian' },
              { label: 'European', value: 'european' },
              { label: 'French', value: 'french' },
              { label: 'Greek', value: 'greek' },
              { label: 'Indian', value: 'indian' },
              { label: 'International', value: 'international' },
              { label: 'Italian', value: 'italian' },
              { label: 'Jamaican', value: 'jamaican' },
              { label: 'Japanese', value: 'japanese' },
              { label: 'Korean', value: 'korean' },
              { label: 'Lebanese', value: 'lebanese' },
              { label: 'Malaysian', value: 'malaysian' },
              { label: 'Mediterranean', value: 'mediterranean' },
              { label: 'Mexican', value: 'mexican' },
              { label: 'Middle Eastern', value: 'middle-eastern' },
              { label: 'Pan Asian', value: 'pan-asian' },
              { label: 'Portuguese', value: 'portuguese' },
              { label: 'South American', value: 'south-american' },
              { label: 'Spanish', value: 'spanish' },
              { label: 'Taiwanese', value: 'taiwanese' },
              { label: 'Thai', value: 'thai' },
              { label: 'Turkish', value: 'turkish' },
              { label: 'Vietnamese', value: 'vietnamese' },
              { label: 'Western', value: 'western' },
              { label: 'Other', value: 'other' },
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

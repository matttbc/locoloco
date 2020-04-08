import React from 'react';
import { Redirect } from 'react-router';
import {
  Grid,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';

import { LANDING_PATH } from '@routes';
import { useStore } from '@store';

import styles from './styles';

const STEPS = [
  'Restaurant info',
  'Your info',
  'Menu setup',
];

const BusinessRegistration: React.FC<{}> = () => {
  const classes = styles();
  const { trade } = useStore();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  return !trade.name
    ? <Redirect to={LANDING_PATH} />
    : (
      <Grid container direction="column" alignContent="center" className={classes.page}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {STEPS.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
    );
};

export default BusinessRegistration;

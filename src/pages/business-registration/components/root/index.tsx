import React from 'react';
import {
  Grid,
  LinearProgress,
} from '@material-ui/core';

import UserDetailsForm from '../../containers/user-details-form';
import BusinessInfoForm from '../../containers/business-info-form';

import styles from './styles';

const STEPS_COMPONENTS = [
  UserDetailsForm,
  BusinessInfoForm,
];

const BusinessRegistration: React.FC<{}> = () => {
  const classes = styles();
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const goToNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const StepComponent = STEPS_COMPONENTS[activeStep];

  return (
    <Grid container direction="column" alignContent="center" className={classes.page}>
      <LinearProgress
        variant="determinate"
        value={Math.round((activeStep / STEPS_COMPONENTS.length) * 100)}
        color="primary"
        className={classes.progress}
      />
      <StepComponent goToNextStep={goToNextStep} />
    </Grid>
  );
};

export default BusinessRegistration;

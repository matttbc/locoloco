import React from 'react';
import {
  Grid,
  LinearProgress,
} from '@material-ui/core';

import Landing from '../landing';
import UserDetailsForm from '../../containers/user-details-form';
import BusinessInfoForm from '../../containers/business-info-form';
import BusinessDetailsForm from '../../containers/business-details-form';
import DeliveryInfoForm from '../../containers/delivery-info-form';
import PaymentDetailsForm from '../../containers/payment-details-form';
import LegalAcknowledgementForm from '../../containers/legal-acknowledgement-form';
import Review from '../review';
import Confirmation from '../confirmation';

import styles from './styles';

const STEPS_COMPONENTS = [
  Landing,
  UserDetailsForm,
  BusinessInfoForm,
  BusinessDetailsForm,
  DeliveryInfoForm,
  PaymentDetailsForm,
  LegalAcknowledgementForm,
  Review,
  Confirmation,
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

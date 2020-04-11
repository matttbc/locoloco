import React from 'react';
import { Redirect } from 'react-router';

import { LANDING_PATH } from '@routes';
import { useStore } from '@store';
import BusinessRegistration from '../../components/root';

const BusinessRegistrationContainer: React.FC<{}> = () => {
  const { trade } = useStore();

  return !trade.name
    ? <Redirect to={LANDING_PATH} />
    : <BusinessRegistration />;
};

export default BusinessRegistrationContainer;

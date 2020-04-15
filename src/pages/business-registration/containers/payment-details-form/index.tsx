import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toJS } from 'mobx';

import { useStore } from '@store';
import PaymentDetailsForm from '../../components/payment-details-form';

type FormValues = {
  type: string[];
  stripe: {
    key: string;
    secret: string;
  };
}

type Props = {
  goToNextStep: () => void;
}

export const ValidationSchema = Yup.object().shape({
  type: Yup
    .array()
    .required('Selected at least one option.'),
  stripe: Yup.object()
    .when('type', {
      is: (value) => value.includes('online'),
      then: Yup.object().shape({
        key: Yup
          .string()
          .required('Stripe publishable key is required.'),
        secret: Yup
          .string()
          .required('Stripe secret is required.'),
      }),
    }),
});

const mapStoreToInitialValues = (store) => ({
  type: store.register.paymentDetails.type,
  stripe: store.register.paymentDetails.stripe,
});

const Form: React.FC<Props> = ({ goToNextStep }: Props) => {
  const { trade } = useStore();

  const onSubmit = (values: FormValues) => {
    trade.register.paymentDetails = {
      ...toJS(trade.register.paymentDetails),
      ...values,
    };

    goToNextStep();
  };

  return (
    <Formik
      initialValues={mapStoreToInitialValues(toJS(trade))}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {(props) => <PaymentDetailsForm {...props} />}
    </Formik>
  );
};

export default Form;

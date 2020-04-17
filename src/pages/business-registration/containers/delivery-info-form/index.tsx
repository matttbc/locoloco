/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toJS } from 'mobx';

import { useStore } from '@store';
import DeliveryInfoForm from '../../components/delivery-info-form';

type FormValues = {
  deliveryOptions: string[];
  minimumOrder: string;
  deliveryCharge: string;
  acceptedPostcodes: string[];
};

type Props = {
  goToNextStep: () => void;
};

export const ValidationSchema = Yup.object().shape({
  deliveryOptions: Yup
    .array()
    .required('A delivery option is required.'),
  minimumOrder: Yup
    .number()
    .positive('Minimum order should be a positive number.')
    .test(
      'maxDecimals',
      'Minimum order should have max 2 decimals.',
      (value) => value ? /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/.test(value.toString()) : true,
    ),
  deliveryCharge: Yup
    .number()
    .when('deliveryOptions', {
      is: (value) => value.includes('localDelivery'),
      then: Yup
        .number()
        .required('Delivery charge is required.')
        .min(0, 'Delivery charge should be at least 0.')
        .test(
          'maxDecimals',
          'Delivery charge should have max 2 decimals.',
          (value) => value ? /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/.test(value.toString()) : true,
        ),
    }),
  acceptedPostcodes: Yup
    .string()
    .when('deliveryOptions', {
      is: (value) => value.includes('localDelivery'),
      then: Yup
        .string()
        .required('At least 1 postcode area is required'),
    }),
});

const mapStoreToInitialValues = (store) => ({
  deliveryOptions: store.register.deliveryDetails.deliveryOptions,
  minimumOrder: store.register.deliveryDetails.minimumOrder,
  deliveryCharge: store.register.deliveryDetails.deliveryCharge,
  acceptedPostcodes: store.register.deliveryDetails.acceptedPostcodes,
});

const Form: React.FC<Props> = ({ goToNextStep }: Props) => {
  const { trade } = useStore();

  const onSubmit = (values: FormValues) => {
    trade.register.deliveryDetails = {
      ...toJS(trade.register.deliveryDetails),
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
      {(props) => <DeliveryInfoForm {...props} />}
    </Formik>
  );
};

export default Form;

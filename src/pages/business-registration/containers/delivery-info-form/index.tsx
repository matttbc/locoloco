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
  deliveryCharge: Yup
    .string()
    .required('A delivery charge value is required.'),
  acceptedPostcodes: Yup
    .string()
    .required('At least 1 postcode area is required'),
});

const mapStoreToInitialValues = (store) => ({
  deliveryOptions: store.register.deliveryInfo.deliveryOptions,
  minimumOrder: store.register.deliveryInfo.minimumOrder,
  deliveryCharge: store.register.deliveryInfo.deliveryCharge,
  acceptedPostcodes: store.register.deliveryInfo.acceptedPostcodes,
});

const Form: React.FC<Props> = ({ goToNextStep }: Props) => {
  const { trade } = useStore();

  const onSubmit = (values: FormValues) => {
    trade.register.deliveryInfo = {
      ...toJS(trade.register.deliveryInfo),
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

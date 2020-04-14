import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toJS } from 'mobx';

import { useStore } from '@store';
import BusinessInfoForm from '../../components/business-info-form';

type FormValues = {
  name: string;
  postcode: string;
  offerType: string[];
  cuisineType: string[];
};

type Props = {
  goToNextStep: () => void;
};

export const ValidationSchema = Yup.object().shape({
  name: Yup
    .string()
    .required('Business name is required.'),
  postcode: Yup
    .string()
    .required('Postcode is required.')
    .matches(/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/, { message: 'Postcode is not valid.' }),
  offerType: Yup
    .array()
    .required('Offer type is required.'),
  cuisineType: Yup
    .array()
    .required('Cuisine type is required.'),
});

const mapStoreToInitialValues = (store) => ({
  name: store.register.businessDetails.name,
  postcode: store.register.businessDetails.postcode,
  offerType: store.register.businessDetails.offerType,
  cuisineType: store.register.businessDetails.cuisineType,
});

const Form: React.FC<Props> = ({ goToNextStep }: Props) => {
  const { trade } = useStore();

  const onSubmit = (values: FormValues) => {
    trade.register.businessDetails = {
      ...toJS(trade.register.businessDetails),
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
      {(props) => <BusinessInfoForm {...props} />}
    </Formik>
  );
};

export default Form;

/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toJS } from 'mobx';

import { useStore } from '@store';
import BusinessDetailsForm from '../../components/business-details-form';

type FormValues = {
  address: {
    street: string;
    number: string;
    city: string;
    county: string;
  };
  phone: string;
  website: string;
  openFor: string[];
  openDays: string[];
}

type Props = {
  goToNextStep: () => void;
}

export const ValidationSchema = Yup.object().shape({
  address: Yup.object().shape({
    street: Yup
      .string()
      .required('Street name is required.'),
    number: Yup
      .string()
      .required('House number is required.'),
    city: Yup
      .string()
      .required('City is required.'),
    county: Yup
      .string()
      .required('County is required.'),
  }),
  phone: Yup
    .string()
    .required('Phone is required.')
    .matches(/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/, { message: 'Phone number is not valid.' }),
  website: Yup
    .string()
    .required('Website is required.')
    .matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/, { message: 'Website address is not valid.' }),
  logo: Yup.mixed()
    .test(
      'fileSize',
      'Logo file size should be maximum 5Mb.',
      (value) => value ? value.size <= 5 * 1024 * 1024 : true,
    ),
  image: Yup.mixed()
    .test(
      'fileSize',
      'Logo file size should be maximum 5Mb.',
      (value) => value ? value.size <= 5 * 1024 * 1024 : true,
    ),
  openFor: Yup
    .array()
    .required('Selected at least one option.'),
  openDays: Yup
    .array()
    .required('Selected at least one option.'),
});

const mapStoreToInitialValues = (store) => ({
  address: store.register.businessDetails.address,
  phone: store.register.businessDetails.phone,
  website: store.register.businessDetails.website,
  logo: store.register.businessDetails.logo,
  image: store.register.businessDetails.image,
  openFor: store.register.businessDetails.openFor,
  openDays: store.register.businessDetails.openDays,
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
      {(props) => <BusinessDetailsForm {...props} />}
    </Formik>
  );
};

export default Form;

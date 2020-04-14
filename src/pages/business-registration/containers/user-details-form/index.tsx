import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toJS } from 'mobx';

import { useStore } from '@store';
import UserDetailsForm from '../../components/user-details-form';

type FormValues = {
  firstName: string;
  lastName: string;
  role: string;
  phone: string;
};

type Props = {
  goToNextStep: () => void;
};

export const ValidationSchema = Yup.object().shape({
  firstName: Yup
    .string()
    .required('First name is required.'),
  lastName: Yup
    .string()
    .required('Last name is required.'),
  role: Yup
    .string()
    .required('Role is required.'),
  phone: Yup
    .string()
    .required('Phone is required.')
    .matches(/^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/, { message: 'Phone number is not valid.' }),
});

const mapStoreToInitialValues = (store) => ({
  firstName: store.register.userDetails.firstName,
  lastName: store.register.userDetails.lastName,
  role: store.register.userDetails.role,
  phone: store.register.userDetails.phone,
});

const Form: React.FC<Props> = ({ goToNextStep }: Props) => {
  const { trade } = useStore();

  const onSubmit = (values: FormValues) => {
    trade.register.userDetails = values;
    goToNextStep();
  };

  return (
    <Formik
      initialValues={mapStoreToInitialValues(toJS(trade))}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {(props) => <UserDetailsForm {...props} />}
    </Formik>
  );
};

export default Form;

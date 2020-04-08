import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { REGISTER_BUSINESS_PATH } from '@routes';
import { useStore } from '@store';
import RegisterForm from '../../components/register-form';

type FormValues = {
  businessName: string;
};

export const ValidationSchema = Yup.object().shape({
  businessName: Yup
    .string()
    .required('Business name is required.'),
});

const Form: React.FC<{}> = () => {
  const history = useHistory();
  const { trade } = useStore();

  const onSubmit = (values: FormValues) => {
    trade.name = values.businessName;
    history.push(REGISTER_BUSINESS_PATH);
  };

  return (
    <Formik
      initialValues={{ businessName: trade.name }}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {(props) => <RegisterForm {...props} />}
    </Formik>
  );
};

export default Form;

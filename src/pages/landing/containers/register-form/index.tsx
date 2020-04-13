import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { REGISTER_BUSINESS_PATH } from '@routes';
import { useStore } from '@store';
import { login } from '@services/session';
import RegisterForm from '../../components/register-form';

import styles from './styles';

type FormValues = {
  businessName: string;
};

export const ValidationSchema = Yup.object().shape({
  businessName: Yup
    .string()
    .required('Business name is required.'),
});

const mapStoreToInitialValues = (store) => ({
  businessName: store.register.businessDetails.name,
});

const Form: React.FC<{}> = () => {
  const classes = styles();
  const history = useHistory();
  const { trade, session } = useStore();

  const onSubmit = (values: FormValues) => {
    trade.register.businessDetails.name = values.businessName;
    history.push(REGISTER_BUSINESS_PATH);
  };

  return session.token
    ? (
      <Formik
        initialValues={mapStoreToInitialValues(trade)}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {(props) => <RegisterForm {...props} />}
      </Formik>
    )
    : (
      <Button
        color="primary"
        size="large"
        variant="contained"
        className={classes.loginButton}
        onClick={login}
      >
        Login
      </Button>
    );
};

export default Form;

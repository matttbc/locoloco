import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import LegalAcknowledgementForm from '../../components/legal-acknowledgement-form';

type Props = {
  goToNextStep: () => void;
}

export const ValidationSchema = Yup.object().shape({
  terms: Yup.boolean().oneOf([true], 'You must acknowledge that you accept our Terms and Conditions'),
  privacyPolicy: Yup.boolean().oneOf([true], 'You must acknowledge that you have read our Privacy Policy'),
});

const Form: React.FC<Props> = ({ goToNextStep }: Props) => {
  const onSubmit = () => {
    goToNextStep();
  };

  return (
    <Formik
      initialValues={{
        terms: false,
        privacyPolicy: false,
      }}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {(props) => <LegalAcknowledgementForm {...props} />}
    </Formik>
  );
};

export default Form;

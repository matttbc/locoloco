import React from 'react';
import { Field } from 'formik';

import TextField from './text-field';

type Props = {
  type: 'text' | 'hidden' | 'password';
  name: string;
  label: string;
  size?: string;
}

const FormField: React.FC<Props> = (props: Props) => {
  switch (props.type) {
    case 'text':
    default:
      return (
        <Field
          {...props}
          component={TextField}
        />
      );
  }
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;

import React from 'react';
import { Field } from 'formik';

import TextField from './text-field';

type Props = {
  type: 'text' | 'password';
  name: string;
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
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

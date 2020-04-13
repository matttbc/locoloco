import React from 'react';
import { Field } from 'formik';

import TextField from './text-field';
import SelectField, { Option } from './select-field';

type Props = {
  type: 'text' | 'password' | 'select';
  name: string;
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  options?: Option[];
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

    case 'select':
      return (
        <Field
          {...props}
          component={SelectField}
        />
      );
  }
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;

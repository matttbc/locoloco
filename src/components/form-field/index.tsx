/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Field } from 'formik';

import TextField from './text-field';
import SelectField, { Option as SelectOption } from './select-field';
import CheckboxGroup, { Option as CheckboxGroupOption } from './checkbox-group';

type Props = {
  type: 'text' | 'password' | 'select' | 'checkboxGroup';
  name: string;
  label: string;
  placeholder?: string;
  fullWidth?: boolean;
  helpText?: string;
  options?: SelectOption[] | CheckboxGroupOption[];
}

const COMPONENTS_TYPES = {
  text: TextField,
  hidden: TextField,
  password: TextField,
  select: SelectField,
  checkboxGroup: CheckboxGroup,
};

const FormField: React.FC<Props> = (props: Props) => (
  <Field {...props} component={COMPONENTS_TYPES[props.type]} />
);

FormField.defaultProps = {
  type: 'text',
};

export default FormField;

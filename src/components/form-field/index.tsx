/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Field, FieldProps, getIn } from 'formik';

import TextField, { Props as TextFieldProps } from './text-field';
import SelectField, { Props as SelectFieldProps } from './select-field';
import CheckboxGroup, { Props as CheckboxGroupProps } from './checkbox-group';
import FileSelectField, { Props as FieldFieldProps } from './file-select-field';

type Props = TextFieldProps | SelectFieldProps | CheckboxGroupProps | FieldFieldProps;

const COMPONENTS_TYPES = {
  text: TextField,
  number: TextField,
  hidden: TextField,
  password: TextField,
  select: SelectField,
  checkboxGroup: CheckboxGroup,
  file: FileSelectField,
};

export const FieldWrapper: React.FC<Props & FieldProps> = (props: Props & FieldProps) => {
  const { form, field } = props;

  React.useEffect(() => (
    () => {
      form.setFieldValue(field.name, getIn(form.initialValues, field.name));
      form.setFieldError(field.name, '');
      form.setFieldTouched(field.name, false);
    }
  ), []);

  const FieldComponent = COMPONENTS_TYPES[props.type];
  return <FieldComponent {...props} />;
};

const FormField: React.FC<Props> = (props: Props) => (
  <Field {...props} component={FieldWrapper} />
);

FormField.defaultProps = {
  type: 'text',
};

export default FormField;

import React from 'react';
import { FieldProps } from 'formik';
import { TextField } from '@material-ui/core';

type Props = FieldProps & {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  disabled: boolean;
  fullWidth: boolean;
}

const TextFieldInput: React.FC<Props> = ({
  type,
  label,
  field,
  placeholder,
  disabled,
  fullWidth,
  form,
}: Props) => (
  <TextField
    {...field}
    id={field.name}
    placeholder={placeholder}
    type={type}
    disabled={disabled}
    error={form.touched[field.name] && !!form.errors[field.name]}
    helperText={form.touched[field.name] && form.errors[field.name]}
    label={label}
    variant="outlined"
    fullWidth={fullWidth}
  />
);

TextFieldInput.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

export default TextFieldInput;

import React from 'react';
import { FieldProps, getIn } from 'formik';
import { TextField, FormControl, FormHelperText } from '@material-ui/core';

export type Props = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  helpText?: string;
}

const TextFieldInput: React.FC<Props & FieldProps> = ({
  type,
  label,
  field,
  placeholder,
  disabled,
  fullWidth,
  helpText,
  form,
}: Props & FieldProps) => (
  <FormControl component="fieldset" fullWidth={fullWidth}>
    <TextField
      {...field}
      id={field.name}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      error={getIn(form.touched, field.name) && !!getIn(form.errors, field.name)}
      helperText={getIn(form.touched, field.name) && getIn(form.errors, field.name)}
      label={label}
      variant="outlined"
    />
    {helpText && <FormHelperText>{helpText}</FormHelperText>}
  </FormControl>
);

TextFieldInput.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

export default TextFieldInput;

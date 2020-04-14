import React from 'react';
import { FieldProps, getIn } from 'formik';
import {
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@material-ui/core';

export type Option = {
  text: string;
  value: string | number;
};

type Props = FieldProps & {
  name: string;
  type: string;
  label: string;
  options: Option[];
  disabled: boolean;
  fullWidth: boolean;
}

const SelectFieldInput: React.FC<Props> = ({
  label,
  field,
  disabled,
  options,
  fullWidth,
  form,
}: Props) => (
  <FormControl
    variant="outlined"
    error={getIn(form.touched, field.name) && !!getIn(form.errors, field.name)}
    fullWidth={fullWidth}
    disabled={disabled}
  >
    {label && <InputLabel htmlFor={field.name}>{label}</InputLabel>}
    <Select
      {...field}
      id={field.name}
      native
      label={label}
    >
      <option aria-label="None" value="" />
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.text}
        </option>
      ))}
    </Select>
    {getIn(form.touched, field.name) && !!getIn(form.errors, field.name) && (
      <FormHelperText>{getIn(form.errors, field.name)}</FormHelperText>
    )}
  </FormControl>
);

SelectFieldInput.defaultProps = {
  label: '',
  disabled: false,
};

export default SelectFieldInput;

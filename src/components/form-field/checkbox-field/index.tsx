import React from 'react';
import { FieldProps, getIn } from 'formik';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Link,
} from '@material-ui/core';

export type Props = {
  type: string;
  label?: string;
  labelLink?: string;
  disabled?: boolean;
};

const CheckboxFieldInput: React.FC<Props & FieldProps> = ({
  label,
  labelLink,
  field,
  disabled,
  form,
}: Props & FieldProps) => {
  const checkbox = (
    <Checkbox
      {...field}
      id={`${field.name}`}
      inputProps={label ? { 'aria-label': label } : undefined}
    />
  );

  return (
    <FormControl
      variant="outlined"
      error={getIn(form.touched, field.name) && !!getIn(form.errors, field.name)}
      disabled={disabled}
    >
      {label ? (
        <FormControlLabel
          value="start"
          control={checkbox}
          label={labelLink
            ? (
              <Link
                href={labelLink}
                target="_blank"
                rel="noopener, noreferrer"
              >
                {label}
              </Link>
            )
            : label}
        />
      )
        : checkbox}
      
      {getIn(form.touched, field.name) && !!getIn(form.errors, field.name) && (
        <FormHelperText>{getIn(form.errors, field.name)}</FormHelperText>
      )}
    </FormControl>
  );
};

export default CheckboxFieldInput;

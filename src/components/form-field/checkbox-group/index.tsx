import React from 'react';
import { FieldProps } from 'formik';
import {
  FormLabel,
  FormControlLabel,
  FormControl,
  FormHelperText,
  Checkbox,
  FormGroup,
} from '@material-ui/core';

export type Option = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

type Props = FieldProps & {
  type: string;
  label: string;
  options: Option[];
  helpText: string;
}

const CheckboxGroup: React.FC<Props> = ({
  field,
  label,
  options,
  helpText,
  form,
}: Props) => (
  (
    <FormControl
      component="fieldset"
      error={form.touched[field.name] && !!form.errors[field.name]}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
      <FormGroup>
        {options.map((option, index) => (
          <FormControlLabel
            key={option.value}
            control={(
              <Checkbox
                {...field}
                id={`${field.name}.${index}`}
                checked={form.values[field.name].includes(option.value)}
                value={option.value}
                disabled={option.disabled}
              />
            )}
            label={option.label}
          />
        ))}
      </FormGroup>
      {form.touched[field.name] && !!form.errors[field.name] && (
        <FormHelperText>{form.errors[field.name]}</FormHelperText>
      )}
    </FormControl>
  )
);

export default CheckboxGroup;

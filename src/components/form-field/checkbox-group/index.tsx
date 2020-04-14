import React from 'react';
import { FieldProps, getIn } from 'formik';
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
      error={getIn(form.touched, field.name) && !!getIn(form.errors, field.name)}
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
      {getIn(form.touched, field.name) && !!getIn(form.errors, field.name) && (
        <FormHelperText>{getIn(form.errors, field.name)}</FormHelperText>
      )}
    </FormControl>
  )
);

export default CheckboxGroup;

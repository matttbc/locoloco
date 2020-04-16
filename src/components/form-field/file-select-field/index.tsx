import React from 'react';
import { FieldProps, getIn } from 'formik';
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
} from '@material-ui/core';

import styles from './styles';

export type Props = {
  name: string;
  type: string;
  label?: string;
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  fullWidth?: boolean;
  helpText?: string;
}

type HTMLInputEvent = React.SyntheticEvent & {
  target: HTMLInputElement & EventTarget;
}

const FileFieldInput: React.FC<Props & FieldProps> = ({
  type,
  label,
  field,
  disabled,
  accept,
  multiple,
  fullWidth,
  helpText,
  form,
}: Props & FieldProps) => {
  const classes = styles();

  const onChange = (evt: HTMLInputEvent) => {
    evt.preventDefault();
    const file = evt.target.files[0];
    if (file) {
      form.setFieldValue(field.name, file);
    }

    form.setFieldTouched(field.name, true, false);
  };

  return (
    <FormControl
      component="fieldset"
      fullWidth={fullWidth}
      error={getIn(form.touched, field.name) && !!getIn(form.errors, field.name)}
    >
      <input
        name={field.name}
        id={field.name}
        accept={accept}
        className={classes.input}
        multiple={multiple}
        type={type}
        disabled={disabled}
        onChange={onChange}
      />
      <FormLabel component="label" htmlFor={field.name}>
        <Button
          variant="contained"
          color="primary"
          component="span"
          size="large"
          disabled={disabled}
          fullWidth={fullWidth}
        >
          {label}
        </Button>
      </FormLabel>
      {getIn(form.touched, field.name) && !!getIn(form.errors, field.name) && (
        <FormHelperText>{getIn(form.errors, field.name)}</FormHelperText>
      )}
      {helpText && <FormHelperText>{helpText}</FormHelperText>}
    </FormControl>
  );
};

FileFieldInput.defaultProps = {
  type: 'text',
  label: '',
  disabled: false,
};

export default FileFieldInput;

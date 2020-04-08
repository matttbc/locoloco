import React from 'react';
import { FieldProps } from 'formik';
import classNames from 'classnames';

import Message from '@components/message';

import styles from './styles';

type Props = FieldProps & {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  disabled: boolean;
  size: 'normal' | 'large';
}

const TextField: React.FC<Props> = ({
  type,
  label,
  field,
  placeholder,
  disabled,
  form,
  size,
}: Props) => {
  const classes = styles();

  return (
    <div className={classes.textField}>
      {label
      && (
        <label
          htmlFor={field.name}
        >
          {label}
        </label>
      )}
      <input
        className={classNames('form-control', { 'form-control-lg': size === 'large' })}
        {...field}
        id={field.name}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
      {form.touched[field.name] && form.errors[field.name]
      && (<Message type="error" message={form.errors[field.name] as string} />)}
    </div>
  );
};

TextField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
  size: 'normal',
};

export default TextField;

import React from 'react';
import classNames from 'classnames';

import styles from './styles';

type Props = {
  type?: 'success' | 'error';
  message: string;
}

const Message: React.FC<Props> = ({ message, type }: Props) => {
  const classes = styles();

  return (
    <p className={classNames(classes.message, classes[type])}>{message}</p>
  );
};

export default Message;

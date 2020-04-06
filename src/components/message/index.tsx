import React from 'react';
import classNames from 'classnames';

import './style.scss';

type Props = {
  type?: 'success' | 'error';
  message: string;
}

const Message: React.FC<Props> = ({ message, type }: Props) => (
  <p className={classNames('message', type)}>{message}</p>
);

export default Message;

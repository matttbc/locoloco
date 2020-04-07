import React from 'react';

type Props = {
  message: string;
}

const Landing: React.FC<Props> = ({ message }: Props) => (
  <div>{message}</div>
);

export default Landing;

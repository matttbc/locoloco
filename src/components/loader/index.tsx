import React from 'react';
import { CircularProgress } from '@material-ui/core';

import styles from './styles';

const Loader: React.FC<{}> = () => {
  const classes = styles();

  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;

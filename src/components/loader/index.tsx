import React from 'react';
import { CircularProgress } from '@material-ui/core';

import './style.scss';

const Loader: React.FC<{}> = () => (
  <div className="loader">
    <CircularProgress />
  </div>
);

export default Loader;

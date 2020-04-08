import React from 'react';
import { Typography } from '@material-ui/core';

import styles from './styles';

const Header: React.FC<{}> = () => {
  const classes = styles();

  return (
    <header>
      <Typography
        variant="button"
        align="center"
        color="primary"
        className={classes.logo}
      >
        LocoLoco
      </Typography>
    </header>
  );
};

export default Header;

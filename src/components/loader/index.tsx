import React from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';

import styles from './styles';

type Props = {
  message?: string;
};

const Loader: React.FC<Props> = ({ message }: Props) => {
  const classes = styles();

  return (
    <Grid
      container
      direction="column"
      alignContent="center"
      alignItems="center"
      justify="center"
      className={classes.loader}
    >
      {message && (
        <Typography component="span" align="center">
          {message}
        </Typography>
      )}
      <CircularProgress />
    </Grid>
  );
};

export default Loader;

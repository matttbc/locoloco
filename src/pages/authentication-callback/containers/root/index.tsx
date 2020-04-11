import React from 'react';
import { Redirect } from 'react-router';
import { Grid, Typography } from '@material-ui/core';

import { LANDING_PATH } from '@routes';
import Loader from '@components/loader';
import { useStore } from '@store';
import { useLoginStatus } from '@hooks/session';

const AuthenticationCallback: React.FC<{}> = () => {
  const { session } = useStore();
  const { loading, error } = useLoginStatus(session);

  if (loading) {
    return <Loader message="Authentication processing..." />;
  }

  if (error) {
    return (
      <Grid
        container
        direction="column"
        alignContent="center"
      >
        <Typography component="span" align="center">
          {error}
        </Typography>
      </Grid>
    );
  }

  return <Redirect to={LANDING_PATH} />;
};

export default AuthenticationCallback;

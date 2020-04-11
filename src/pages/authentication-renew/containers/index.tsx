import React from 'react';
import { Redirect } from 'react-router';
import { Grid, Typography } from '@material-ui/core';

import { LANDING_PATH } from '@routes';
import Loader from '@components/loader';
import { useSilentLoginStatus } from '@hooks/session';

const AuthenticationSilentRenew: React.FC<{}> = () => {
  const { loading, error } = useSilentLoginStatus();

  if (loading) {
    return <Loader message="Authentication renewing..." />;
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

export default AuthenticationSilentRenew;

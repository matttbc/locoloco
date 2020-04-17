import React from 'react';
import { Button, Typography, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import SVG from '@components/svg';
import { Logo } from '@assets';

import styles from './styles';

type Props = {
  isUserAuthenticated?: boolean;
  username?: string;
  login: () => void;
  logout: () => void;
};

const Header: React.FC<Props> = ({
  isUserAuthenticated,
  username,
  login,
  logout,
}: Props) => {
  const theme = useTheme();
  const classes = styles(theme)();

  return (
    <Grid
      container
      component="header"
      alignItems="flex-end"
      justify="flex-end"
      className={classes.header}
    >
      <Typography
        variant="button"
        align="center"
        color="secondary"
        className={classes.logo}
      >
        <SVG>{Logo}</SVG>
      </Typography>
      {isUserAuthenticated && (
        <>
          {username && (
            <Typography align="center" className={classes.username}>
              {username}
            </Typography>
          )}
          <Button
            color="primary"
            className={classes.button}
            onClick={logout}
          >
            Logout
          </Button>
        </>
      )}
      {!isUserAuthenticated && (
        <div>
          <Button
            color="primary"
            className={classes.button}
            onClick={login}
          >
            Login
          </Button>
        </div>
      )}
    </Grid>
  );
};

export default Header;

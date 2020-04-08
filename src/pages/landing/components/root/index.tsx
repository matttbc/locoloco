import React from 'react';
import { Typography } from '@material-ui/core';

const Landing: React.FC<{}> = () => (
  <div className="landing">
    <section>
      <Typography component="h1" variant="h3" align="center">
        Great food in your community.
      </Typography>
      <Typography component="p" align="center">
        We decided to make something to help local communities find great food in their area...
        without paying the middle man.
      </Typography>
    </section>
  </div>
);

export default Landing;

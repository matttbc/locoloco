import React from 'react';
import { Link } from 'react-router-dom';

import { LANDING_PATH } from '@routes';

import './style.scss';

const Header: React.FC<{}> = () => (
  <header>
    <Link to={LANDING_PATH}>
      <span className="logo">LocoLoco</span>
    </Link>
  </header>
);

export default Header;

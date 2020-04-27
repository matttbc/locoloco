import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Fastfood from '@material-ui/icons/Fastfood';
import Euro from '@material-ui/icons/Euro';
import LocalShipping from '@material-ui/icons/LocalShipping';
import Category from '@material-ui/icons/Category';
import Note from '@material-ui/icons/Note';
import Help from '@material-ui/icons/Help';

import {
  ListItem, List, ListItemText, Toolbar, ListItemIcon,
} from '@material-ui/core';
import { Routes, Route } from '../../constants/root';


import styles from './styles';

type Props = {
  handleSelected: (text) => void;
  routes: Route[];
};

const DrawerItems: React.FC<Props> = ({ handleSelected, routes }: Props) => (
  <List>
    {routes.map((route) => (
      <ListItem button key={route.attribute} onClick={() => handleSelected(route.attribute)}>
        {route.attribute === 'account' && <ListItemIcon><AccountCircle /></ListItemIcon>}
        {route.attribute === 'category' && <ListItemIcon><Category /></ListItemIcon>}
        {route.attribute === 'menu' && <ListItemIcon><Fastfood /></ListItemIcon>}
        {route.attribute === 'payment' && <ListItemIcon><Euro /></ListItemIcon>}
        {route.attribute === 'orders' && <ListItemIcon><LocalShipping /></ListItemIcon>}
        {route.attribute === 'help' && <ListItemIcon><Help /></ListItemIcon>}
        {route.attribute === 'policy' && <ListItemIcon><Note /></ListItemIcon>}
        <ListItemText primary={route.label} />
      </ListItem>
    ))}
  </List>
);

const Dashboard: React.FC<{}> = () => {
  const classes = styles();
  const [selected, setSelected] = React.useState('account');

  const handleItem = (text) => {
    setSelected(text);
  };

  return (
    <div className={classes.dashboardWrapper}>
      <Drawer
        className={classes.drawerWidth}
        variant="permanent"
        open
      >
        <Toolbar />
        <DrawerItems routes={Routes} handleSelected={handleItem} />
      </Drawer>
      <main className={classes.content}>
        {
          Routes.map((route) => route.attribute === selected && route.component)
        }
      </main>
    </div>
  );
};

export default Dashboard;

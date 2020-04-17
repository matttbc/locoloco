import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Fastfood from '@material-ui/icons/Fastfood';
import Euro from '@material-ui/icons/Euro';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import Note from '@material-ui/icons/Note';
import Help from '@material-ui/icons/Help';

import {
  ListItem, List, ListItemText, Toolbar, ListItemIcon,
} from '@material-ui/core';

import styles from './styles';

type Props = {
  handleSelected: (text) => void;
  routes: Obj[];
};

type Obj = {
  label: string;
  attribute: string;
  component: string;
  icon: string;
};

const DrawerItems: React.SFC<Props> = ({ handleSelected, routes }: Props) => (
  <List>
    {routes.map((ele) => (
      <ListItem button key={ele.attribute} onClick={() => handleSelected(ele.attribute)}>
        {ele.attribute === 'account' && <ListItemIcon><AccountCircle /></ListItemIcon>}
        {ele.attribute === 'menu' && <ListItemIcon><PlaylistAdd /></ListItemIcon>}
        {ele.attribute === 'payment' && <ListItemIcon><Euro /></ListItemIcon>}
        {ele.attribute === 'orders' && <ListItemIcon><Fastfood /></ListItemIcon>}
        {ele.attribute === 'help' && <ListItemIcon><Help /></ListItemIcon>}
        {ele.attribute === 'policy' && <ListItemIcon><Note /></ListItemIcon>}
        <ListItemText primary={ele.label} />
      </ListItem>
    ))}
  </List>
);

const Dashboard: React.FC<{}> = () => {
  const classes = styles();
  const [selected, setSelected] = useState('account');

  const dashboardRoute: Obj[] = [
    {
      label: 'Account',
      attribute: 'account',
      component: 'Account',
      icon: 'AccountCircle',
    },
    {
      label: 'Menu',
      attribute: 'menu',
      component: 'menu',
      icon: 'Play',
    },
    {
      label: 'Payment',
      attribute: 'payment',
      component: 'payment stuff',
      icon: 'Euro',
    },
    {
      label: 'Orders',
      attribute: 'orders',
      component: 'order history or current',
      icon: 'PlaylistAdd',
    },
    {
      label: 'Help',
      attribute: 'help',
      component: 'help email related stufff',
      icon: 'Help',
    },
    {
      label: 'Policy',
      attribute: 'policy',
      component: 'terms and condition related stuff',
      icon: 'Note',
    },
  ];

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
        <DrawerItems routes={dashboardRoute} handleSelected={handleItem} />
      </Drawer>
      <main className={classes.content}>
        {
          dashboardRoute.map((ele) => ele.attribute === selected && ele.component)
        }
      </main>
    </div>
  );
};

export default Dashboard;

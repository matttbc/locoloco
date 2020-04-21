export type DashboardRouteObj = {
  label: string;
  attribute: string;
  component: string;
};

export const DashboardRoute: DashboardRouteObj[] = [
  {
    label: 'Account',
    attribute: 'account',
    component: 'Account',
  },
  {
    label: 'Category',
    attribute: 'category',
    component: 'hello',
  },
  {
    label: 'Menu',
    attribute: 'menu',
    component: 'menu',
  },
  {
    label: 'Payment',
    attribute: 'payment',
    component: 'payment stuff',
  },
  {
    label: 'Orders',
    attribute: 'orders',
    component: 'order history or current',
  },
  {
    label: 'Help',
    attribute: 'help',
    component: 'help email related stufff',
  },
  {
    label: 'Policy',
    attribute: 'policy',
    component: 'terms and condition related stuff',
  },
];

import React from 'react';
import { HomePage, ConnectedPage } from './pages';
import { DefaultLayout } from './layouts';

export const routes = [
  {
    path: '/',
    component: () => (
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    ),
  },
  {
    path: '/connected',
    component: () => <ConnectedPage />,
  },
];

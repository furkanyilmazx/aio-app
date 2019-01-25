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
  }, {
    path: '/hls/dashboard',
    component: () => (
      <DefaultLayout>
        <ConnectedPage />
      </DefaultLayout>
    ),
  }, {
    path: '/hls/management',
    component: () => (
      <DefaultLayout>
        <ConnectedPage />
      </DefaultLayout>
    ),
  },
];

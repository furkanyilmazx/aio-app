import React from 'react';
import { HomePage, ConnectedPage, CalendarPage, LoginPage } from './pages';
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
    path: '/hls/dashboard',
    component: () => (
      <DefaultLayout>
        <ConnectedPage />
      </DefaultLayout>
    ),
  },
  {
    path: '/hls/management',
    component: () => (
      <DefaultLayout>
        <ConnectedPage />
      </DefaultLayout>
    ),
  },
  {
    path: '/calendar',
    component: () => (
      <DefaultLayout>
        <CalendarPage />
      </DefaultLayout>
    ),
  },
  {
    path: '/login',
    component: () => <LoginPage />,
  },
];

import React from 'react';
import { HomePage, EditorPage, CalendarPage, LoginPage, HlsPage } from './pages';
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
        <HlsPage />
      </DefaultLayout>
    ),
  },
  {
    path: '/hls/management',
    component: () => (
      <DefaultLayout>
        <HlsPage />
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
  {
    path: '/editor',
    component: () => (
      <DefaultLayout>
        <EditorPage />
      </DefaultLayout>
    ),
  },
];

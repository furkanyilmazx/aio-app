import React, { lazy } from 'react';
import { DefaultLayout, EditorLayout } from './layouts';

const HomePage = lazy(() => import('./pages/HomePage'));
const EditorPage = lazy(() => import('./pages/EditorPage'));
const CalendarPage = lazy(() => import('./pages/CalendarPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const HlsPage = lazy(() => import('./pages/HlsPage'));
const QRCodePage = lazy(() => import('./pages/QRCodePage'));
const CreditCard = lazy(() => import('./pages/CreditCard'));

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
    path: '/qrcode',
    component: () => (
      <DefaultLayout>
        <QRCodePage />
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
  {
    path: '/credit-card',
    component: () => (
      <DefaultLayout>
        <CreditCard />
      </DefaultLayout>
    ),
  },
];

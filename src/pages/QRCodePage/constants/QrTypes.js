import React from 'react';
import { BusinessCardForm } from '../components';

export const QR_TYPES = [
  {
    name: 'Business Card',
    icon: 'idcard',
    component: <BusinessCardForm />,
  },
  {
    name: 'Text',
    icon: 'edit',
    component: 'XXXX',
  },
  {
    name: 'Link',
    icon: 'link',
    component: 'XXXX',
  },
  {
    name: 'Phone',
    icon: 'phone',
    component: 'XXXX',
  },
  {
    name: 'Send An Email',
    icon: 'mail',
    component: 'XXXX',
  },
  {
    name: 'Send An SMS',
    icon: 'message',
    component: 'XXXX',
  },
  {
    name: 'GeoLocation',
    icon: 'environment',
    component: 'XXXX',
  },
  {
    name: 'Calendar',
    icon: 'calendar',
    component: 'XXXX',
  },
  {
    name: 'Wireless',
    icon: 'wifi',
    component: 'XXXX',
  },
  {
    name: 'Facetime',
    icon: 'video-camera',
    component: 'XXXX',
  },
];

import React from 'react';
import { BusinessCardForm } from '../components';

export const QR_TYPES = [
  {
    id: 'business_card',
    name: 'Business Card',
    icon: 'idcard',
    component: <BusinessCardForm />,
  },
  {
    id: 'text',
    name: 'Text',
    icon: 'edit',
    component: 'Text',
  },
  {
    id: 'link',
    name: 'Link',
    icon: 'link',
    component: 'Link',
  },
  {
    id: 'phone',
    name: 'Phone',
    icon: 'phone',
    component: 'Phone',
  },
  {
    id: 'mail',
    name: 'Send An Email',
    icon: 'mail',
    component: 'Send An Email',
  },
  {
    id: 'message',
    name: 'Send An SMS',
    icon: 'message',
    component: 'Send An SMS',
  },
  {
    id: 'geolocation',
    name: 'GeoLocation',
    icon: 'environment',
    component: 'GeoLocation',
  },
  {
    id: 'calendar',
    name: 'Calendar',
    icon: 'calendar',
    component: 'Calendar',
  },
  {
    id: 'wireless',
    name: 'Wireless',
    icon: 'wifi',
    component: 'Wireless',
  },
  {
    id: 'facetime',
    name: 'Facetime',
    icon: 'video-camera',
    component: 'Facetime',
  },
];

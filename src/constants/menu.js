export const SIDEBAR_MENUS = [
  {
    id: 1,
    label: 'Home',
    value: '/',
    icon: 'home',
    parent: null,
    permissions: [
      {
        type: 'ADMIN',
      },
    ],
  }, {
    id: 2,
    label: 'HLS',
    value: '/',
    icon: 'video-camera',
    parent: null,
    permissions: [
      {
        type: 'ADMIN',
      },
    ],
  }, {
    id: 3,
    label: 'Dashboard',
    value: '/hls/dashboard',
    icon: 'dashboard',
    parent: 2,
    permissions: [
      {
        type: 'ADMIN',
      },
    ],
  }, {
    id: 4,
    label: 'Management',
    value: '/hls/management',
    icon: 'form',
    parent: 2,
    permissions: [
      {
        type: 'ADMIN',
      },
    ],
  }
];

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
    }, {
      id: 5,
      label: 'Calendar',
      value: '/calendar',
      icon: 'calendar',
      parent: null,
      permissions: [
        {
          type: 'ADMIN',
        },
      ],
    },
    {
      id: 6,
      label: 'Editor',
      value: '/editor',
      icon: 'edit',
      parent: null,
      permissions: [
        {
          type: 'ADMIN',
        },
      ],
    },
    {
      id: 7,
      label: 'Qr Code Design',
      value: '/qrcode',
      icon: 'qrcode',
      parent: null,
      permissions: [
        {
          type: 'ADMIN',
        },
      ],
    },
    {
      id: 8,
      label: 'Credit Card',
      value: '/credit-card',
      icon: 'credit-card',
      parent: null,
      permissions: [
        {
          type: 'ADMIN',
        },
      ],
    },
  ];
  
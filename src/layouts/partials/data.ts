import type { AppType, NotificationType } from '@/layouts/partials/types';
import type { MegaMenuItemType, MenuItemType } from '@/types/layout';

import usFlag from '@/assets/images/flags/us.svg';
import inFlag from '@/assets/images/flags/in.svg';
import deFlag from '@/assets/images/flags/de.svg';
import itFlag from '@/assets/images/flags/it.svg';
import esFlag from '@/assets/images/flags/es.svg';
import ruFlag from '@/assets/images/flags/ru.svg';

import slack from '@/assets/images/brands/slack.svg';
import gitlab from '@/assets/images/brands/gitlab.svg';
import dribbble from '@/assets/images/brands/dribbble.svg';
import bitbucket from '@/assets/images/brands/bitbucket.svg';
import dropbox from '@/assets/images/brands/dropbox.svg';
import googleCloud from '@/assets/images/brands/google-cloud.svg';
import aws from '@/assets/images/brands/aws.svg';
import digitalOcean from '@/assets/images/brands/digital-ocean.svg';
import bootstrap from '@/assets/images/brands/bootstrap.svg';

import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';

// topbar
export const megaMenuItems: MegaMenuItemType[] = [
  {
    title: 'UI Components',
    links: [
      {
        label: 'Widgets',
        route: { name: '' },
      },
      {
        label: 'Dragula',
        route: { name: '' },
      },
      {
        label: 'Dropdowns',
        route: { name: '' },
      },
      {
        label: 'Ratings',
        route: { name: '' },
      },
      {
        label: 'Sweet Alerts',
        route: { name: '' },
      },
      {
        label: 'Scrollbar',
        route: { name: '' },
      },
      {
        label: 'Range Slider',
        route: { name: '' },
      },
    ],
  },
  {
    title: 'Applications',
    links: [
      {
        label: 'eCommerce Pages',
        route: { name: '' },
      },
      {
        label: 'Hospital',
        route: { name: '' },
      },
      {
        label: 'Email',
        route: { name: '' },
      },
      {
        label: 'Calendar',
        route: { name: '' },
      },
      {
        label: 'Kanban Board',
        route: { name: '' },
      },
      {
        label: 'Invoice Management',
        route: { name: '' },
      },
      {
        label: 'Pricing',
        route: { name: '' },
      },
    ],
  },
  {
    title: 'Extra Pages',
    bgVariant: 'light',
    links: [
      {
        label: 'Left Sidebar with User',
        route: { name: '' },
      },
      {
        label: 'Menu Collapsed',
        route: { name: '' },
      },
      {
        label: 'Small Left Sidebar',
        route: { name: '' },
      },
      {
        label: 'New Header Style',
        route: { name: '' },
      },
      {
        label: 'My Account',
        route: { name: '' },
      },
      {
        label: 'Maintenance & Coming Soon',
        route: { name: '' },
      },
    ],
  },
];

export const languages: MenuItemType[] = [
  {
    image: usFlag,
    label: 'English',
  },
  {
    image: inFlag,
    label: 'Hindi',
  },
  {
    image: deFlag,
    label: 'German',
  },
  {
    image: itFlag,
    label: 'Italian',
  },
  {
    image: esFlag,
    label: 'Spanish',
  },
  {
    image: ruFlag,
    label: 'Russian',
  },
];

export const apps: AppType[] = [
  {
    image: slack,
    name: 'Slack',
  },
  {
    image: gitlab,
    name: 'Gitlab',
  },
  {
    image: dribbble,
    name: 'Dribbble',
  },
  {
    image: bitbucket,
    name: 'Bitbucket',
  },
  {
    image: dropbox,
    name: 'Dropbox',
  },
  {
    image: googleCloud,
    name: 'G Cloud',
  },
  {
    image: aws,
    name: 'AWS',
  },
  {
    image: digitalOcean,
    name: 'Server',
  },
  {
    image: bootstrap,
    name: 'Bootstrap',
  },
];

export const notifications: NotificationType[] = [
  {
    sender: {
      image: avatar2,
      name: 'Glady Haid',
    },
    message: 'Glady Haid commented on paces admin status.',
    timestamp: '25m ago',
    type: 'commented',
  },
  {
    sender: {
      image: avatar4,
      name: 'Tommy Berry',
    },
    message: 'Tommy Berry donated $100.00 for Carbon removal program',
    timestamp: '58m ago',
    type: 'donated',
  },
  {
    message: 'You withdraw a $500 by New York ATM',
    timestamp: '2h ago',
    type: 'other',
  },
  {
    sender: {
      image: avatar7,
      name: 'Richard Allen',
    },
    message: 'Richard Allen followed you in Facebook',
    timestamp: '3h ago',
    type: 'followed',
  },
  {
    sender: {
      image: avatar10,
      name: 'Victor Collier',
    },
    message: 'Victor Collier liked you recent photo in Instagram',
    timestamp: '10h ago',
    type: 'liked',
  },
];

export const profileMenuItems: MenuItemType[] = [
  {
    label: '我的帳戶',
    icon: 'ti ti-user-hexagon',
  },
  {
    label: '設定',
    icon: 'ti ti-settings',
  },
  {
    label: '登出',
    icon: 'ti ti-logout',
  },
];

// footer
export const footerItems: MenuItemType[] = [
  {
    label: 'About',
  },
  {
    label: 'Support',
  },
  {
    label: 'Contact Us',
  },
];

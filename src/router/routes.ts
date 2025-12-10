import type { RouteRecordRaw } from 'vue-router';

export const allRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/apps/e-commerce/products/index.vue'),
  },
  {
    path: '/apps/',
    meta: {
      label: '商城',
      key: 'apps',
      isTitle: true,
      icon: 'ti ti-apps',
    },
    children: [
      {
        path: 'products',
        name: 'ecommerce.products',
        meta: {
          label: '商品列表',
          icon: 'ti ti-list',
          key: 'products',
          requiresAuth: false,
        },
        component: () => import('@/views/apps/e-commerce/products/index.vue'),
      },
      {
        path: 'categories',
        name: 'ecommerce.categories',
        meta: {
          label: '種類列表',
          icon: 'ti ti-list',
          key: 'categories',
          requiresAuth: true,
        },
        component: () => import('@/views/apps/e-commerce/categories/index.vue'),
      },
      {
        path: 'orders',
        name: 'ecommerce.orders',
        meta: {
          label: '訂單列表',
          icon: 'ti ti-list',
          key: 'orders',
          requiresAuth: true,
        },
        component: () => import('@/views/apps/e-commerce/orders/index.vue'),
      },
      {
        path: 'admins',
        name: 'ecommerce.admins',
        meta: {
          label: '管理員列表',
          icon: 'ti ti-list',
          key: 'customers',
          requiresAuth: true,
        },
        component: () => import('@/views/apps/e-commerce/admins/index.vue'),
      },
      {
        path: 'customers',
        name: 'ecommerce.customers',
        meta: {
          label: '客戶列表',
          icon: 'ti ti-list',
          key: 'customers',
          requiresAuth: true,
        },
        component: () => import('@/views/apps/e-commerce/customers/index.vue'),
      },
    ],
  },
  {
    path: '/auth/',
    meta: {
      key: 'auth',
      label: 'Auth Pages',
      icon: 'ti ti-lock',
      show: false,
    },
    children: [
      {
        path: 'login',
        name: 'auth.login',
        meta: {
          label: 'Login',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/login.vue'),
      },
      {
        path: 'register',
        name: 'auth.register',
        meta: {
          label: 'Register',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/register.vue'),
      },
      {
        path: 'logout',
        name: 'auth.logout',
        meta: {
          label: 'Logout',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/logout.vue'),
      },
      {
        path: 'recover-password',
        name: 'auth.recover-password',
        meta: {
          label: 'Recover Password',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/recover-password.vue'),
      },
      {
        path: 'create-password',
        name: 'auth.create-password',
        meta: {
          label: 'Create Password',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/create-password.vue'),
      },
      {
        path: 'lock-screen',
        name: 'auth.lock-screen',
        meta: {
          label: 'Lock Screen',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/lock-screen.vue'),
      },
      {
        path: 'confirm-mail',
        name: 'auth.confirm-mail',
        meta: {
          label: 'Confirm Mail',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/confirm-mail.vue'),
      },
      {
        path: 'login-pin',
        name: 'auth.login-pin',
        meta: {
          label: 'Login with PIN',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/login-pin.vue'),
      },
      {
        path: '2fa',
        name: 'auth.2fa',
        meta: {
          label: '2FA',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/2fa.vue'),
      },
      {
        path: 'account-deactivation',
        name: 'auth.account-deactivation',
        meta: {
          label: 'Account Deactivation',
          parentKey: 'auth',
        },
        component: () => import('@/views/auth/account-deactivation.vue'),
      },
    ],
  },
];

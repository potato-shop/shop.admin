import { createRouter, createWebHistory } from 'vue-router';
import { appTitle } from '@/helpers';
import { allRoutes } from '@/router/routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
});

// set page title
router.beforeEach((to, from, next) => {
  const label = to.meta.label;
  if (label) {
    document.title = label + ' | ' + appTitle;
  } else {
    document.title = appTitle;
  }
  next();
});

export default router;

import type { RouteParamsRaw } from 'vue-router';

export type RouteType = {
  name: string;
  params?: RouteParamsRaw;
  url?: string;
};

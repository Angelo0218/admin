import type { CustomRoute, ElegantConstRoute, ElegantRoute } from '@elegant-router/types';
import { generatedRoutes } from '../elegant/routes';
import { layouts, views } from '../elegant/imports';
import { transformElegantRoutesToVueRoutes } from '../elegant/transform';

/**
 * custom routes
 *
 * @link https://github.com/soybeanjs/elegant-router?tab=readme-ov-file#custom-route
 */
const customRoutes: CustomRoute[] = [
  // override generated cloudwallet-login to force blank layout while keeping generated view import
  {
    name: 'cloudwallet-login',
    path: '/cloudwallet-login',
    component: 'layout.blank$view.cloudwallet-login',
    meta: {
      title: 'cloudwallet-login',
      i18nKey: 'cloudwallet-login',
      constant: true,
      hideInMenu: true
    }
  } as unknown as CustomRoute
];

/** create routes when the auth route mode is static */
export function createStaticRoutes() {
  const constantRoutes: ElegantRoute[] = [];

  const authRoutes: ElegantRoute[] = [];

  const customRouteNameSet = new Set(customRoutes.map(route => route.name as string));
  const routeList = [...customRoutes, ...generatedRoutes.filter(item => !customRouteNameSet.has(item.name as string))];

  routeList.forEach(item => {
    if (item.meta?.constant) {
      constantRoutes.push(item);
    } else {
      authRoutes.push(item);
    }
  });

  return {
    constantRoutes,
    authRoutes
  };
}

/**
 * Get auth vue routes
 *
 * @param routes Elegant routes
 */
export function getAuthVueRoutes(routes: ElegantConstRoute[]) {
  return transformElegantRoutesToVueRoutes(routes, layouts, views);
}

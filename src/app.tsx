import { matchRoutes } from 'umi';

// @ts-ignore
export function onRouteChange({ clientRoutes, location }) {
  const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;
  if (route) {
    // @ts-ignore
    document.title = route.title || '';
  }
}

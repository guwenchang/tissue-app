import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    name: 'goods',
    component: () => import('./view/goods'),
    meta: {
      title: '开展大病救助－助力精准扶贫'
    }
  },
  {
    name: 'paySuccess',
    component: () => import('./view/goods/success.vue'),
    meta: {
      title: '开展大病救助－助力精准扶贫'
    }
  },
  {
    name: 'error',
    component: () => import('./view/goods/error.vue'),
    meta: {
      title: '开展大病救助－助力精准扶贫'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ 
  mode: 'history',
  routes
 });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};

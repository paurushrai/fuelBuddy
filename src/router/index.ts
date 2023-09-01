import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import Home from "../views/Home.vue";
import routes from '~pages';


const router = createRouter({
  history: createWebHistory(),
  // routes,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: {
        authRequired: true,
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
      meta: {
        authRequired: true,
      }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListner = onAuthStateChanged(getAuth(), (user) => {
      removeListner();
      resolve(user);
    }, reject);
  });
};

// navigation guard to check for logged in users
router.beforeEach( async (to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert('You must be logged in to see this page');
      // next({
      //   path: '/home',
      // });
    }
  } else {
    next();
  }
});

export default router

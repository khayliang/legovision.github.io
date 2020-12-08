import { defineConfig } from 'umi';

export default defineConfig({
  history: { type: 'hash' },
  locale: { antd: false },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {exact: false, path: '/', component: '@/layouts/index',
    routes:[ 
      { path: '/', component: '@/pages/landing' },
      { path: '/dashboard', component: '@/pages/dashboard' },
      { path: '/video', component: '@/pages/video' },
      ],
    },
  ],
  theme: {
    "primary-color": "#FFAFCC",
  },
});

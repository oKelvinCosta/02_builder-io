import { createHashRouter } from 'react-router-dom';
import BuilderPageProd from './pages/builder-page-PROD';
// import Components from './pages/components';
// import BuilderPage from './pages/builder-page';

export const router = createHashRouter([
  {
    path: '*',
    element: <BuilderPageProd />,
    // element: <BuilderPage />,
  },
  // {
  //   path: '/components',
  //   element: <Components />,
  // },
]);

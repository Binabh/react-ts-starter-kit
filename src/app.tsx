import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/common/Layout';
import routes from './routes';

const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);
function App() {
  return <RouterProvider router={routers} />;
}

export default App;

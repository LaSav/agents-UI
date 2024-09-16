import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import Root from './components/Root.jsx';
import WorkflowsList from './features/workflows/WorkflowsList';
import GenerationsList from './features/generations/GenerationsList';
import EditWorkflow from './features/workflows/EditWorkflow';
import ShowGeneration from './features/generations/ShowGeneration';
import ErrorPage from './error-page.jsx';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: [
//       {
//         path: 'workflows/:workflowId',
//         element: <EditWorkflow />,
//       },
//     ],
//     errorElement: <ErrorPage />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'workflows/',
        element: <WorkflowsList />,
        children: [
          {
            path: ':workflowId',
            element: <EditWorkflow />,
          },
        ],
      },
      {
        path: 'generations/',
        element: <GenerationsList />,
        children: [
          {
            path: ':generationId',
            element: <ShowGeneration />,
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme appearance='dark'>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Theme>
  </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import Root from './components/Root.jsx';
import WorkflowsList from './features/workflows/workflowsList.jsx';
import EditWorkflow from './features/workflows/EditWorkflow.jsx';
import ErrorPage from './error-page.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'workflows/',
        element: <WorkflowsList />,
      },
      {
        path: 'workflows/:workflowId',
        element: <EditWorkflow />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

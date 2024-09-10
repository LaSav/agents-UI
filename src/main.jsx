import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store.js';
import { Provider } from 'react-redux';
import Root from './components/Root.jsx';
import WorkflowsList from './features/workflows/WorkflowsList';
import EditWorkflow from './features/workflows/EditWorkflow';
import ErrorPage from './error-page.jsx';
import '@radix-ui/themes/styles.css';
import { Theme, ThemePanel, Container } from '@radix-ui/themes';

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
    <Theme>
      <Provider store={store}>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </Provider>
      <ThemePanel />
    </Theme>
  </StrictMode>
);

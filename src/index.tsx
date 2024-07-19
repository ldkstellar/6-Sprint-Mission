import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddItemPage from './pages/AddItemPage';
import ItemsPage from './pages/ItemsPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ItemDetailPage from './pages/ItemDetailPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './style/Reset.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'main', element: <MainPage /> },

      {
        path: 'items',
        element: <ItemsPage />,
      },

      {
        path: 'signUp',
        element: <SignUpPage />,
      },
      { path: 'login', element: <LoginPage /> },

      { path: 'items/:id', element: <ItemDetailPage /> },

      { path: 'addItem', element: <AddItemPage /> },
    ],
  },
]);

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);


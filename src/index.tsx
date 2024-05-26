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
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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

root.render(<RouterProvider router={router} />);


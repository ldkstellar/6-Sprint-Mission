import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddItem from './pages/AddItem';
import Items from './pages/Items';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';

import ItemDetail from './pages/ItemDetail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'main', element: <Main /> },

      {
        path: 'items',
        element: <Items />,
      },

      {
        path: 'signUp',
        element: <SignUp />,
      },
      { path: 'login', element: <Login /> },

      { path: 'items/:id', element: <ItemDetail /> },

      { path: 'addItem', element: <AddItem /> },
    ],
  },
]);

root.render(<RouterProvider router={router} />);


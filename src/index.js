import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AddItem from './pages/AddItem';
import Items from './pages/Items';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import SpecificItem from './pages/SpecificItem';

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
      { path: 'items/:id', element: <SpecificItem /> },

      { path: 'addItem', element: <AddItem /> },
    ],
  },
]);

root.render(<RouterProvider router={router} />);


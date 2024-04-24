import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AddItem from "./pages/AddItem";
import Item from "./pages/Item";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "main", element: <Main /> },
      { path: "items", element: <Item /> },
      { path: "addItem", element: <AddItem /> },
    ],
  },
]);

root.render(<RouterProvider router={router} />);


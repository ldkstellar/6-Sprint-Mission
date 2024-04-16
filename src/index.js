import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import AddItem from "./pages/AddItem";
import Item from "./pages/Item";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },

  { path: "items/:id", element: <Item /> },

  {
    path: "addItem",
    element: <AddItem />,
  },
]);

root.render(<RouterProvider router={router} />);


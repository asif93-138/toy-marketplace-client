import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import PON from './PON.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import AuthProvider from './AuthProvider.jsx';
import Details from './Details.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import Update from './Update.jsx';
import AddingToy from './AddingToy.jsx';
import MyToys from './MyToys.jsx';
import Blog from './Blog.jsx';
import AllToys from './AllToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/details",
        element: <PrivateRoute><Details /></PrivateRoute>
      },
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys /></PrivateRoute>
      },
      {
        path: "/addtoy",
        element: <PrivateRoute><AddingToy /></PrivateRoute>,
      },
      {
        path: "/update",
        element: <PrivateRoute><Update /></PrivateRoute>
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  },
  {
    path: "*",
    element: <PON />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

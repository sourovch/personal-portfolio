import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import Home from './components/home';
import About from './components/about/about';
import Contact from './components/contact';
import Resume from './components/resume';
import Projects from './components/projects';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error!!!</h1>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about me',
        element: <About />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/portfolio',
        element: <Projects />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

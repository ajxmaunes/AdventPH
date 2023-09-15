import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Pages/About/About';
import OurTours from './Pages/OurTours/OurTours';
import Gallery from './Pages/Gallery/Gallery';
import ContactUs from './Pages/ContactUs/ContactUs';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "OurTours",
    element: <OurTours />,
  },
  {
    path: "Gallery",
    element: <Gallery />,
  },
  {
    path: "ContactUs",
    element: <ContactUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


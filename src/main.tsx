import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Layout from "./layout.tsx";
import HomePage from "./pages/homepage.tsx";
import AboutPage from "./pages/aboutPage.tsx";
// import HomePage from './pages/homepage.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      { path: "contact", element: <p>conrtact us page</p> },
      {
        path: "about",
        element: <AboutPage/>,
      },
      {path:"properties",
        element:<p>Properties page</p>
      },
      {path:"services",
        element:<p>services page</p>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

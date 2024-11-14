import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

/* pages */
import Root from "./pages/Root";
import ErrorPage from "./ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Location, { loader as locationLoader } from "./pages/Location";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Montserrat";
    margin: 0 6.25rem; /*0 100px*/
  }

  p {
    margin: 0;
  }

  /****** Media queries ***********/
  /* Small devices (smartphones, less than/equal to 375px) */
@media (max-width: 376px) {
  body {
    margin: 0 1.25rem /*0 20px*/
  }
}
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/locations/:locationId",
        element: <Location />,
        loader: locationLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, /*BrowserRouter, Routes, Route*/ } from "react-router-dom";

/* pages */
import Root from "./pages/Root";
import ErrorPage from "./ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Location, {loader as locationLoader} from "./pages/Location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
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
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />}/> 
        <Route path="*" element={<ErrorPage />}/> 
      </Routes> */}
    {/* </BrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

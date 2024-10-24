import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";

/* pages */
import Home from "./pages/Home";
import ErrorPage from "./ErrorPage";
import About from "./pages/About";
import Location from "./pages/Location";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/location",
        element: <Location />,
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

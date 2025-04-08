import React from "react";
import HomePage from "./pages/homePage";
import BookPage from "./pages/bookPage";
import MainLayout from "./layout"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout/>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="book" element={<BookPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

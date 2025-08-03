import React from "react";
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Airdrop from "./pages/Airdrop";
import ProjectDetail from "./components/common/ProjectDetail";
import Login from "./pages/Login";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Airdrop />} />
          <Route path="app/:id" element={<ProjectDetail />} />
          <Route path="app/test" element={<Test />} />
        </Route>
        <Route path="/" element={<RootLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
        <Route path="login" element={<Login />} />
      </>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;

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
import ProjectDetail from "./pages/AirdropDetail";
import Login from "./pages/Login";
import ListDetail from "./pages/ListDetail";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="airdrop/:id" element={<ProjectDetail />} />
          <Route path="app/test" element={<Test />} />
          <Route path="/list/:id" element={<ListDetail />} />
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
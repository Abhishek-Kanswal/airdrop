import React from 'react';
import RootLayout from './layouts/RootLayout';
import { Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Airdrop from './pages/Airdrop';
import Notification from './pages/Notification';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import ProjectDetail from './components/common/ProjectDetail';
import ProtectedRoute from './components/common/ProtectedRoute';
import Login from './pages/Login';

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route
          path="airdrop"
          element={
            <ProtectedRoute>
              <Airdrop />
            </ProtectedRoute>
          }
        />
        <Route path="notification" element={<Notification />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        <Route path="airdrop/:id" element={<ProjectDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
}

export default App;
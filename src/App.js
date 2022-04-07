import React from 'react';
import { Routes, Route } from 'react-router-dom';

import 'rsuite/dist/rsuite.min.css';
import SignIn from './pages/SignIn';
import './styles/main.scss';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';

function App() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route
        exact
        path="/signin"
        element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        }
      />

      <Route
        exact
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
    // </BrowserRouter>
  );
}

export default App;

// <Route exact path="/" element={<Home />} />

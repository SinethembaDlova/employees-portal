import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from './context/GlobalState'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import  Employee from './views/employee';
import  Employees from './views/employees';


function App () {

  const [setActiveClick] = useState(false);

  return (
    <GlobalProvider>
      <Router>
        <Sidebar active={setActiveClick} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/employees" replace />} />
          <Route
          exact
          path="/employees"
          element={<Employees />}
          />
          <Route
            exact
            path="/employees/:id"
            element={<Employee />}
          />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;



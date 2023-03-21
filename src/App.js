import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeeProvider } from './context/EmployeeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreateEmployee from './views/employee/create';
import Employee from './views/employee';
import Employees from './views/employees';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Navigate to="/employees" replace />} />
          <Route exact path="/employees" element={<Employees />} />
          <Route exact path="/employees/create" element={<CreateEmployee />} />
          <Route exact path="/employees/:id" element={<Employee />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;

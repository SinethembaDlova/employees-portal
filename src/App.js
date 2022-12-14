import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import  Employees from './views/employees';


function App () {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate to="/employees" replace />}></Route>
          <Route
          exact
          path="/employees"
          element={<Employees />}
          >
          </Route>
        </Routes>
      </Router>
  );
}



export default App;



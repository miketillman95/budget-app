import React from "react";
import { BrowserRouter as Router, Routes,
  Route,
  Link,
  } 
from "react-router-dom";
import Signup from './components/Login/Signup'
import Login from './components/Login/Login'
import Dashboard from './components/Budget/Dashboard'
import RequireAuth from './auth/RequireAuth'
import BudgetCard from "./components/Budget/BudgetCard";



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          </nav>

        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budgetcard" element={<BudgetCard />} />

          <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard/>
              <BudgetCard/>
            </RequireAuth>
          }
          />

        </Routes>
      </div>
    </Router>
  );
}








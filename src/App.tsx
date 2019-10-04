import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RootRoutes from './router';

function App() {
  return (
    <Router>
      <RootRoutes />
    </Router>
  );
}

export default App;

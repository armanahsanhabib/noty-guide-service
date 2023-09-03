import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import NotFound from '../src/pages/NotFound';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/sohojit-task" element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
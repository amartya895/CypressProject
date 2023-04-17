import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Platform from './components/Platform';
import Pricing from './components/Pricing';
import Customers from './components/Customers';
import Events from './components/Events';
import Login from './components/login_signup/Login';
import Signup from './components/login_signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/platform' element={<Platform />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/Events' element={<Events />} />            
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    </Router>    
);

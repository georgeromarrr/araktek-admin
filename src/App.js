import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router';
import axios from 'axios'
// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Category from './pages/Category/Category';
import EditCategory from './pages/Category/EditCategory'
// API
axios.defaults.baseURL ="http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){
  const token= localStorage.getItem('auth_token');
  config.headers.Authorization= token ? `Bearer ${token}` : '';
  return config
})


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/editcategory' element={<EditCategory/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;

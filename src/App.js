import React from 'react';
import './styles/App.css';
import { Routes, Route, Navigate } from 'react-router';
import axios from 'axios'
// pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Category from './pages/Category/Category';
import EditCategory from './pages/Category/EditCategory'
import ViewCategory from './pages/Category/ViewCategory'
import AddProduct from './pages/Product/Product';
import EditProduct from './pages/Product/EditProduct';
import ViewProduct from './pages/Product/ViewProduct';
import ViewInventory from './pages/Inventory/ViewInventory';

// API
axios.defaults.baseURL ="http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){
  const token= localStorage.getItem('auth_admin');
  config.headers.Authorization= token ? `Bearer ${token}` : '';
  return config
})


function App() {
  return (
    <div>
      <Routes>
        {/* CHANGE TO THIS KAPAG FINAL NA */}
        {/* <Route path="/" element={!localStorage.getItem('auth_admin') ? <Navigate to='/login'/> : <Home/>} />
        <Route path="/login" element={localStorage.getItem('auth_admin') ? <Navigate to='/'/> : <Login/>} /> */}
        {/* ETO YUNG PAPALITAN */}
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={localStorage.getItem('auth_admin') ? <Navigate to='/'/> : <Login/>} />
        {/* END */}
        <Route path='/category' element={<Category/>}/>
        <Route path='/editcategory/:id' element={<EditCategory />} />
        <Route path='/viewcategory' element={<ViewCategory/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/editproduct/:id' element={<EditProduct />} />
        <Route path='/viewproduct' element={<ViewProduct/>}/>
        <Route path='/viewinventory' element={<ViewInventory/>}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;

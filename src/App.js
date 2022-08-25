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
import AddCategory from './pages/Category/AddCategory'
import AddProduct from './pages/Product/AddProduct';
import EditProduct from './pages/Product/EditProduct';
import Product from './pages/Product/Product';
import ViewInventory from './pages/Inventory/ViewInventory';
import AdminPrivateRoute from './AdminPrivateRoute'
// API
axios.defaults.baseURL ="https://obscure-bayou-47416.herokuapp.com/";
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
          <Route path="/login" element={localStorage.getItem('auth_admin') ? <Navigate to='/'/> : <Login/>} />
        <Route element={<AdminPrivateRoute />} >
          <Route path='/' element={<Home/>}/>
          {/* END */}
          <Route path='/category' element={<Category/>}/>
          <Route path='/editcategory/:id' element={<EditCategory />} />
          <Route path='/addcategory' element={<AddCategory/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/editproduct/:id' element={<EditProduct />} />
          <Route path='/viewproduct' element={<Product/>}/>
          <Route path='/viewinventory' element={<ViewInventory/>}/>
          <Route path="/register" element={<Register />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

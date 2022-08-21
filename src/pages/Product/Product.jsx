import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Panels from "../../components/Panels/Panels";
import AddCat from "../../components/Category/AddCat";
import EditCat from '../../components/Category/EditCat';
import ViewCat from '../../components/Category/ViewCat'
import AddPro from '../../components/Product/AddPro'



const Product = () => {
  return (
    <div className="dark:bg-neutral-900 bg-white h-screen">
      <Navbar />
      <Sidebar>
        <AddPro/>
      </Sidebar>
    </div>
  );
};

export default Product;

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Panels from "../../components/Panels/Panels";
import Home_Table from "../../components/Table/Home/Home_Table";

const Home = () => {
  return (
    <div className="dark:bg-neutral-900 bg-white h-screen">
      <Navbar />
      <Sidebar>
        <Panels />
        <Home_Table />
      </Sidebar>
    </div>
  );
};

export default Home;

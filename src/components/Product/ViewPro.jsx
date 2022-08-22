import React, { useEffect, useState } from "react";
import { TableContainer, SectionTitle } from "./Table_Components";
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';

const ViewPro = () => {
  const [perPage, setPerPage] = useState(5);
  const [initIndex, setInitIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);
  const [page, setPage] = useState(1);
  const [filterTable, setfilterTable] = useState("Pending");
  const [nextBtnEnable, setNextBtnEnable] = useState(false);
  const [prevBtnEnable, setPrevBtnEnable] = useState(true);
  const [loading, setLoading] = useState(true);
  const [productlist, setProductlist] = useState([]);

  const handleSelectValue = (e) => {
    setPerPage(parseInt(e.target.value));
    setLastIndex(parseInt(e.target.value));
  };

  const handleSelectedFilter = (e) => {
    setfilterTable(e.target.value);
  };

  useEffect(() => {
    console.log("Filter Changed to: " + filterTable);
    setPerPage(perPage);
    setInitIndex(0);
    setLastIndex(perPage);
    setPage(1);
    setNextBtnEnable(false);
    setPrevBtnEnable(true);
  }, [filterTable]);

  useEffect(() => {
    console.log("perPage Changed to: " + perPage);
    setPerPage(perPage);
    setInitIndex(0);
    setLastIndex(perPage);
    setPage(1);
    setNextBtnEnable(false);
    setPrevBtnEnable(true);
  }, [perPage]);

  const handleSetFilter = (rootData) => {
    if (filterTable === "All") {
      return rootData;
    } else {
      return rootData.filter(({ status }) => status === filterTable);
    }
  };

  const handleDataLength = (rootData) => {
    if (filterTable === "All") {
      return rootData.length;
    } else {
      return rootData.filter(({ status }) => status === filterTable).length;
    }
  };

  const initPage = Math.ceil(handleDataLength(productlist) / perPage);

  const handleNext = () => {
    let currentPage = page;
    let lastValue = lastIndex;

    if (handleDataLength(productlist) > lastIndex) {
      currentPage += 1;
      lastValue += perPage;
      setInitIndex(lastIndex);
      setLastIndex(lastValue);
      setPage(currentPage);
      setPrevBtnEnable(false);
    }

    if (initPage === currentPage) {
      setNextBtnEnable(true);
    }
  };

  const handlePrev = () => {
    let currentPage = page;
    let lastValue = lastIndex;
    let initValue = initIndex;

    if (handleDataLength(productlist) > initIndex) {
      if (initIndex != 0) {
        currentPage -= 1;
        initValue -= perPage;
        lastValue -= perPage;
        setInitIndex(initValue);
        setLastIndex(lastValue);
        setPage(currentPage);
        setNextBtnEnable(false);
      }
    }

    if (currentPage === 1) {
      setPrevBtnEnable(true);
    }
  };

  console.log("First: " + initIndex);
  console.log("Last: " + lastIndex);
  console.log("Page: " + page);
  console.log("PerPage: " + perPage);
  console.log("Status: " + handleDataLength(productlist));

//   API CALL
useEffect(() => {
    axios.get(`api/view-product`).then(res => {
        console.log(res.data.product)
        if (res.data.status === 200) {

            setProductlist(res.data.product);
        }
        setLoading(false);
       
    });
}, []);

var viewproduct_HTMLTABLE = "";

if (loading) {
    return <h4>Products are loading...</h4>
}
else {
    viewproduct_HTMLTABLE =
    productlist.map( (item) => {
        return(
            <tr key={item.id} className="bg-white border-b border-gray-300 dark:bg-neutral-700 dark:border-gray-600 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rela">
            <td className="py-4 px-6 text-center w-28">{item.id}</td>
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-96 text-ellipsis overflow-hidden text-center"
            >
              {item.category.name}
            </th>
    
            <td
              scope="row"
              className="py-4 px-6 text-center text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden w-48 dark:text-white"
            >
              {item.brand}
            </td>
            <td
              scope="row"
              className="py-4 px-6 text-center text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden w-48 dark:text-white"
            >
              {item.selling_price}
            </td>
            <td
              scope="row"
              className="py-4 px-6 text-center text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden w-48 dark:text-white"
            >
              <img src={`http://localhost:8000/${item.image}`} width='100px' height='100px' alt="item.name"  />
            </td>
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-ellipsis overflow-hidden w-48 text-center"
            >
              {item.status === 0 ? 'Active' : null}
            </th>
            <div className="flex justify-center gap-4">
            <Link to={`/editproduct/${item.id}`}>
            <button
              type="button"
              className="border border-green-400 text-green-400 py-2 px-6 rounded-md hover:bg-green-400 hover:text-white"
            >
              Update
            </button>
            </Link>
            <button
              type="button"
              className="border border-red-400 text-red-400 py-2 px-6 rounded-md hover:bg-red-400 hover:text-white"
            >
              Delete
            </button>
            </div>
          </tr>
        )
    });
}





  return (
    <div className="mt-14">
    <div className="flex justify-between">
        <SectionTitle />
        <Link to='/addproduct'> 
        <button
          type="button"
          className="border border-black text-black py-2 px-6 rounded-md hover:bg-green-400 hover:border-black"
        >
          Add Product
        </button>
          </Link>
    </div>
      

      <div className="flex justify-between m-2">
        <div>
          <span className="text-sm italic">Display</span>
          <select
            onClick={handleSelectValue}
            className="h-9 mx-2 text-sm italic font-semibold self-center text-black border border-black focus:border-black rounded-md outline outline-0 ring-0 focus:ring-white focus:ring-1 dark:bg-neutral-900 dark:text-white dark:border-white"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
          <span className="text-sm italic">rows</span>
        </div>
        <div>
          <span className="text-sm italic mx-2">Filter Status by: </span>
          <select
            onClick={handleSelectedFilter}
            className="h-9 mx-2 text-sm font-medium self-center text-black border border-black focus:border-black rounded-md outline outline-0 ring-0 focus:ring-white focus:ring-1 dark:bg-neutral-900 dark:text-white dark:border-white"
          >
            <option value={"Pending"} className="text-yellow-600 uppercase">
              Pending
            </option>
            <option value={"Active"} className="text-green-600 uppercase">
              Active
            </option>
            <option value={"Disabled"} className="text-red-600 uppercase">
              Disabled
            </option>
            <option value={"Declined"} className="text-neutral-400 uppercase">
              Declined
            </option>
            <option
              value={"All"}
              className="text-black uppercase dark:text-white"
            >
              All
            </option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg  rounded-md w-[80vw] h-[38.5vh] outline outline-1 relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-fixed">
          <thead className="text-xs text-white uppercase bg-neutral-700 dark:bg-neutral-900 dark:text-gray-200 sticky top-0 z-20">
            <tr>
              <th scope="col" className="py-3 px-6 text-center w-28">
                Id
              </th>
              <th scope="col" className="py-3 px-6 text-center w-48">
                Category Name
              </th>
              <th scope="col" className="py-3 px-6 text-center w-48">
                Brand
              </th>
              <th scope="col" className="py-3 px-6 text-center w-48">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6 text-center w-48">
                Selling Price
              </th>
              <th scope="col" className="py-3 px-6 text-center w-48">
                Product Image
              </th>
              <th scope="col" className="py-3 px-6 text-center w-36">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {viewproduct_HTMLTABLE}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between my-4 mx-2">
        <p className="text-sm italic">
          <span>Showing</span>
          <span className="mx-1">page</span>
          <span className="font-semibold">{page}</span>
          <span className="mx-1">out of</span>
          <span className="font-semibold">{initPage}</span>
          <span className="mx-1">pages</span>
        </p>
        <div className="flex gap-3 items-center relative">
          <button
            onClick={handlePrev}
            disabled={prevBtnEnable}
            type="button"
            className="border border-black text-black py-2 px-4 rounded-md hover:bg-gray-200 hover:text-black z-50 text-xs font-bold disabled:opacity-25 dark:text-white dark:border-white dark:hover:text-black"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={nextBtnEnable}
            type="button"
            className="border border-black text-black py-2 px-4 rounded-md hover:bg-gray-200 hover:text-black z-50 text-xs font-bold disabled:opacity-25 dark:text-white dark:border-white dark:hover:text-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewPro;

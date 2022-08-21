import React, { useEffect, useState } from "react";
import { TableContainer, SectionTitle } from "./Table_Components";
import TableData from "./TableData";

const Home_Table = () => {
  const [perPage, setPerPage] = useState(5);
  const [initIndex, setInitIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);
  const [page, setPage] = useState(1);
  const [filterTable, setfilterTable] = useState("Pending");

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
  }, [filterTable]);

  useEffect(() => {
    console.log("perPage Changed to: " + perPage);
    setPerPage(perPage);
    setInitIndex(0);
    setLastIndex(perPage);
    setPage(1);
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

  const handleNext = () => {
    let currentPage = page;
    let lastValue = lastIndex;

    if (handleDataLength(TableData) > lastIndex) {
      currentPage += 1;
      lastValue += perPage;
      setInitIndex(lastIndex);
      setLastIndex(lastValue);
      setPage(currentPage);
    } else {
      console.log("Page max reached ");
    }
  };

  const handlePrev = () => {
    let currentPage = page;
    let lastValue = lastIndex;
    let initValue = initIndex;

    if (handleDataLength(TableData) > initIndex) {
      if (initIndex != 0) {
        currentPage -= 1;
        initValue -= perPage;
        lastValue -= perPage;
        setInitIndex(initValue);
        setLastIndex(lastValue);
        setPage(currentPage);
      }
    } else {
      console.log("Page max reached ");
    }
  };

  console.log("First: " + initIndex);
  console.log("Last: " + lastIndex);
  console.log("Page: " + page);
  console.log("PerPage: " + perPage);
  console.log("Status: " + handleDataLength(TableData));

  return (
    <div className="mt-14">
      <SectionTitle />

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
              <th scope="col" className="py-3 px-6 text-center w-96">
                Product Name
              </th>
              <th scope="col" className="py-3 px-6 text-center w-48">
                Reviewed by
              </th>
              <th scope="col" className="py-3 px-6 text-center w-96">
                Feedback
              </th>
              <th scope="col" className="py-3 px-6 text-center w-36">
                Rating
              </th>
              <th scope="col" className="py-3 px-6 text-center w-30">
                Status
              </th>
              <th scope="col" className="py-3 px-6 text-center w-44">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {handleSetFilter(TableData)
              .slice(initIndex, lastIndex)
              .map((item) => (
                <TableContainer
                  key={item.id}
                  id={item.id}
                  product_name={item.product_name}
                  reviewer={item.reviewer}
                  comments={item.comments}
                  rating={item.rating}
                  status={item.status}
                />
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between my-4 mx-2">
        <p className="text-sm italic">
          Showing <span className="font-semibold">{initIndex + 1}</span>
          <span className="mx-1">to</span>
          <span className="font-semibold">{lastIndex}</span>
          <span className="mx-1">of</span>
          <span className="font-semibold">
            {handleDataLength(TableData)}
          </span>{" "}
          results
        </p>
        <div className="flex gap-3 items-center relative">
          <button
            onClick={handlePrev}
            type="button"
            className="border border-black text-black py-2 px-4 rounded-md hover:bg-gray-200 hover:text-black z-50 text-xs font-bold disabled:opacity-25 dark:text-white dark:border-white dark:hover:text-black"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
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

export default Home_Table;

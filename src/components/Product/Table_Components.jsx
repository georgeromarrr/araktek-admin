import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";

export const SectionTitle = () => {
  return (
    <div className="flex justify-start mt-12 mb-8">
      <p className="text-2xl font-bold dark:text-white">List of Products</p>
    </div>
  );
};

export const LoadingSpinner = () => {
  return (
    <div className="absolute inset-1/4">
      <div role="status" className="flex justify-center my-24">
        <svg
          aria-hidden="true"
          className="w-16 h-16 text-gray-400 animate-spin dark:text-gray-600 fill-black opacity-75"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export const TableContainer = (props) => {
  const redirectTo = useNavigate();
  return (
    <>
      <tr
        key={props.id}
        className="bg-white border-b border-gray-300 dark:bg-neutral-700 dark:border-gray-600 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <td className="py-4 px-6 text-center w-14">{props.id}</td>
        <td
          scope="row"
          className="py-4 px-6 text-gray-900 w-28 dark:text-white flex m-auto whitespace-nowrap"
        >
          <img
            src={`https://obscure-bayou-47416.herokuapp.com/${props.image}`}
            alt={props.name}
            className="w-14 h-14 whitespace-nowrap text-ellipsis overflow-hidden"
          />
        </td>
        <td
          scope="row"
          className="py-4 px-6 font-medium text-start text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden w-72 dark:text-white"
        >
          {props.name}
        </td>
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-36 text-ellipsis overflow-hidden text-center"
        >
          {props.category_name}
        </th>
        <td
          scope="row"
          className="py-4 px-6 text-center text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden w-28 dark:text-white"
        >
          {props.brand}
        </td>
        <td
          scope="row"
          className="py-4 px-6 text-center text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden w-28 dark:text-white"
        >
          ₱{props.selling_price.toLocaleString()}
        </td>
        <td
          scope="row"
          className="py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white text-ellipsis overflow-hidden w-28 text-center"
        >
          {props.status === 1 ? "Active" : "Inactive"}
        </td>
        <td
          scope="row"
          className="px-auto text-gray-900 whitespace-nowrap space-x-1 w-36 text-center"
        >
          <button
            type="button"
            onClick={() => redirectTo(`/editproduct/${props.id}`)}
            className="border border-green-400 text-green-400 py-2 px-4 rounded-md hover:bg-green-400 hover:text-white"
          >
            Update
          </button>
          <button
            type="button"
            className="border border-red-400 text-red-400 py-2 px-4 rounded-md hover:bg-red-400 hover:text-white"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

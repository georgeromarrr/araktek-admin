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
            src={`http://localhost:8000/${props.image}`}
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
          {props.status === 0 ? "Active" : "Inactive"}
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

import React, { useState } from "react";
import Rating from "@mui/material/Rating";

export const SectionTitle = () => {
  return (
    <div className="flex justify-start mt-12 mb-8">
      <p className="text-2xl font-bold dark:text-white">List of Categories</p>
    </div>
  );
};

export const TableContainer = (props) => {
  return (
    <>
      <tr className="bg-white border-b border-gray-300 dark:bg-neutral-700 dark:border-gray-600 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rela">
        <td className="py-4 px-6 text-center w-28">{props.id}</td>
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-96 text-ellipsis overflow-hidden"
        >
          {props.product_name}
        </th>

        <td
          scope="row"
          className="py-4 px-6 text-center text-gray-900 whitespace-nowrap text-ellipsis overflow-hidden w-48 dark:text-white"
        >
          {props.reviewer}
        </td>
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white text-ellipsis overflow-hidden w-96"
        >
          "{props.comments}"
        </th>
      </tr>
    </>
  );
};

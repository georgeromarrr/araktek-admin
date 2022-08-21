import React, { useState } from "react";
import Rating from "@mui/material/Rating";

export const SectionTitle = () => {
  return (
    <div className="flex justify-start mt-12 mb-8">
      <p className="text-2xl font-bold dark:text-white">Reviews</p>
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
        <td className="py-4 px-6 text-center w-36 dark:text-white">
          <Rating
            name="rating"
            defaultValue={props.rating}
            precision={0.5}
            readOnly
            sx={{
              fontSize: 16,
              color: "#121111",
              pr: 0.4,
            }}
          />
        </td>
        {props.status === "Pending" ? (
          <td className="py-4 px-6 text-center w-30 font-medium uppercase text-yellow-600">
            {props.status}
          </td>
        ) : (
          ""
        )}
        {props.status === "Active" ? (
          <td className="py-4 px-6 text-center w-30 font-medium uppercase text-green-600">
            {props.status}
          </td>
        ) : (
          ""
        )}
        {props.status === "Declined" ? (
          <td className="py-4 px-6 text-center w-30 font-medium uppercase text-red-600">
            {props.status}
          </td>
        ) : (
          ""
        )}
        {props.status === "Disabled" ? (
          <td className="py-4 px-6 text-center w-30 font-medium uppercase text-neutral-400">
            {props.status}
          </td>
        ) : (
          ""
        )}
        <td className="flex items-center py-4 px-6 space-x-3 justify-center w-44">
          <button
            type="button"
            className="outline outline-green-600 outline-1 text-green-600 py-2 px-4 rounded-md hover:bg-green-600 hover:text-white text-xs font-bold dark:hover:text-white dark:text-green-600"
          >
            Review
          </button>
        </td>
      </tr>
    </>
  );
};

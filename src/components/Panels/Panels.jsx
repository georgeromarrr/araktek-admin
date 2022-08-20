import React from "react";
import {
  UserIcon,
  SalesIcon,
  OrderIcon,
  UpIcon,
  DownIcon,
} from "../../assets/Icons/Icons";

const Panels = () => {
  return (
    <div className="grid grid-cols-3 gap-8 dark:text-white ">
      <div className="p-8 bg-inherit rounded-md shadow-lg text-center border border-black h-full dark:border-white">
        <div className="flex justify-between m-1">
          <div className="space-y-3">
            <div className="flex items-center">
              <h1 className="text-2xl text-start font-semibold">Users</h1>

              <div className="flex items-center mx-2">
                <p className="text-xl self-center mx-1">1%</p>
                <span>
                  <UpIcon />
                </span>
              </div>
            </div>
            <p className="text-4xl text-start">10</p>
          </div>
          <span className="flex items-end">
            <UserIcon className="h-16 w-16" />
          </span>
        </div>
      </div>
      <div className="p-8 bg-inherit rounded-md shadow-lg text-center border border-black h-full dark:border-white">
        <div className="flex justify-between m-1 gap-4">
          <div className="space-y-3">
            <div className="flex items-center">
              <h1 className="text-2xl text-start font-semibold">Sales</h1>

              <div className="flex items-center mx-2">
                <p className="text-xl self-center mx-1">2%</p>
                <span>
                  <UpIcon />
                </span>
              </div>
            </div>
            <p className="text-4xl text-start">₱ 40,000</p>
          </div>
          <span className="flex items-end">
            <SalesIcon className="h-16 w-16" />
          </span>
        </div>
      </div>
      <div className="p-8 bg-inherit rounded-md shadow-lg text-center border border-black h-full dark:border-white">
        <div className="flex justify-between m-1">
          <div className="space-y-3">
            <div className="flex items-center">
              <h1 className="text-2xl text-start font-semibold">Orders</h1>

              {/* <div className="flex items-center mx-2">
                <p className="text-xl self-center mx-1">12%</p>
                <span>
                  <UpIcon />
                </span>
              </div> */}
            </div>
            <p className="text-4xl text-start">5</p>
          </div>
          <span className="flex items-end">
            <OrderIcon className="h-16 w-16" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Panels;

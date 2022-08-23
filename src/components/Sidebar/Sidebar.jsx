import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  CategoryIcon,
  PhotoIcon,
  PromoIcon,
  BrandIcon,
  ProductIcon,
  OrderIcon,
  InventoryIcon,
  SalesIcon,
  AccountsIcon,
  AdminIcon,
  UserIcon,
  ArrowIcon,
} from "../../assets/Icons/Icons";

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const redirectTo = useNavigate();
  // const useDropdown = useClickOutside(() => {
  //   setOpen(false);
  // });

  return (
    <div className="w-full h-[89.5vh] flex">
      <div className="w-1/6 mx-1 mb-1">
        <div className="py-8 px-6 h-full rounded-md border border-black bg-white dark:bg-neutral-900 dark:border-white dark:text-white ">
          <ul className="space-y-4 py-6 content-center">
            <li
              className="flex items-center gap-4 px-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700"
              onClick={() => {
                redirectTo("/");
              }}
            >
              <HomeIcon />
              <span className="text-lg">HOME</span>
            </li>

            <li
              className="flex items-center gap-4 px-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700"
              onClick={() => {
                redirectTo("/category");
              }}
            >
              <CategoryIcon />
              <span className="text-lg">CATEGORY</span>
            </li>

            <li className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700">
              <PhotoIcon />
              <span className="text-lg">PHOTO</span>
            </li>
            <li className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700">
              <PromoIcon />
              <span className="text-lg">PROMO</span>
            </li>
            <li className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700">
              <BrandIcon />
              <span className="text-lg">BRAND</span>
            </li>
            <li
              className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700"
              onClick={() => {
                redirectTo("/viewproduct");
              }}
            >
              <ProductIcon />
              <span className="text-lg">PRODUCT</span>
            </li>
            <li className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700">
              <OrderIcon className="h-6 w-6" />
              <span className="text-lg">ORDER</span>
            </li>

            <li
              className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700"
              onClick={() => {
                redirectTo("/viewinventory");
              }}
            >
              <InventoryIcon />
              <span className="text-lg">INVENTORY</span>
            </li>
            <li className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700">
              <SalesIcon className="h-6 w-6" />
              <span className="text-lg">SALES</span>
            </li>
            <li
              className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 relative dark:hover:bg-neutral-700"
              onClick={() => setOpen(!isOpen)}
              type="button"
            >
              <AccountsIcon />
              <span className="text-lg flex items-center">
                <p>ACCOUNT</p>
                <span
                  className={`absolute right-2 ${
                    isOpen ? "origin-center rotate-180 " : ""
                  }`}
                >
                  <ArrowIcon />
                </span>
              </span>
            </li>

            {isOpen && (
              <>
                <li className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700">
                  <AdminIcon />
                  <span className="text-lg">Admin</span>
                </li>
                <li className="flex items-center px-4 gap-4 cursor-pointer hover:bg-neutral-200 rounded-lg p-2 dark:hover:bg-neutral-700">
                  <UserIcon className="h-6 w-6" />
                  <span className="text-lg">User</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="w-full mr-1 mb-1 border border-black rounded-md bg-neutral-50 dark:bg-neutral-900 dark:border-white dark:text-white">
        <div className="m-12">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;

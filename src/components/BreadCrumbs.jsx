import React from "react";
import { HiChevronRight, HiMiniHome } from "react-icons/hi2";

import { Link } from "react-router-dom";

const BreadCrumbs = ({ currentPageTitle, links }) => {
  return (
    <div className="w-full flex gap-3 mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex  items-center">
            <Link
              to="/"
              className="inline-flex gap-1 items-center text-sm font-medium text-body hover:text-[#3A2F26]"
            >
              <HiMiniHome />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center space-x-1.5">
              <HiChevronRight />
              <span className="inline-flex items-center text-sm font-medium text-body hover:text-[#3A2F26]">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbs;

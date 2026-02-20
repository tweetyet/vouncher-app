import React from "react";
import { FaSearch, FaCartPlus, FaEdit } from "react-icons/fa";
import { HiComputerDesktop } from "react-icons/hi2";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const VoucherList = () => {
  return (
    <div>
    <div className="flex justify-between mb-3 ">
      <div className="">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-3 flex items-center ps-3.5 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search Voucher"
            className="w-full pl-15 pr-4 py-2 bg-[#F3EBDD] 
     border border-[#B8A98C] 
     text-[#3A2F26] 
     placeholder-[#9C8A6E]
     rounded-md 
     focus:outline-none 
     focus:ring-2 
     focus:ring-[#A9977A] 
     focus:border-[#3A2F26]
     transition duration-200"
          />
        </div>
      </div>
      <div className="">
        <Link to={"/sale"}
          className="px-6 py-2 flex items-center gap-2
       bg-[#3A2F26] 
       text-[#F3EBDD] 
       rounded-md 
       border border-[#241A14]
       hover:bg-[#241A14]
       active:scale-95
       transition duration-200"
        >
         Create Sale
          <HiComputerDesktop className="size-5"/>
        </Link>
      </div>
    </div>
    <div className="relative overflow-x-auto rounded-base border border-default ">
      <table className="w-full text-sm text-left rtl:text-right text-body rounded-lg border-brown-100 border ">
        <thead className="bg-[#3A2F26] text-[#F3EBDD] border-b border-[#F3EBDD] tracking-wider">
          <tr className="">
            <th scope="col" className="px-6 py-3 font-medium ">
              #
            </th>
            <th scope="col" className="px-6 py-3 font-medium text-[#F3EBDD]">
              CUSTOMER NAME
            </th>

            <th scope="col" className="px-6 py-3 font-medium text-end">
             EMAIL
            </th>

            <th scope="col" className="px-6 py-3 font-medium text-end">
              CREATED AT
            </th>
            <th scope="col" className="px-6 py-3 font-medium text-end">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-primary even:bg-neutral border-b border-default hidden last:table-row">
            <td colSpan={5} className="px-6 py-4 text-center">
              There is no voucher
            </td>
          </tr>
          <tr className=" border-b border-default ">
            <td className="px-6 py-4">1</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-heading whitespace-nowrap"
            >
              Yamin Theint Theint Wai
            </th>

            <td className="px-6 py-4 text-end">ytheint80@gmail.com</td>
            <td className="px-6 py-4 text-end">
              <p className="text-sm">12/12/2022</p>
              <p className="text-sm">10:30 AM</p>
            </td>
            <td className="px-6 py-4">
              <div className="flex justify-end">
                <div className="inline-flex rounded-md shadow-sm overflow-hidden border border-gray-200">
                  <button
                    type="button"
                    className="p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition"
                  >
                    <FaEdit className="size-5" />
                  </button>

                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 transition border-l border-gray-200"
                  >
                    <RiDeleteBin5Fill className="size-5" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default VoucherList

import React, { useRef, useState } from "react";
import { FaSearch, FaCartPlus, FaEdit } from "react-icons/fa";
import { HiArchiveBoxXMark, HiComputerDesktop } from "react-icons/hi2";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import VoucherListRow from "./VoucherListRow";
import useSWR from "swr";
import {throttle,debounce} from "lodash";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VoucherList = () => {
  const [search, setSearch] = useState("");
  const searchInput =useRef("");

  // console.log(search);
  const { data, isLoading, error } = useSWR(
    search
      ? `${import.meta.env.VITE_API_URL}/vouchers?voucher_id_like=${search}`
      : `${import.meta.env.VITE_API_URL}/vouchers`,
    fetcher
  );
  // const handleSearch = (e) => {
  //   console.log(e.target.value)
  //   // setSearch(e.target.value);
  // };

  const handleSearch= debounce((e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
  },500);

  const handleClearSearch = () => {
    // setSearch("");
    searchInput.current.value = "";
    setSearch("");
  };
  return (
    <div>
      <div className="flex justify-between mb-3 ">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-3 flex items-center ps-3.5 pointer-events-none">
              <FaSearch className="w-4 h-4 text-gray-500" />
            </div>
            <input
              onChange={handleSearch} ref={searchInput}
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
            {search && ( <button onClick={handleClearSearch} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3A2F26]"><HiArchiveBoxXMark className="w-5 h-5 text-brown-500 hover:scale-110 transition duration-300" /></button>)}
           
          </div>
        </div>
        <div className="">
          <Link
            to={"/sale"}
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
            <HiComputerDesktop className="size-5" />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto rounded-base border border-default ">
        <table className="w-full text-sm text-left rtl:text-right text-body rounded-lg border-brown-100 border ">
          <thead className="bg-[#3A2F26] text-[#F3EBDD] border-b border-[#F3EBDD] tracking-wider">
            <tr className="">
              <th scope="col" className="px-6 py-3 font-medium ">
                #VoucherID
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

            {!isLoading &&
              data?.map((voucher, index) => (
                <VoucherListRow key={index} voucher={voucher} search={search}/>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;

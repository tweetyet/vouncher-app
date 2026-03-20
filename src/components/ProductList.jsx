import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import {
  HiMiniTrash,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiTrash,
} from "react-icons/hi2";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import Pagination from "./Pagination";
import useCookie from "react-use-cookie";
import useTokenStore from "../stores/useTokenStore";

const ProductList = () => {
  // const [search, setSearch] = useState("");

  const [token] = useCookie("my_token");

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/products"
  );

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());

  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);

  const handleSearchInput = debounce((e) => {
    console.log(e.target.value);
    // setSearch(e.target.value);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`);
  }, 500);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };

  // if (isLoading) return <p>Loading...</p>;

  // console.log(data);

  return (
    <div>

    {/* Top Bar */}
    <div className="flex justify-between mb-4 flex-wrap gap-3">
      
      {/* Search */}
      <div>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <HiSearch className="w-4 h-4 text-[#3A2F26]/60" />
          </div>
  
          <input
            type="text"
            placeholder="Search Product..."
            onChange={handleSearchInput}
            className="w-full sm:w-64 ps-10 px-4 py-2.5 rounded-xl 
            bg-white/70 backdrop-blur-md 
            border border-[#3A2F26]/20 
            text-[#3A2F26] placeholder:text-[#3A2F26]/60
            focus:outline-none focus:ring-2 focus:ring-[#3A2F26]/40"
          />
        </div>
      </div>
  
      {/* Add Button */}
      <Link
        to="/product/create"
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl 
        bg-[#3A2F26] text-[#E0D3B8] font-medium 
        shadow-md hover:scale-105 hover:shadow-lg transition duration-200"
      >
        Add New Product
        <HiPlus />
      </Link>
    </div>
  
    {/* Table */}
    <div className="relative overflow-x-auto shadow-lg rounded-2xl 
    bg-white/70 backdrop-blur-md border border-white/40">
      
      <table className="w-full text-sm text-left text-[#3A2F26]">
        
        {/* Head */}
        <thead className="text-xs uppercase bg-[#3A2F26]/10 text-[#3A2F26]">
          <tr>
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Product name</th>
            <th className="px-6 py-3 text-end">Price</th>
            <th className="px-6 py-3 text-end">Created At</th>
            <th className="px-6 py-3 text-end">Updated At</th>
            <th className="px-6 py-3 text-end">Action</th>
          </tr>
        </thead>
  
        {/* Body */}
        <tbody className="divide-y divide-[#3A2F26]/10">
          {isLoading ? (
            <ProductListSkeletonLoader />
          ) : data?.data?.length === 0 ? (
            <ProductListEmptyStage />
          ) : (
            data?.data?.map((product) => (
              <ProductRow product={product} key={product.id} />
            ))
          )}
        </tbody>
      </table>
    </div>
  
    {/* Pagination */}
    {!isLoading && (
      <div className="mt-4">
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      </div>
    )}
  </div>
  );
};

export default ProductList;
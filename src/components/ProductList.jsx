import React from "react";
import { FaSearch, FaCartPlus, FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );

  // if(isLoading) return <p>Loading...</p>;
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
              placeholder="Search a product"
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
          <button
            className="px-6 py-2 flex items-center gap-2
         bg-[#3A2F26] 
         text-[#F3EBDD] 
         rounded-md 
         border border-[#241A14]
         hover:bg-[#241A14]
         active:scale-95
         transition duration-200"
          >
            Add new product
            <FaCartPlus />
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto   rounded-base border border-default ">
        <table className="w-full text-sm text-left rtl:text-right text-body rounded-lg border-brown-100 border">
          <thead className="bg-[#3A2F26] text-[#F3EBDD] border-b border-[#F3EBDD] tracking-wider">
            <tr className="">
              <th scope="col" className="px-6 py-3 font-medium ">
                #
              </th>
              <th scope="col" className="px-6 py-3 font-medium text-[#F3EBDD]">
                PRODUCT NAME
              </th>

              <th scope="col" className="px-6 py-3 font-medium text-end">
                PRICE
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
            {isLoading ? (
              <ProductListSkeletonLoader />
            ) : data.length === 0 ? (
              <ProductListEmptyStage />
            ) : (
              data.map((product) => <ProductRow product={product} key={product.id} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;

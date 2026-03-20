import { useState } from "react";
import React from "react";
import { FaSearch, FaCartPlus, FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSWRConfig } from "swr";
import { spiral } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import CreatedAt from "./CreatedAt";
spiral.register();

// Default values shown

const ProductRow = ({ product: { id, product_name, price, created_at,updated_at } }) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
  const res=  await fetch(import.meta.env.VITE_API_URL + `/dashboard/products/${id}`, {
      method: "DELETE",
    });

    const json=await res.json();

   if(res.status===200){
    toast.success(json.message);
    mutate(import.meta.env.VITE_API_URL + `/dashboard/products`);
   }else{
    toast.error(json.message);
   }
    setIsDeleting(false);
  };

  return (
    <tr className=" border-b border-default ">
      <td className="px-6 py-4">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
      >
        {product_name}
      </th>

      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end">
        <CreatedAt timeStamp={created_at}/>
      </td>
      <td className="px-6 py-4 text-end">
        <CreatedAt timeStamp={updated_at}/>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-end">
          <div className="inline-flex rounded-md shadow-sm overflow-hidden border border-gray-200">
            <Link
              to={`/product/edit/${id}`}
              className="p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              <FaEdit className="size-5" />
            </Link>

            <button
              type="button"
              onClick={handleDeleteBtn}
              className="size-10 flex justify-center items-center p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 transition border-l border-gray-200"
            >
              {isDeleting ? (
                <l-spiral size="30" speed="0.9" background="transparent" color="red"></l-spiral>
              ) : (
                <RiDeleteBin5Fill className="size-5" />
              )}
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;

import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import CreatedAt from "./CreatedAt";
import { useSWRConfig } from "swr";
import { bouncy } from "ldrs";
bouncy.register();
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const VoucherListRow = ({
  voucher: { id, voucher_id, customer_name, customer_email, sale_date },
}) => {
  //delete btn
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });
    toast.success("Voucher deleted successfully!");
    mutate(import.meta.env.VITE_API_URL + `/vouchers`);
    // console.log(id);
  };
  return (
    <tr className=" border-b border-default ">
      <td className="px-6 py-4">{voucher_id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-heading whitespace-nowrap"
      >
        {customer_name}
      </th>

      <td className="px-6 py-4 text-end">{customer_email}</td>
      <td className="px-6 py-4 text-end">
        <CreatedAt timeStamp={sale_date} />
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-end">

         <div className="inline-flex rounded-md shadow-sm overflow-hidden border border-gray-200">
         <Link to={`/voucher/detail/${id}`} className="p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 transition border-l border-gray-200">
            <HiOutlineArrowLongRight className="size-5" />
          </Link>
          
         </div>
          <div className="inline-flex rounded-md shadow-sm overflow-hidden border border-gray-200">
            <button onClick={handleDeleteBtn}
              type="button"
              className="p-2 text-gray-400 hover:bg-red-50 hover:text-red-600 transition border-l border-gray-200"
            >
             {isDeleting ? (
                <l-spiral size="20" speed="0.9" background="transparent" color="red"></l-spiral>
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

export default VoucherListRow;

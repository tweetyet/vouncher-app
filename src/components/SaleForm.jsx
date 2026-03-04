import React from "react";
import { lineSpinner } from "ldrs";
import toast from "react-hot-toast";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import useRecordStore from "../stores/useRecordStore";

lineSpinner.register();
const fetcher = (url) => fetch(url).then((res) => res.json());
const SaleForm = () => {
    const {data,isLoading,error} =useSWR(import.meta.env.VITE_API_URL + "/products", fetcher);

    const {register,handleSubmit,reset}= useForm();

    const {addRecord,changeQuantity,records}= useRecordStore()

    const onSubmit=(data)=>{
        const currentProduct=JSON.parse(data.product);
        const currentProductId=currentProduct.id;
        const isExisted = records.find(({product :{id}}) => currentProductId ===id)
        // console.log(currentProduct);
       

        if (isExisted){
          changeQuantity(isExisted.id,data.quantity)
        }else{
          addRecord({
            id: Date.now(),
            product:currentProduct,
            quantity:data.quantity,
            cost:currentProduct.price* data.quantity,
            created_at:new Date().toISOString()
        });
        }
       

        reset();
    }


  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm mb-5">
      <form action="#" id="recordForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-4 items-end">
          
          {/* Product Select */}
          <div className="col-span-2">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Select Your Product
            </label>
            <select {...register("product")}
              id="productSelect"
              className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 
              border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-[#3A2F26] focus:border-[#3A2F26]
              transition"
              required
            >
                <option value="">Select a product</option>
              {!isLoading&&
              data.map((product)=>(
                <option key={product.id} value={JSON.stringify(product)} >
                    {product.product_name}

                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number" {...register("quantity")}
              min="1"
              className="w-full p-2.5 text-sm border border-gray-300 rounded-lg text-gray-900
              focus:outline-none focus:ring-2 focus:ring-[#3A2F26] focus:border-[#3A2F26]
              transition"
              required
            />
          </div>

          {/* Button */}
          <div className="col-span-1">
          <button
  type="submit"
  className="w-full items-center justify-center gap-2
  text-[#3A2F26] bg-transparent
  border border-[#3A2F26]
  hover:bg-[#3A2F26] hover:text-white
  transition-all duration-300 ease-out p-2.5
  font-medium rounded-lg text-sm h-full flex  
  shadow-sm hover:shadow-md"
>
  Add Product
</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default SaleForm;
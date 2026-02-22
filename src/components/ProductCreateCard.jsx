import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { lineSpinner } from 'ldrs'
import toast from "react-hot-toast";
lineSpinner.register()

// Default values shown


const ProductCreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleCreateProduct = async (data) => {
    setIsSending(true);

    await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
    created_at: new Date().toISOString(),}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsSending(false);
    reset();
    if(data.back_to_product_list){
navigate('/product')
    }

    toast.success("Product created successfully!");
  };

  return (
    <div className="bg-neutral-secondary p-5 rounded-lg hover:shadow-lg border border-gray-100 w-full md:w-1/2">
      <h1 className="text-2xl font-bold mb-3 text-[#3A2F26]">
        Create New Product
      </h1>
      <p className="mb-10 text-stone-500">
        Add a new product to your MiniMartie voucher platform. Complete the form
        carefully to ensure correct pricing and product information.
      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div>
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">
              New Product name
            </label>
            <input
              type="text"
              {...register("product_name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-danger-strong focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-5"
              placeholder="eg:  Apple"
            />
            {errors.product_name?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Product name is required
              </p>
            )}

            {errors.product_name?.type === "minLength" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Product name must be greater than 3 characters
              </p>
            )}

            {errors.product_name?.type === "maxLength" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Product name must be less than 10 characters
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">
              Product Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: true,
                min: 100,
                max: 10000,
              })}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-danger-strong focus:border-strong block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-5"
              placeholder="eg:  100"
            />
            {errors.price?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Product price is required
              </p>
            )}

            {errors.price?.type === "min" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Product price must be greater than 100 characters
              </p>
            )}

            {errors.price?.type === "max" && (
              <p role="alert" className="text-red-500 text-sm ">
                Product price must be less than 10000 characters
              </p>
            )}
          </div>
          <div className="flex items-center mb-4">
            <input
              id="back-to-product-list"
              {...register("back_to_product_list")}
              type="checkbox"
              value=""
              className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            />
            <label
              htmlFor="back-to-product-list"
              className="select-none ms-2 text-sm font-medium text-heading"
            >
             Back to Product List after saving
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="correct-field"
              {...register("correct_field")}
              type="checkbox"
              value="" required
              className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            />
            <label
              htmlFor="correct-field"
              className="select-none ms-2 text-sm font-medium text-heading"
            >
             Make sure all field are filled!
            </label>
          </div>

          <Link
            to="/product"
            className="
            px-4 py-2.5 rounded-lg mr-3
    text-white font-medium 
    bg-gradient-to-r 
    from-[#8a7668] 
    via-[#6f5a4d] 
    to-[#5a473c]
    hover:from-[#7a6658]
    hover:to-[#4a3b31]
    transition-all duration-300
    shadow-md hover:shadow-lg
  "
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="text-white bg-[#3A2F26] inline-flex gap-3 box-border border border-transparent hover:bg-[#A9977A] focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
          <span>  Save Product</span>
            {isSending && (
              <l-line-spinner
              size="20"
              stroke="3"
              speed="1" 
              color="white" 
            ></l-line-spinner>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateCard;

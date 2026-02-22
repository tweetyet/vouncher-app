import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { lineSpinner } from "ldrs";
import SaleForm from "../components/SaleForm";
lineSpinner.register();

const VoucherInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [isSending, setIsSending] = useState(false);


function generateInvoiceNumber() {
    const date = new Date();
    const formattedDate= date
    .toISOString().
    slice(0, 10)
    .replace(/-/g, "");

    const randomNumber= Math.floor(1000+ Math.random() * 9000);

    const invoiceNumber= `INV-${formattedDate}-${randomNumber}`;
    return invoiceNumber;
    
  }

  return (
   <div>
     <form onSubmit={handleSubmit(onSubmit)} id="infoForm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-1">
          <div className="mb-5">
            <label className="block mb-2.5 text-sm font-medium text-heading">
              Voucher ID
            </label>
            <input
              type="text" defaultValue={generateInvoiceNumber()}
              {...register("voucher_id", {
                required: true,
              })}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-danger-strong focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-5"
              placeholder="eg:  V120384"
            />
            {errors.voucher_id?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Product name is required
              </p>
            )}
          </div>
        </div>

        <div className="col-span-1">
          <div className="mb-5">
            <label className="block mb-2.5 text-sm font-medium text-heading">
              Customer Name
            </label>
            <input
              type="text"
              {...register("customer_name", {
                required: true,
              })}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-danger-strong focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-5"
              placeholder="eg:  Yamin"
            />
            {errors.customer_name?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Customer name is required
              </p>
            )}
          </div>
        </div>

        <div className="col-span-1">
          <div className="mb-5">
            <label className="block mb-2.5 text-sm font-medium text-heading">
              Customer Email
            </label>
            <input
              type="text"
              {...register("customer_email", {
                required: true,
              })}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-danger-strong focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-5"
              placeholder="eg:  ytheint80@gmail.com"
            />
            {errors.customer_email?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Customer Email is required
              </p>
            )}
          </div>
        </div>

        <div className="col-span-1">
          <div className="mb-5">
            <label className="block mb-2.5 text-sm font-medium text-heading">
              Sale Date
            </label>
            <input
              type="date" defaultValue={new Date().toISOString().slice(0, 10)}
              {...register("sale_date", {
                required: true,
              })}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-danger-strong focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body mb-5"
              placeholder="eg:  2023-01-01"
            />
            {errors.sale_date?.type === "required" && (
              <p role="alert" className="text-red-500 text-sm mt-1">
                Sale date is required
              </p>
            )}
          </div>
        </div>
      </div>

    
    </form>
   

   <SaleForm/>
   <button form="infoForm"
              type="submit"
              className="inline-flex items-center justify-center gap-2
              text-white bg-[#3A2F26]
              hover:bg-[#E0D3B8] hover:text-[#3A2F26]
              transition-all duration-300 ease-out
              font-medium rounded-lg text-sm px-4 py-2.5
              shadow-sm hover:shadow-md mt-5"
            >
              Save Product
            </button>


   </div>
  );
};

export default VoucherInfo;

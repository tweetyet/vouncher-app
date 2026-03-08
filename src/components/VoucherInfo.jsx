import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { lineSpinner } from "ldrs";
import SaleForm from "../components/SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
lineSpinner.register();

const VoucherInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    setIsSending(true);
    const total= records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.07;
    const netTotal = total + tax;
    const currentVoucher={...data,records,total,tax,netTotal};

  const res=  await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      body: JSON.stringify(currentVoucher),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json= await res.json();
    toast.success("Voucher created successfully!");
    resetRecord();
    reset();
    setIsSending(false);
    if(data.redirect_to_detail){
      navigate(`/voucher/detail/${json.id}`)

    }
   
  };

  const [isSending, setIsSending] = useState(false);
  const {records,resetRecord}=useRecordStore();

  function generateInvoiceNumber() {
    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;
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
                type="text"
                defaultValue={generateInvoiceNumber()}
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
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
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

      <SaleForm />
      <VoucherTable className=""/>

      <div className="flex flex-col justify-end items-end gap-4 mt-5">
        {/* Checkbox */}
        <div className="flex items-center">
          
          <label
            htmlFor="redirect_to_detail"
            className="select-none ms-2 text-sm font-medium text-gray-700"
          >
           Redirect to Voucher Detail
          </label>
          <input
            id="redirect_to_detail"
            {...register("redirect_to_detail")}
            type="checkbox"
            required
            form="infoForm"
            className="w-4 h-4 border border-gray-300 rounded 
      bg-gray-100 focus:ring-2 focus:ring-[#3A2F26]"
          />
        </div>

        <div className="flex items-center">
          
          <label
            htmlFor="correct-field"
            className="select-none ms-2 text-sm font-medium text-gray-700"
          >
            Make sure all fields are filled!
          </label>
          <input
            id="correct-field"
            {...register("correct_field")}
            type="checkbox"
            required
            form="infoForm"
            className="w-4 h-4 border border-gray-300 rounded 
      bg-gray-100 focus:ring-2 focus:ring-[#3A2F26]"
          />
        </div>


        {/* Button */}
        <button
          form="infoForm"
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center gap-2
    text-white bg-[#3A2F26]
    hover:bg-[#E0D3B8] hover:text-[#3A2F26]
    transition-all duration-300 ease-out
    font-medium rounded-lg text-sm px-5 py-2.5
    shadow-sm hover:shadow-md
    disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>Confirm Voucher</span>

          {isSending && (
            <l-line-spinner
              size="18"
              stroke="3"
              speed="1"
              color="white"
            ></l-line-spinner>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoucherInfo;

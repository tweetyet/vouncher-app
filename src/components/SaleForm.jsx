import React from "react";
import { lineSpinner } from "ldrs";
import toast from "react-hot-toast";

lineSpinner.register();

const SaleForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
      <form action="#" id="recordForm">
        <div className="grid grid-cols-5 gap-4 items-end">
          
          {/* Product Select */}
          <div className="col-span-2">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Select Your Product
            </label>
            <select
              id="productSelect"
              className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 
              border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-[#3A2F26] focus:border-[#3A2F26]
              transition"
              required
            >
              <option value="1">Apple</option>
              <option value="2">Mango</option>
              <option value="3">Banana</option>
              <option value="4">Orange</option>
              <option value="5">Lime</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              className="w-full p-2.5 text-sm border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-[#3A2F26] focus:border-[#3A2F26]
              transition"
              required
            />
          </div>

          {/* Button */}
          <div className="col-span-1">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2
              text-white bg-[#3A2F26]
              hover:bg-[#E0D3B8] hover:text-[#3A2F26]
              transition-all duration-300 ease-out
              font-medium rounded-lg text-sm px-4 py-2.5
              shadow-sm hover:shadow-md"
            >
              Buy Product
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default SaleForm;
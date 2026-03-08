import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import printJS from "print-js";
import html2pdf from "html2pdf.js";

const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherCard = () => {
  
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/vouchers/${id}`,
    fetcher
  );

  const handlePrint=()=>{
    // window.print();
    printJS({
      printable: "printArea",
      type: 'html',
      css:[
        '/src/index.css'
      ]
      // header: null
    })
  }

  const handlePdf =() => {
    const element =document.getElementById("printArea");
    const opt={
      margin: 0.1,
      filename: "invoice.pdf",
      image:{type:"jpeg",quality:0.98},
      html2canvas:{scale:2},
      jsPDF:{unit:"in",format:"a5",orientation:"portrait"}
    };
    html2pdf().from(element).set(opt).save();

  }

  if (isLoading) return;
  <p>Loading...</p>;

  const subtotal= data.records.reduce((a, b) => a + b.cost, 0);
  const tax = subtotal * 0.07;
  const grandTotal = subtotal + tax;

  return (
   <div className="flex gap-5">
     <div id="printArea" className="w-[21cm] bg-[#F0EBE3] text-[#1A1A1A] font-sans rounded-lg shadow-lg">
      <div className="px-12 pt-12 pb-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <h1
            className="text-6xl font-black tracking-tight text-[#3A2F26] leading-none"
            style={{ fontStyle: "italic" }}
          >
            INVOICE
          </h1>
          <div className="text-right">
            <p className="text-xl font-black text-[#e1c791] leading-tight tracking-tight">
              POS system 
              <br /> 
             <p className="text-[#595454]">MiniMartie</p>
            </p>
          </div>
        </div>

        {/* Invoice Info + Company Address */}
        <div className="flex justify-between mb-10">
          <div className="text-sm leading-relaxed ">
            <p className="">
              <span className="font-semibold leading-6">INVOICE NUMBER:</span>{" "}
              {data.voucher_id}
            </p>
            <p>
              <span className="font-semibold leading-6">DATE:</span> {data.sale_date}
            </p>
          </div>
          <div className="text-right text-sm leading-relaxed">
            <p>228/8 HanKaeo,</p>
            <p>CHIANG MAI</p>
            <p>+123-456-7890</p>
          </div>
        </div>

        {/* Bill To + Payment Method */}
        <div className="flex justify-between mb-10">
          <div>
            <h2 className="text-lg font-bold mb-1">Bill To:</h2>
            <div className="text-sm leading-relaxed">
              <p className="font-semibold">{data.customer_name}</p>
              <p>123 Anywhere st., Any City</p>
              <p>+123-456-7890</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-bold mb-1">Payment Method</h2>
            <div className="text-sm leading-relaxed">
              <p>Bangkok Bank:0000000</p>
              <p>SCB Bank:0000000</p>
              <p className="font-semibold">Mrs_AkariTheint</p>
              <p>+123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mb-4">
          {/* Table Header */}
          <div className="grid grid-cols-[1fr_80px_100px_120px] border-y-2 border-[#1A1A1A] py-3">
            <span className="text-xs font-bold tracking-wider">
              DESCRIPTION
            </span>
            <span className="text-xs font-bold tracking-wider text-center">
              QTY
            </span>
            <span className="text-xs font-bold tracking-wider text-center">
              PRICE
            </span>
            <span className="text-xs font-bold tracking-wider text-right">
              SUBTOTAL
            </span>
          </div>

          {/* Table Body */}

          {data.records.map((record, index) => (
            <div
              key={record.id} 
              className="grid grid-cols-[1fr_80px_100px_120px] border-b border-[#C4BFAF] py-4"
            >
              <span className=" text-sm font-medium">
                {record.product.product_name}
              </span>
              <span className=" text-sm text-center">{record.quantity}</span>
              <span className=" text-sm text-center">
                {record.product.price}
              </span>
              <span className=" text-sm text-right">{record.cost}</span>
            </div>
          ))}

          {/* Empty rows for visual spacing */}
          {[...Array(1)].map((_, index) => (
            <div
              key={`empty-${index}`}
              className="grid grid-cols-[1fr_80px_100px_120px] border-b border-[#C4BFAF] py-4"
            >
              <span>&nbsp;</span>
            </div>
          ))}

          {/* Tax Row */}
          <div  className="grid grid-cols-[1fr_80px_100px_120px] border-b border-[#1A1A1A] py-3 items-center">
            <span></span>
            <span></span>
            <span className="text-xs font-bold tracking-wider text-right">
              TAX (7%)
            </span>
            <span className="text-lg font-semibold text-right">
              {tax.toFixed(2)}
            </span>
          </div>

          {/* Grand Total Row */}
          <div  className="grid grid-cols-[1fr_80px_100px_120px] py-3 text-lg font-bold items-center">
            <span></span>
            <span></span>
            <span className="text-xs font-bold tracking-wider text-right">
              GRAND TOTAL
            </span>
            <span className="text-lg font-bold text-right">
              {grandTotal.toFixed(2)}
            </span>
          </div>
        </div>
           

            
          

         

      {/* Footer */}
      <div className="px-12 pb-12 pt-6">
        <div className="flex justify-between items-start gap-8">
          {/* Terms */}
          <div className="flex-1 max-w-[280px]">
            <h3 className="text-sm font-bold tracking-wider mb-3">
              TERM & CONDITION
            </h3>
            <p className="text-xs leading-relaxed text-[#4A4A4A]">
             Payment is due within 7 days from the invoice date.
             Thank You for your business.
            </p>
          </div>

          {/* Contact */}
          <div className="flex-1 max-w-[240px]">
            <h3 className="text-xs font-bold tracking-wider mb-2">
              FOR ANY QUESTIONS, PLEASE CONTACT
            </h3>
            <p className="text-xs leading-relaxed text-[#4A4A4A] mb-3">
              HELLO@REALLYGREATSITE.COM
              <br />
              OR +66 0618023118
            </p>
            <p className="text-xs font-bold">YAMIN THEINT THEINT WAI</p>
            <p className="text-xs text-[#4A4A4A]">Frontend Developer</p>
          </div>

          {/* Signature */}
          <div className="flex-shrink-0 w-[100px] flex items-end justify-end">
            <svg
              viewBox="0 0 120 60"
              className="w-24 h-12 text-[#1A1A1A]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 45 C20 20, 30 15, 40 25 C50 35, 55 40, 60 30 C65 20, 70 10, 80 15 C90 20, 85 35, 75 40" />
              <path d="M75 40 C85 35, 95 25, 105 20" />
              <line x1="70" y1="50" x2="110" y2="50" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  <div className="flex flex-col gap-3">
  <button
      onClick={handlePrint}
      className="bg-[#1A1A1A] hover:bg-[#3A2F26] text-white font-semibold px-4 py-2 rounded-lg shadow"
    >
      Print Voucher
    </button>

    <button
      onClick={handlePdf}
      className="bg-[#1A1A1A] hover:bg-[#3A2F26] text-white font-semibold px-4 py-2 rounded-lg shadow"
    >
      Download PDF
    </button>
  </div>
   </div>
  );
};

export default VoucherCard;

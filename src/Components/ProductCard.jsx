import React, { useState } from "react";

function ProductCard({ product, isChecked, onCheck }) {
  const [open, setIsopen] = useState(false);

  return (
    <tr className="group hover:bg-[#f7f7f7] cursor-pointer border-b border-gray-300">
      {/* Sticky Checkbox */}
      <td
        className="sticky left-0 z-10 w-[36px]
        bg-white group-hover:bg-inherit
        p-[6px_6px_6px_12px]"
      >
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={isChecked}
          onChange={onCheck}
        />
      </td>

      {/* Sticky Image */}
      <td
        className="sticky left-[36px] z-10 w-[52px]
         bg-white group-hover:bg-inherit
         p-[6px]"
      >
        <div
          className="w-[40px] h-[40px] rounded-[6px]
                  border border-[#D3D3D3]
                  bg-white overflow-hidden"
        >
          <img
            src={product.image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </td>

      {/* Product */}
      <td className="p-[6px] text-left max-w-[200px]">
        <a
          href="#"
          className="block text-[12px] font-medium text-[#303030] hover:underline  leading-[16px] "
        >
          {product.Product}
        </a>
      </td>

      {/* Status */}
      <td className="p-[6px] max-w-[112px]">
        <span
          className={`inline-flex items-center text-[12px] font-[550]
          rounded-[10px] py-[2px] px-[8px]
          ${
            product.Status === "Active"
              ? "text-[#014b40] bg-[#affebf]"
              : product.Status === "Draft"
              ? "text-[#003a5a] bg-[#d5ebff]"
              : product.Status === "Archived"
              ? "text-[#616161] bg-[#E8E8E8]"
              : "text-gray-700 bg-gray-200"
          }`}
        >
          {product.Status}
        </span>
      </td>

      {/* Inventory */}
      <td className="p-[6px] max-w-[180px] text-[12px] font-[500] text-[#303030]">
        {product.Inventory}
      </td>

      {/* Category */}
      <td className="p-[6px] max-w-[112px] text-[12px]">{product.Category}</td>

      {/* Channels */}
      <td className="relative p-[6px] max-w-[112px] text-[12px] text-right text-[#303030] hover:bg-[#EAEAEA] cursor-pointer">
        {/* Clickable Area: Whole div is now clickable for better UX */}
        <div
          onClick={() => setIsopen(!open)}
          className="flex items-center justify-end px-2 py-1 group/item hover:bg-[#EAEAEA] cursor-pointer rounded-md transition-all"
        >
          <span className="text-sm text-gray-800">{product.Channels}</span>

          {/* Caret icon - Rotates when open */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className={`w-4 h-4 text-gray-600 transition-all ${
              open
                ? "opacity-100 rotate-180"
                : "opacity-0 group-hover:opacity-100"
            }`}
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.24 6.2a.75.75 0 0 1 1.06.04l2.7 2.908 2.7-2.908a.75.75 0 0 1 1.1 1.02l-3.25 3.5a.75.75 0 0 1-1.1 0l-3.25-3.5a.75.75 0 0 1 .04-1.06"
            ></path>
          </svg>
        </div>

        {open && (
          <>
            {/* Click outside to close - Added onClick here */}
            <div
              className="fixed inset-0 z-[60]"
              onClick={() => setIsopen(false)}
            />

            {/* The Popup Box - Increased z-index to stay on top */}
            <div className="absolute top-full right-0 mt-2 p-[6px] w-[225px] bg-white border border-gray-200 rounded-[16px] shadow-lg z-[70] overflow-hidden text-left">
              {/* Section 1: Online Store */}
              <div className="p-[8px] flex items-center gap-3 hover:bg-gray-50 border-b border-gray-200">
                <div className="text-[#4A4A4A]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 11.18v4.445c0 .345.28.625.625.625h2.5v-2.5c0-.69.56-1.25 1.25-1.25h1.25c.69 0 1.25.56 1.25 1.25v2.5h2.5c.345 0 .625-.28.625-.625V11.18a2.822 2.822 0 0 1-2.813-.975A2.807 2.807 0 0 1 10 11.25a2.807 2.807 0 0 1-2.188-1.045A2.807 2.807 0 0 1 5 11.18ZM7.188 7.5v.938a1.562 1.562 0 1 1-3.125 0V7.5h3.125ZM8.438 8.438V7.5h3.124v.938a1.563 1.563 0 0 1-3.124 0ZM12.813 8.438V7.5h3.124v.938a1.563 1.563 0 0 1-3.124 0ZM4.305 6.25h11.39l-.69-2.073a.625.625 0 0 0-.593-.427H5.588a.625.625 0 0 0-.592.427L4.305 6.25Z" />
                    <path
                      fillRule="evenodd"
                      d="M5 0a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H5ZM3.81 3.782A1.875 1.875 0 0 1 5.588 2.5h8.824c.807 0 1.523.516 1.778 1.282l.997 2.992v1.663c0 .833-.362 1.582-.937 2.097v5.091c0 1.035-.84 1.875-1.875 1.875h-8.75a1.875 1.875 0 0 1-1.875-1.875v-5.091a2.805 2.805 0 0 1-.938-2.097V6.774l.998-2.992Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Online Store
                </span>
              </div>

              {/* Section 2: Errors Header */}
              <div className="pt-2 pr-1.5 pb-2 pl-2">
                <span className="text-[11px]  font-bold uppercase tracking-wider text-gray-500">
                  Errors
                </span>
              </div>

              {/* Section 3: Point of Sale */}
              <div className="p-[4px] flex items-center justify-between text-[#9A750A] hover:bg-[#FFEBD5] rounded-[8px]">
                <div className="flex items-center gap-3 ">
                  {/* The Warning Icon */}
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      width="18"
                      height="18"
                      fill="currentColor"
                    >
                      <path d="M8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75"></path>
                      <path d="M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                      <path
                        fillRule="evenodd"
                        d="M15 8a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 1 1 11 0"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-sm font-medium">Point of Sale</span>
                </div>
                <svg
                  className="w-4 h-4 text-[#9A750A]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </>
        )}
      </td>

      {/* Catalogs */}
      <td className="p-[6px]  max-w-[112px] text-[12px] text-[#303030] hover:bg-[#EAEAEA] cursor-pointer text-center">
        {product.Catalogs}
      </td>

      {/* Sticky Actions */}
      <td className="sticky right-0 z-10 w-[44px] bg-white p-[6px_6px_6px_12px] group-hover:bg-inherit">
        <button
          type="button"
          aria-label="Preview on Online Store"
          className="flex items-center justify-center w-8 h-8 rounded-[10px] hover:bg-gray-200 
                opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-4 h-4 text-[#606060]"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1.5 0a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 .001"
            ></path>
            <path
              fillRule="evenodd"
              d="M8 2c-2.476 0-4.348 1.23-5.577 2.532a9.3 9.3 0 0 0-1.4 1.922 6 6 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532s4.348-1.23 5.577-2.532a9.3 9.3 0 0 0 1.4-1.922c.158-.294.283-.572.37-.818.082-.227.153-.488.153-.728s-.071-.501-.152-.728a6 6 0 0 0-.371-.818 9.3 9.3 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532m-5.999 6.002v-.004c.004-.02.017-.09.064-.223.058-.161.15-.369.278-.608a7.8 7.8 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062s3.445.958 4.486 2.062c.52.55.912 1.126 1.17 1.605.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223-.058.161-.15.369-.278.608a7.8 7.8 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062s-3.445-.958-4.486-2.062a7.7 7.7 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223"
            ></path>
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default ProductCard;

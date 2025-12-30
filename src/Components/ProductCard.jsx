import React from "react";

function ProductCard({ product }) {
  return (
    <tr className="group hover:bg-[#f7f7f7] cursor-pointer border-b border-gray-300">
      {/* Sticky Checkbox */}
      <th
        className="sticky left-0 z-10 w-[36px]
       bg-white group-hover:bg-[#f7f7f7]
       p-[6px_6px_6px_12px]"
      >
        <input type="checkbox" className="h-4 w-4" />
      </th>
      {/* Sticky Image */}

        <th
      class="sticky left-[36px] z-10 w-[52px]
             bg-white group-hover:bg-[#f7f7f7]
             p-[6px]">
      <img
      src={product.image}
        class="w-[40px] h-[40px] object-cover"
        alt=""
      />
    </th>

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
          className="inline-flex items-center text-[12px] font-[550]
         rounded-[10px] py-[2px] px-[8px]
         text-[#014b40] bg-[#affebf]"
        >
          {product.Status}
        </span>
      </td>
      {/* Inventory */}
      <td className="p-[6px] max-w-[180px] text-[12px] font-[500] [#303030]">
        {product.Inventory}
      </td>
      {/* Category */}
      <td className="p-[6px] max-w-[112px]">{product.Category}</td>
      {/* Channels */}
      <td className="p-[6px] max-w-[112px] text-[12px] text-[#303030] hover:bg-[#EAEAEA] cursor-pointer">
        {product.Channels}
      </td>
      {/* Catalogs */}
      <td className="p-[6px]  max-w-[112px] text-[12px] text-[#303030] hover:bg-[#EAEAEA] cursor-pointer">
        {product.Catalogs}
      </td>
      {/* Sticky Actions */}
      <th
        className="sticky right-0 z-10 w-[44px]
       bg-white group-hover:bg-[#f7f7f7]
       p-[6px_6px_6px_12px]"
      >
        <span className="sr-only">Actions</span>
      </th>
    </tr>
  );
}

export default ProductCard;

import React, { useState } from "react";
import ProductHeader from "../Components/ProductHeader";
import TableHeader from "../Components/TableHeader";
import ProductsData from "../ProductsData";
import ProductCard from "../Components/ProductCard";
import TableFooter from "../Components/TableFooter";

function Products() {
  const [filter, setFilter] = useState("All");
  const [SearchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const [selectedIDs, setselectedIDs] = useState([]);

  const toggleAll = () => {
    if (selectedIDs.length === filterProducts.length) {
      setselectedIDs([]);
    } else {
      setselectedIDs(filterProducts.map((p) => p.id));
    }
  };

  const toggleOne = (id) => {
    setselectedIDs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };



  let filterProducts = ProductsData.filter((product) => {
    let matchesFilter = filter === "All" ? true : product.Status === filter;

    let matchesSearch = product.Product.toLowerCase().includes(
      SearchTerm.toLowerCase()
    );
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="h-screen bg-[#F1F1F1] ">
      <ProductHeader />

      <section className="px-[16px] mt-4 ">
        <div className="w-full bg-white border border-[#E3E3E3] rounded-[12px] ">
          <TableHeader
            filter={filter}
            setFilter={setFilter}
            showSearch={showSearch}
            setShowSearch={setShowSearch}
            SearchTerm={SearchTerm} // Add this
            setSearchTerm={setSearchTerm}
          />

          <div className="overflow-x-auto">
            {/* Table Wrapper */}
            <table className="min-w-[998px] w-full border-collapse table-fixed">
              {/* HEADER card */}

              <thead className="bg-[#f6f6f7] border-b border-gray-300">
                {/* Sticky Checkbox */}
                <tr>
                  <th
                    className="sticky left-0 z-50 w-[36px] min-w-[36px] max-w-[36px]
  bg-[#f6f6f7] p-[6px_6px_6px_12px] relative"
                  >
                    <input
                      onChange={toggleAll}
                      checked={
                        selectedIDs.length === filterProducts.length &&
                        filterProducts.length > 0
                      }
                      type="checkbox"
                      className="h-4 w-4 accent-black block"
                    />
                  </th>
                  {/* Sticky Image Header (Column 2) */}
<th className="sticky left-[36px] z-50 w-[52px] min-w-[52px] max-w-[52px] bg-[#f6f6f7] p-[6px]">
  {selectedIDs.length > 0 && (
    <div className="flex items-center justify-center">
      <span className="text-[12px]  text-black   rounded-md">
        {selectedIDs.length} selected
      </span>
    </div>
  ) }
</th>

                  {/* Sortable: Product */}
                  <th className="p-[6px] w-[280px] text-left">
                    <button className="inline-flex items-center gap-1 font-[550] text-[12px] text-[#616161]">
                      Product
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 14.5a.75.75 0 0 1-.75-.75V4.06L4.53 6.78a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L8.75 4.06v9.69a.75.75 0 0 1-.75.75"
                        />
                      </svg>
                    </button>
                  </th>
                  {/* Status */}
                  <th className="p-[6px] w-[111.94px] text-left ">
                    <button className="inline-flex items-center text-[12px]  font-[550] text-[#616161]">
                      Status
                    </button>
                  </th>
                  {/* Sortable: Inventory */}
                  <th className="p-[6px] w-[181.66px] text-left">
                    <button className="text-[12px]  font-[550] text-[#616161]">
                      Inventory
                    </button>
                  </th>
                  {/* Category */}
                  <th className="p-[6px] w-[112px] text-left">
                    <button className="inline-flex items-center text-[12px]  leading-[1] font-[550] text-[#616161]">
                      Category
                    </button>
                  </th>
                  {/* Channels (numeric end) */}
                  <th className="p-[6px] w-[112.66px] text-center">
                    <button className="inline-flex items-center text-[12px]  font-[550] text-[#616161]">
                      Channels
                    </button>
                  </th>
                  {/* Catalogs (numeric end) */}
                  <th className="p-[6px] w-[112.66px] text-center">
                    <button className="inline-flex items-center text-[12px]  font-[550] text-[#616161]">
                      Catalogs
                    </button>
                  </th>

                  {/* Sticky Actions */}
                  <th className="sticky right-0 z-10 w-[44px] bg-[#f6f6f7] p-[6px_6px_6px_12px] ">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              {/* Displaying all Products */}
              <tbody className="border border-gray-300">
                {filterProducts.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isChecked={selectedIDs.includes(product.id)}
                      onCheck={() => toggleOne(product.id)}
                    />
                  );
                })}
              </tbody>
              <TableFooter />
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;

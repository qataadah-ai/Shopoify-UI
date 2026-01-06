
import  { useState } from "react";
import ProductHeader from "../Components/ProductHeader";
import TableHeader from "../Components/TableHeader";
import ProductsData from "../ProductsData";
import ProductCard from "../Components/ProductCard";
import TableFooter from "../Components/TableFooter";
import SideBar from "../Components/SideBar";

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

  const selectedCount = selectedIDs.length;

  let filterProducts = ProductsData.filter((product) => {
    let matchesFilter = filter === "All" ? true : product.Status === filter;
    let matchesSearch = product.Product.toLowerCase().includes(
      SearchTerm.toLowerCase()
    );
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <div className="flex overflow-hidden h-screen">
        <SideBar />
        <div className="flex-1 h-screen bg-[#F1F1F1] overflow-y-auto">
          <ProductHeader />

          <section className="px-[16px] mt-4">
            <div className="w-full bg-white border border-[#E3E3E3] rounded-[12px] overflow-hidden">
              <TableHeader
                filter={filter}
                setFilter={setFilter}
                showSearch={showSearch}
                setShowSearch={setShowSearch}
                SearchTerm={SearchTerm}
                setSearchTerm={setSearchTerm}
              />

              <div className="overflow-x-auto">
                {/* Table wrapper with min-width matching original table */}
                <div className="min-w-[998px]">
                  {/* HEADER ROW - Using flex to match table header structure */}
                  <div className="bg-[#f6f6f7] border-b border-gray-300 flex ">
                    {/* Sticky Checkbox Column */}
                    <div className="sticky left-0 z-20  min-w-[36px] bg-[#f6f6f7]  p-[6px_6px_6px_12px] flex items-center">
                      <input
                        onChange={toggleAll}
                        checked={
                          selectedIDs.length === filterProducts.length &&
                          filterProducts.length > 0
                        }
                        type="checkbox"
                        className="h-4 w-4 accent-black block"
                      />
                    </div>

                    {/* Image Column */}
                    <div className="sticky left-[36px] z-20  min-w-[52px] bg-[#f6f6f7]  p-[6px] flex items-center justify-center">
                      <span className="sr-only">Image</span>
                    </div>

                    {/* Product Column */}
                    <div className=" min-w-[200px] p-[6px] flex items-center">
                      <button className="inline-flex items-center gap-1 font-[550] text-[12px] text-[#616161] hover:text-black">
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
                    </div>

                    {/* Status Column */}
                    <div className=" min-w-[110px] p-[6px]  flex items-center">
                      <span className="font-[550] text-[12px] text-[#616161]">
                        Status
                      </span>
                    </div>

                    {/* Inventory Column */}
                    <div className=" min-w-[200px] p-[6px] flex items-center">
                      <span className="font-[550] text-[12px] text-[#616161]">
                        Inventory
                      </span>
                    </div>

                    {/* Category Column */}
                    <div className="min-w-[110px] p-[6px] flex-1 flex items-center">
                      <span className="font-[550] text-[12px] text-[#616161]">
                        Category
                      </span>
                    </div>

                    {/* Channels Column */}
                    <div className="min-w-[129px] p-[6px]  flex items-center justify-center">
                      <span className="font-[550] text-[12px] text-[#616161]">
                        Channels
                      </span>
                    </div>

                    {/* Catalogs Column */}
                    <div className="min-w-[129px] p-[6px]  flex items-center justify-center">
                      <span className="font-[550] text-[12px] text-[#616161]">
                        Catalogs
                      </span>
                    </div>

                    {/* Sticky Actions Column */}
                    <div className="sticky right-0 z-20 w-[44px] min-w-[44px] bg-[#f6f6f7] p-[6px_6px_6px_12px] flex items-center ml-auto">
                      <span className="sr-only">Actions</span>
                    </div>
                  </div>

                  {/* BODY - Product Rows */}
                  <div className="bg-white divide-y divide-gray-300">
                    {filterProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        isChecked={selectedIDs.includes(product.id)}
                        onCheck={() => toggleOne(product.id)}
                      />
                    ))}
                  </div>

                  {/* FOOTER */}
                  <TableFooter />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Products;

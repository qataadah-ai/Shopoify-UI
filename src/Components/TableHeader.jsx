function TableHeader({
 filter,
 setFilter,
 SearchTerm,
 setSearchTerm,
 showSearch,
  setShowSearch

    }) {
  const tabs = ["All", "Active", "Draft", "Archived"];

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-200">
      {/* LEFT: Tabs */}
      <div className="flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            onClick={() => setFilter(tab)}
            className={`px-3 py-1 text-[12px] cursor-pointer font-[550] rounded-[10px] ${
              filter === tab
                ? "bg-[#e0e0e0]" // active tab style
                : "text-[#4a4a4a] hover:bg-[#f1f1f1]"
            }`}
          >
            {tab}
          </button>
        ))}

        {/* Create new view button stays same */}
        <button
          type="button"
          aria-label="Create new view"
          className="
            inline-flex items-center justify-center
            w-7 h-7
            rounded-[10px]
            text-[#303030]
            hover:bg-[#f1f1f1]
            active:bg-[#e5e5e5]
            cursor-pointer
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-4 h-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5z" />
          </svg>
        </button>
      </div>

      {/* RIGHT: Action Buttons */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          
          {/* Search + Filter Button */}
          <button onClick={()=> setShowSearch(!showSearch)}
            type="button"
            aria-label="Search and filter products"
            className="
            flex rounded-[8px] bg-[#FFFFFF] text-[#303030] px-2 py-1.5 text-[0.75rem] font-semibold font-sans cursor-pointer inline-flex items-center justify-center [box-shadow:inset_0_0_0_.5px_#D3D3D3,inset_0_-1px_0_.5px_#B5B5B5] active:[translate-y:1px]"
          >
          
            {/* Search Icon */}
            <svg
              className="w-4 h-4 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
            
              <path
                fillRule="evenodd"
                d="M10.323 11.383a5.5 5.5 0 1 1-3.323-9.883 5.5 5.5 0 0 1 4.383 8.823l2.897 2.897a.749.749 0 1 1-1.06 1.06zm.677-4.383c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4"
              />
            </svg>
            {/* Filter Icon */}
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
             
              <path d="M1 4a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5h-12.5a.75.75 0 0 1-.75-.75" />
              <path d="M4.75 12a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" />
              <path d="M3.5 7.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5z" />
            </svg>
          </button>
          {/* Sort Button */}
          <button
            type="button"
            aria-label="Sort the results"
            className="flex rounded-[8px] bg-[#FFFFFF] text-[#484848] p-1 text-[0.75rem] font-semibold font-sans cursor-pointer inline-flex items-center justify-center [box-shadow:inset_0_0_0_.5px_#D3D3D3,inset_0_-0.5px_0_.5px_#B5B5B5] active:[translate-y:0.0625rem]"
          >
            
            {/* Sort Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-4 h-4"
            >
              
              <path d="M5.75 4.06v7.69a.75.75 0 0 1-1.5 0v-7.69l-1.72 1.72a.749.749 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.749.749 0 1 1-1.06 1.06z" />
              <path d="M11.75 4.25a.75.75 0 0 0-1.5 0v7.69l-1.72-1.72a.749.749 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.749.749 0 1 0-1.06-1.06l-1.72 1.72z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableHeader;

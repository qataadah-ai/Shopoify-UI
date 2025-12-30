function TableHeader({ filter, setFilter }) {
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
        {/* Search/Filter/Sort buttons stay same */}
      </div>
    </div>
  );
}

export default TableHeader;

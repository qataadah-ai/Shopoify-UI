import React from 'react'

function TableFooter() {
    return (
       <tfoot className="bg-[#f6f6f7] border-t border-gray-300">
  <tr>
    <td colSpan={9} className="px-4 py-2 text-sm text-gray-500 font-medium">
      <div className="flex items-center justify-between">
        {/* Pagination Buttons */}
        <div className="flex space-x-2">
          <button
            disabled
            className="flex items-center justify-center w-8 h-8 rounded border border-gray-300 bg-gray-100 text-gray-400 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M9.78 3.47a.75.75 0 0 1 0 1.06l-3.47 3.47 3.47 3.47a.749.749 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0"
              />
            </svg>
          </button>

          <button className="flex items-center justify-center w-8 h-8 rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M5.72 12.53a.75.75 0 0 1 0-1.06l3.47-3.47-3.47-3.47a.749.749 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0"
              />
            </svg>
          </button>
        </div>

        {/* Page info */}
        <span>1-50</span>
      </div>
    </td>
  </tr>
</tfoot>


    )
}

export default TableFooter

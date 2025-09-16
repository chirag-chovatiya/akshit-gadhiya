import React from "react";

const CommonTable = ({ columns, data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="w-full bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
        No data available
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-lg">
      <table className="min-w-full border-collapse">
        {/* ✅ Sticky header with gradient */}
        <thead className="bg-custom-blue text-white sticky top-0 z-10">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-4 text-left text-sm font-semibold tracking-wide"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        {/* ✅ Zebra striping + hover effects */}
        <tbody className="bg-white">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="odd:bg-gray-50 even:bg-white hover:bg-blue-50 transition-colors duration-200"
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap"
                >
                  {column.accessor === "action" ? (
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition">
                        Delete
                      </button>
                    </div>
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;

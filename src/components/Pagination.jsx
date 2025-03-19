import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postPerPage)
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center mt-4">
      <ul className="pagination flex flex-row gap-x-4 list-none">
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md transition duration-300 ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-800 text-white hover:bg-blue-900"
            }`}
          >
            Previous
          </button>
        </li>
        {/* {pageNumbers.map((number) => (
          <li
            onClick={() => paginate(number)}
            key={number}
            className="px-3 py-2 bg-[#000080] rounded-md hover:bg-blue-600 cursor-pointer transition-transform duration-300"
          >
            <a href="#" className="text-white">
              {" "}
              {number}{" "}
            </a>
          </li>
        ))} */}

        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md transition duration-300 ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-800 text-white hover:bg-blue-900"
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

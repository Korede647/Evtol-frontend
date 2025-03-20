import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postPerPage)
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center mt-4">
      {/* <ul className="pagination flex flex-row gap-x-4 list-none"> */}
        {/* <li> */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-700 text-white hover:bg-blue-800 hover:scale-105 cursor-pointer shadow-md"
            }`}
          >
           <IoIosArrowBack size={20}/>
          </button>
        {/* </li> */}
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

        {/* <li> */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-700 text-white hover:bg-blue-800 hover:scale-105 cursor-pointer shadow-md"
            }`}
          >
          <IoIosArrowForward size={20}/>
          </button>
        {/* </li> */}
      {/* </ul> */}
    </div>
  );
};

export default Pagination;

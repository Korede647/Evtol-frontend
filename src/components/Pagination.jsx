import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postPerPage)
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="w-full h-13 flex justify-center pt-10 ml-200 gap-10 border">
  
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

 
    </div>
  );
};

export default Pagination;

import React, { useState } from "react";
import "./loadmedic.css";
import "../medication/medication.css";
import SideBar from "../../components/sidebar/SideBar";
import Pagination from "../../components/Pagination";

const LoadMedic = () => {
  const [loadedMedic, setLoadedMedic] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(2);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentMedic = loadedMedic.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (num) => {
    if (num >= 1 && num <= Math.ceil(evtol.length / postPerPage)) {
      setCurrentPage(num);
    }
  }

  return (
    <div className="medicMain">
      <SideBar />
      <div className="medic">
        <div className="medicHeader">All Loaded Medications</div>
        {currentMedic.length > 0 ? (
          <div className="medicCard">
            <div className="cardLoad">
              <p>
                Evtol Serial Number: <b>NDJEJEIDKKN</b>
              </p>
              <h4>Medications</h4>
              <div
                className="card"
                style={{
                  width: "325px",
                }}
              >
                <div className="image">
                  <img src="" alt="" />
                </div>
                <div className="medicText">
                  <p>
                    Name: <b>PARACETEMOLARMEET</b>
                  </p>
                  <p>
                    Code: <b>7082hdh-whduwj</b>
                  </p>
                  <p>
                    Weight: <b>54g</b>
                  </p>
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "325px",
                }}
              >
                <div className="image">
                  <img src="" alt="" />
                </div>
                <div className="medicText">
                  <p>
                    Name: <b>PARACETEMOLARMEET</b>
                  </p>
                  <p>
                    Code: <b>7082hdh-whduwj</b>
                  </p>
                  <p>
                    Weight: <b>54g</b>
                  </p>
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "325px",
                }}
              >
                <div className="image">
                  <img src="" alt="" />
                </div>
                <div className="medicText">
                  <p>
                    Name: <b>PARACETEMOLARMEET</b>
                  </p>
                  <p>
                    Code: <b>7082hdh-whduwj</b>
                  </p>
                  <p>
                    Weight: <b>54g</b>
                  </p>
                </div>
              </div>

            </div>

           <Pagination 
           postPerPage={postPerPage}
           totalPosts={loadedMedic.length}
           paginate={paginate}
           currentPage={currentPage}   
           />

          </div>
        ) : (
         /*<div className="w-80 h-50 gap-5"> */
          <p className="text-[14px] text-red-600 py-10">No Evtol has been loaded.</p>
          /* <button className="w-30 h-13 bg-blue-300 text-[13px] rounded-[5px] border border-violet-300 mx-4">Load an eVTOL?</button> */
          /* </div> */
        )}
      </div>
    </div>
  );
};

export default LoadMedic;

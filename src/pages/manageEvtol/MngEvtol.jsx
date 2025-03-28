import React, { useEffect, useState } from "react";
import "./mngEvtol.css";
import SideBar from "../../components/sidebar/SideBar";
import { VIEWALLEVTOL_URL } from "../../components/API_URL";
import axios from "axios";
import Pagination from "../../components/Pagination";

const MngEvtol = () => {
  const [evtol, setEvtol] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const Token = localStorage.getItem("Token")

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(VIEWALLEVTOL_URL, {
        headers: {
          Authorization: `Bearer ${Token}`
        }
      });
      if (response.status === 200) {
        setEvtol(response.data);
        console.log(response.data);
      } else {
        console.log(response.data.message);
        <p>Error Retrieving Evtol</p>;
      }
    };
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentEvtols = evtol.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (num) => setCurrentPage(num)
  const paginate = (num) => {
    if (num >= 1 && num <= Math.ceil(evtol.length / postPerPage)) {
      setCurrentPage(num);
    }
  };

  return (
    <div className="mngMain">
      <SideBar />
      <div className="mng">
        <div className="text">
          <h3>EVTOL Drones & their features</h3>
        </div>
        {currentEvtols.length > 0 ? (
          <div>
            <table className="tab">
              <tr className="thead">
                <th>Serial No</th>
                <th>Model</th>
                <th>Weight Limit</th>
                <th>Battery Capacity</th>
                <th>Status</th>
              </tr>
              <tbody>
                {currentEvtols.map((evtol) => (
                  <tr className="evtol">
                    <td>{evtol.serialNo}</td>
                    <td>{evtol.model}</td>
                    <td>{evtol.weightLimit}</td>
                    <td className = {
                      evtol.batteryCapacity <= 100 && evtol.batteryCapacity > 60
                      ? `text-green-600 font-bold`
                      : evtol.batteryCapacity < 60 && evtol.batteryCapacity > 40
                      ? `text-yellow-500 font-bold`
                      : `text-red-600 font-bold`
                    }>{evtol.batteryCapacity}%</td>
                    <td
                      className={
                        evtol.status === "IDLE"
                          ? `text-blue-800 font-bold`
                          : evtol.status === "LOADING"
                          ? `text-yellow-800 font-bold`
                          : evtol.status === "LOADED"
                          ? `text-red-600 font-bold`
                          : evtol.status === "DELIVERING"
                          ? `text-green-600 font-bold`
                          : evtol.status === "DELIVERED"
                          ? `text-purple-800 font-bold`
                          : `text-fuchisa-800 font-bold`
                      }
                    >
                      {evtol.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Pagination
              postPerPage={postPerPage}
              totalPosts={evtol.length}
              paginate={paginate}
              currentPage={currentPage}
              
            />
          </div>
        ) : (
          <p>No Evtols Found </p>
        )}
      </div>
    </div>
  );
};

export default MngEvtol;

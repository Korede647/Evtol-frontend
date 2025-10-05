import React, { useEffect, useState } from "react";
import "./loadmedic.css";
import "../medication/medication.css";
import SideBar from "../../components/sidebar/SideBar";
import Pagination from "../../components/Pagination";
import { LOADEDEVTOL_URL, LOADEDMEDICATION_URL } from "../../components/API_URL";
import axios from "axios";
import Swal from "sweetalert2";

const LoadMedic = () => {
  const [loadedEvtol, setLoadedEvtol] = useState([]); // Array of eVTOLs
  const [loadedMedic, setLoadedMedic] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(2);

  const Token = localStorage.getItem("Token");

  // Fetch eVTOLs
  useEffect(() => {
    const fetchLoadedEvtol = async () => {
      try {
        const response = await axios.get(LOADEDEVTOL_URL, {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        });

        if (response.status === 200) {
          setLoadedEvtol(response.data);
        }
      } catch (error) {
        console.log("Error fetching eVTOLs:", error);
        Swal.fire("Error", "Failed to fetch eVTOL data", "error");
      }
    };

    fetchLoadedEvtol();
  }, [Token]);

  // Fetch Medications AFTER eVTOLs are loaded
  useEffect(() => {
    if (loadedEvtol.length > 0) {
      const fetchLoadedMedications = async () => {
        try {
          const response = await axios.get(
            `${LOADEDMEDICATION_URL}/${loadedEvtol[0]?.serialNo}`, // Use the first eVTOL's serial number
            {
              headers: {
                Authorization: `Bearer ${Token}`,
              },
            }
          );

          if (response.status === 200) {
            setLoadedMedic(response.data);
          }
        } catch (error) {
          console.log("Error fetching medications:", error);
          Swal.fire("Error", "Failed to fetch medication data", "error");
        }
      };

      fetchLoadedMedications();
    }
  }, [loadedEvtol, Token]); // Depend on loadedEvtol

  // Pagination Logic
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentEvtol = loadedEvtol.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (num) => {
    if (num >= 1 && num <= Math.ceil(loadedEvtol.length / postPerPage)) {
      setCurrentPage(num);
    }
  };

  return (
    <div className="medicMain">
      <SideBar />
      <div className="medic">
        <div className="medicHeader">All Loaded Medications</div>
        {currentEvtol.length > 0 ? (
          <div className="medicCard">
            {currentEvtol.map((evtol) => (
              <div className="cardLoad" key={evtol.serialNo}>
                <p>
                  Evtol Serial Number: <b>{evtol.serialNo}</b>
                </p>
                <h4>Medications</h4>

                {loadedMedic.length > 0 ? (
                  loadedMedic.map((medic) => (
                    <div
                      className="card"
                      style={{ width: "325px" }}
                      key={medic.code}
                    >
                      <div className="image">
                        <img src={medic.image} alt={medic.name} />
                      </div>
                      <div className="medicText">
                        <p>
                          Name: <b>{medic.name}</b>
                        </p>
                        <p>
                          Code: <b>{medic.code}</b>
                        </p>
                        <p>
                          Weight: <b>{medic.weight}g</b>
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No Medications Loaded</p>
                )}
              </div>
            ))}

            <Pagination
              postPerPage={postPerPage}
              totalPosts={loadedEvtol.length}
              paginate={paginate}
              currentPage={currentPage}
              gap="100"
            />
          </div>
        ) : (
          <p className="text-[14px] text-red-600 py-10">
            No Evtol has been loaded.
          </p>
        )}
      </div>
    </div>
  );
};

export default LoadMedic;

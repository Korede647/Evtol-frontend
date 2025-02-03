import React from "react";
import "./dashboard.css";
import SideBar from "../../components/sidebar/SideBar";
import Evtol from "../../assets/Evtol.png";

const Dashboard = () => {
  return (
    <div className="dashMain">
      <SideBar />
      <div className="dash">
        <div className="firstTo">
          <h3>Welcome to the Evtol Management System</h3>
        </div>

        <div className="second">
          <div
            className="dashTexts"
            style={{
              borderTop: "solid 4px purple",
            }}
          >
            <h3>TOTAL EVTOLS</h3>
            <h1>25</h1>
          </div>
          <div
            className="dashTexts"
            style={{
              borderTop: "solid 4px skyblue",
            }}
          >
            <h3>AVAILABLE EVTOLS</h3>
            <h1>20</h1>
          </div>
          <div
            className="dashTexts"
            style={{
              borderTop: "solid 4px limegreen",
            }}
          >
            <h3>LOADED EVTOLS</h3>
            <h1>5</h1>
          </div>
          <div
            className="dashTexts"
            style={{
              borderTop: "solid 4px gold",
            }}
          >
            <h3>MEDICATIONS</h3>
            <h1>15</h1>
          </div>
        </div>

        <div className="first">
          <div className="dashText">
            <h2>New Evtol</h2>
          </div>
          <div className="dashImg">
            <img src={Evtol} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

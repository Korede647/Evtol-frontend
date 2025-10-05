import React, { useEffect, useState } from "react";
import "./dashboard.css";
import SideBar from "../../components/sidebar/SideBar";
import Evtol from "../../assets/Evtol.png";
import { 
  AVAILABLEVTOL_URL, 
  LOADEDEVTOL_URL, 
  MEDICATIONS_URL, 
  VIEWALLEVTOL_URL 
} from "../../components/API_URL";
import axios from "axios";

// Import chart components and register necessary chart.js components
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  layouts
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Dashboard = () => {
  const [evtol, setEvtol] = useState([]);
  const [medications, setMedications] = useState([]);
  const [available, setAvailable] = useState([]);
  const [loadedEvtol, setLoadedEvtol] = useState([]);
  const Token = localStorage.getItem("Token");

  useEffect(() => {
    const fetchEvtol = async () => {
      try {
        const response = await axios.get(VIEWALLEVTOL_URL, {
          headers: { Authorization: `Bearer ${Token}` },
        });
        if (response.status === 200) {
          setEvtol(response.data);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchMedics = async () => {
      try {
        const response = await axios.get(MEDICATIONS_URL, {
          headers: { Authorization: `Bearer ${Token}` },
        });
        if (response.status === 200) {
          setMedications(response.data.medics);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAvailableEvtol = async () => {
      try {
        const response = await axios.get(AVAILABLEVTOL_URL, {
          headers: { Authorization: `Bearer ${Token}` },
        });
        if (response.status === 200) {
          setAvailable(response.data);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const fetchLoadedEvtol = async () => {
      try {
        const response = await axios.get(LOADEDEVTOL_URL, {
          headers: { Authorization: `Bearer ${Token}` },
        });
        if (response.status === 200) {
          setLoadedEvtol(response.data);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvtol();
    fetchMedics();
    fetchAvailableEvtol();
    fetchLoadedEvtol();
  }, [Token]);

  // Prepare data for the chart
  const chartData = {
    labels: ["Total EVTOLs", "Available EVTOLs", "Loaded EVTOLs", "Medications"],
    datasets: [
      {
        label: "Analytics",
        data: [evtol.length, available.length, loadedEvtol.length, medications.length],
        backgroundColor: ["purple", "skyblue", "green", "blue"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "EVTOL Management Overview",
      },
    },
  };

  const pieChartData = {
    labels: ["Total EVTOLs", "Available EVTOLs", "Loaded EVTOLs", "Medications"],
    datasets: [
      {
        label: "Distribution",
        data: [evtol.length, available.length, loadedEvtol.length, medications.length],
        backgroundColor: ["purple", "skyblue", "green", "blue"],
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to fill its container
    layout: {
      padding:{
        right: 0,
        left: 0
      }
    },
    plugins: {
      legend: { 
        // display: false,
        position: "right",
        labels: {
          padding: 7
        }
       },
      title: {
        display: true,
        text: "Distribution Overview",
        position: "left"
      },
    },
  };

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
            style={{ borderTop: "solid 4px purple" }}
          >
            <h3>TOTAL EVTOLS</h3>
            <h1>{evtol.length}</h1>
          </div>
          <div
            className="dashTexts"
            style={{ borderTop: "solid 4px skyblue" }}
          >
            <h3>AVAILABLE EVTOLS</h3>
            <h1>{available.length}</h1>
          </div>
          <div
            className="dashTexts"
            style={{ borderTop: "solid 4px limegreen" }}
          >
            <h3>LOADED EVTOLS</h3>
            <h1>{loadedEvtol.length}</h1>
          </div>
          <div
            className="dashTexts"
            style={{ borderTop: "solid 4px blue" }}
          >
            <h3>MEDICATIONS</h3>
            <h1>{medications.length}</h1>
          </div>
        </div>

        <div className="first">
          <div className="dashText">
          <div className="chartContainer" style={{ width: "100%", height: "400px" }}>
              <Bar data={chartData} options={chartOptions} />
            </div>
         
          </div>
          <div className="dashImg">
          <div className="chartContain" style={{ width: "100%", height: "45%" }}>
              <Pie data={pieChartData} options={pieChartOptions} />
            </div>
            <img src={Evtol} alt="New Evtol" />
          </div>
        </div>

        {/* Render the chart */}
        
      </div>
    </div>
  );
};

export default Dashboard;

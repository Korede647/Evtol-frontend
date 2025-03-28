// import React, { useState, useEffect } from "react";
// import SideBar from "../../components/sidebar/SideBar";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";
// import axios from "axios";
// import { AVAILABLEVTOL_URL, LOADEDEVTOL_URL, VIEWALLEVTOL_URL } from "../../components/API_URL";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// const BatteryLog = () => {
//   const [evtol, setEvtol] = useState([]);
//   const [available, setAvailable] = useState([]);
//   const [loadedEvtol, setLoadedEvtol] = useState([]);

//   const calculateAverageBatteryCapacity = (data) => {
//     if (!data.length) return 0;
//     const totalCapacity = data.reduce((sum, item) => sum + (item.batteryCapacity || 0), 0);
//     return totalCapacity / data.length;
//   };

//   useEffect(() => {
//     const Token = localStorage.getItem("Token");

//     const fetchData = async (url, setState) => {
//       try {
//         const response = await axios.get(url, {
//           headers: { Authorization: `Bearer ${Token}` },
//         });
//         if (response.status === 200) {
//           setState(response.data);
//         } else {
//           console.error(response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData(VIEWALLEVTOL_URL, setEvtol);
//     fetchData(AVAILABLEVTOL_URL, setAvailable);
//     fetchData(LOADEDEVTOL_URL, setLoadedEvtol);
//   }, []);

//   const chartData = {
//     labels: ["EVTOLs Capacity", "Available EVTOLs Capacity", "Loaded EVTOLs Capacity"],
//     datasets: [
//       {
//         label: "Battery Logs",
//         data: [
//           calculateAverageBatteryCapacity(evtol),
//           calculateAverageBatteryCapacity(available),
//           calculateAverageBatteryCapacity(loadedEvtol),
//         ],
//         backgroundColor: ["purple", "blue", "green"],
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: "top" },
//       title: {
//         display: true,
//         text: "EVTOL Battery Capacity Overview",
//       },
//     },
//   };

//   return (
//     <div className="w-full flex h-full">
//       <SideBar />
//       <div className="w-275 h-auto bg-blue-100 px-30 py-30">
//         
//       </div>
//     </div>
//   );
// };

// export default BatteryLog;



import React, { useState, useEffect } from "react";
import SideBar from "../../components/sidebar/SideBar";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { AVAILABLEVTOL_URL, LOADEDEVTOL_URL, VIEWALLEVTOL_URL } from "../../components/API_URL";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const BatteryLog = () => {
  const [evtol, setEvtol] = useState([]);
  const [available, setAvailable] = useState([]);
  const [loadedEvtol, setLoadedEvtol] = useState([]);

  const calculateAverageBatteryCapacity = (data) => {
    if (!data.length) return 0;
    const totalCapacity = data.reduce((sum, item) => sum + (item.batteryCapacity || 0), 0);
    return totalCapacity / data.length;
  };

  useEffect(() => {
    const Token = localStorage.getItem("Token");

    const fetchData = async (url, setState) => {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${Token}` },
        });
        if (response.status === 200) {
          setState(response.data);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(VIEWALLEVTOL_URL, setEvtol);
    fetchData(AVAILABLEVTOL_URL, setAvailable);
    fetchData(LOADEDEVTOL_URL, setLoadedEvtol);
  }, []);

  // const chartData = {
  //       labels: ["EVTOLs Capacity", "Available EVTOLs Capacity", "Loaded EVTOLs Capacity"],
  //       datasets: [
  //         {
  //           label: "Battery Logs",
  //           data: [
  //             calculateAverageBatteryCapacity(evtol),
  //             calculateAverageBatteryCapacity(available),
  //             calculateAverageBatteryCapacity(loadedEvtol),
  //           ],
  //           backgroundColor: ["purple", "blue", "green"],
  //         },
  //       ],
  //     };
    
  //     const chartOptions = {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: { position: "top" },
  //         title: {
  //           display: true,
  //           text: "EVTOL Battery Capacity Overview",
  //         },
  //       },
  //     };

  const chartDataLine = {
    labels: ["EVTOLs Capacity", "Available EVTOLs Capacity", "Loaded EVTOLs Capacity"],
    datasets: [
      {
        label: "Battery Logs",
        data: [
          calculateAverageBatteryCapacity(evtol),
          calculateAverageBatteryCapacity(available),
          calculateAverageBatteryCapacity(loadedEvtol),
        ],
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color (creates area effect)
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        tension: 0.4, // Makes it slightly curved
        fill: true, // Enables the area chart effect
      },
    ],
  };

  const chartOptionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "EVTOL Battery Capacity Overview",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full flex h-full">
      <SideBar />
      <div className="w-275 h-auto bg-blue-100 px-30 py-30">
        <Line data={chartDataLine} options={chartOptionsLine} />
        {/* <Bar data={chartData} options={chartOptions} /> */}
      </div>
    </div>
  );
};

export default BatteryLog;

import { Link } from "react-router-dom";
import NavLogin from "./account/NavLogin.js";
import Modal from "./dash/Allocate.js";
import SideBar from "./dash/SideBar.js";
import { useState } from "react";
import UserSettings from "./dash/UserSettings.js";
import GoalSettings from "./dash/GoalSettings.js";

const Goal = ({ name, goalAmount, type, onClick }) => {
  let currentAmount = 0; // Placeholder for actual current amount logic
  if (currentAmount > goalAmount) currentAmount = goalAmount;
  let percent = 0;
  if (currentAmount > 0 && goalAmount > 0) percent = (currentAmount / goalAmount) * 100;
  let imageSrc = getGoalImage(type, percent);

  return (
    <div
      onClick={onClick}
      className="bg-[#eef3e1] shadow-md rounded-2xl p-4 m-2 min-w-40 min-h-40 max-w-76 max-h-xl flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <div>
        <img src={imageSrc} alt={`${type} goal phase`} className="w-full h-44 object-contain mb-2" />
        <h3 className="text-xl font-semibold text-green-800">{name}</h3>
        <p className="text-gray-600">Amount Saved: ${currentAmount}</p>
        <p className="text-gray-600">Goal: ${goalAmount}</p>
      </div>
    </div>
  );
};

const getGoalImage = (type, percent) => {
  if (type === "R") {
    if (percent >= 60) return "/goals/R3.png";
    if (percent >= 30) return "/goals/R2.png";
    return "/goals/R1.png";
  } else if (type === "S") {
    if (percent >= 60) return "/goals/S3.png";
    if (percent >= 30) return "/goals/S2.png";
    return "/goals/S1.png";
  } else if (type === "C") {
    if (percent >= 60) return "/goals/C3.png";
    if (percent >= 30) return "/goals/C2.png";
    return "/goals/C1.png";
  }
  return "/goals/R1.png"; // default
};

export default function Dashboard() {
  const savings_amount = 1000; // Replace with actual dynamic data
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleGoalClick = (goalName) => {
    console.log("Goal clicked:", goalName);
    // Implement navigation or opening goal settings
  };

  return (
    <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
      {/* Navbar */}
      <NavLogin />

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-4xl mx-auto bg-[#f5f7e9] p-8 rounded-2xl shadow-md border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-green-700">
                Total Savings: ${savings_amount}
              </h1>
              <Link
                to="/goal-create"
                className="text-lg text-gray-500 underline"
              >
                + Create New Goal
              </Link>
            </div>

            {/* Allocate Funds Section */}
            <div className="p-6 border border-gray-200 rounded-2xl bg-[#f9f9f3] shadow-md mb-8">
              <h2 className="font-semibold text-xl text-gray-800 mb-4">Goals & Funds</h2>
              <button
                onClick={openModal}
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
              >
                Allocate Funds
              </button>

              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-2xl font-bold mb-4">Allocate Funds</h2>
                <p className="text-gray-700">This is the content of the modal.</p>
              </Modal>
            </div>

            {/* Goals List */}
            <div className="flex flex-wrap gap-4">
              <Goal name="Goal 1" goalAmount={500} type="R" onClick={() => handleGoalClick("Goal 1")} />
              <Goal name="Buy Soil" goalAmount={300} type="S" onClick={() => handleGoalClick("Buy Soil")} />
              <Goal name="Water System" goalAmount={200} type="C" onClick={() => handleGoalClick("Water System")} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

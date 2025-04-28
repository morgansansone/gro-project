
import { Link } from "react-router-dom";
import NavLogin from "./account/NavLogin.js";
import Modal from "./dash/Allocate.js";
import SideBar from "./dash/SideBar.js";
import { useState } from "react";
import UserSettings from "./dash/UserSettings.js";
import GoalSettings from "./dash/GoalSettings.js";

const Goal = ({ name, goalAmount, type, priority, onClick }) => {
  let currentAmount = 0;
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
  let savings_amount = 1000; // example saving amount, connect with data

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGoalSettingsOpen, setIsGoalSettingsOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleGoalClick = (goal) => {
    setSelectedGoal(goal);
    setIsGoalSettingsOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeGoalSettings = () => {
    setIsGoalSettingsOpen(false);
  };

  const openGoalSettings = () => {
    setIsGoalSettingsOpen(true);
  };

  const [goals, setGoals] = useState([
    { name: "Fart", goalAmount: 500, type: "R" },
    { name: "College Savings", goalAmount: 300, type: "S" },
    { name: "Emergency Fund", goalAmount: 200, type: "C" }
  ]);
  
  return (
    <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
      {/* Navbar */}
      <NavLogin />

      {/* Sidebar + Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <SideBar />

        {/* dash */}
        <main className="flex p-6">
          <div className="w-[950px]">
          <div className="flex justify-between items-baseline w-full mb-2">
              <div className="text-3xl  text-[#274A21] float-left m-10">Total Savings: ${savings_amount}</div>
              <Link to='/goal-create'><a href='#' className="text-lg float-right text-gray-500 underline">+ Create New Goal</a></Link>
          </div>
        {/* Goals Section */}
          <div className="bg-[#f5f7e9] p-6 w-auto rounded-lg shadow-md flex justify-between overflow-x-scroll">
            <div className="bg-[#f5f7e9] p-6 w-auto rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={openModal}
                  className="bg-[#5DB151] text-white px-4 py-2 rounded-lg max-w-40 max-h-20 text-m"
                >
                  Allocate Funds
                </button>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <h2>Modal Title</h2>
                  <p>This is the content of the modal.</p>
                </Modal>
              </div>

              <div className="flex flex-wrap gap-4">
              {goals.map((goal, index) => (
                <Goal
                  key={index}
                  name={goal.name}
                  goalAmount={goal.goalAmount}
                  type={goal.type}
                  onClick={() => handleGoalClick(goal)} // ✅ Use the real goal
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    {/* Goal Settings Modal */}
    <GoalSettings
      isOpen={isGoalSettingsOpen}
      onClose={closeGoalSettings}
      goal={selectedGoal}
    />
  </div>
);
}

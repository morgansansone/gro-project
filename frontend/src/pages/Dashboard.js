import { useState } from "react";
import { Link } from "react-router-dom";
import NavLogin from "./account/NavLogin.js";
import Modal from "./dash/Allocate.js";
import GoalSettings from "./GoalSettings.js";

const Goal = ({ name, goalAmount, type, priority, onClick }) => {
  let currentAmount = 0;
  if (currentAmount > goalAmount) currentAmount = goalAmount;
  let percent = 0;
  if (currentAmount > 0 && goalAmount > 0) percent = currentAmount / goalAmount * 100;
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
  let image = "";
  if (type == "R")
    if (percent >= 60) image = "/goals/R3.png";
    else if (percent >= 30) image = "/goals/R2.png";
    else image = "/goals/R1.png";
  else if (type == "S")
    if (percent >= 60) image = "/goals/S3.png";
    else if (percent >= 30) image = "/goals/S2.png";
    else image = "/goals/S1.png";
  else if (type == "C")
    if (percent >= 60) image = "/goals/C3.png";
    else if (percent >= 30) image = "/goals/C2.png";
    else image = "/goals/C1.png";  
  else image = "/goals/R1.png";
  return image; 
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
    <div className="h-screen bg-[#f8faf3]">      
        {/* Topbar */}      
      <NavLogin />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-36 bg-[#e0edd9] p-4 space-y-4 h-48 rounded-xl float-left">
          <nav className="space-y-3">
            <Link to="/goal-create" className="block text-gray-700 hover:text-green-600">
              New Goal
            </Link>
            <Link to="/dashboard-plants" className="block text-gray-700 hover:text-green-600">
              Plants
            </Link>
            <Link to="/bank-settings" className="block text-gray-700 hover:text-green-600">
              Bank Settings
            </Link>
            <Link to="/learn-more" className="block text-gray-700 hover:text-green-600">
              Learn More
            </Link>
          </nav>
        </aside>

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
                <GoalSettings
                  isOpen={isGoalSettingsOpen}
                  onClose={closeGoalSettings}
                  goal={selectedGoal}
                />
              </div>
            </div>
          </div>
          </div>
        </main>
        </div>
    </div>
  );
}

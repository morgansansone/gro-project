import { useState } from "react";
import { Link } from "react-router-dom";
import NavLogin from "./account/NavLogin.js";
import Modal from "./dash/Allocate.js";
import UserSettings from "./dash/UserSettings.js";
import GoalSettings from "./dash/GoalSettings.js";

const Goal = ({ name, amount, percent, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-[#eef3e1] shadow-md rounded-2xl p-4 m-2 w-64 h-40 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <div>
        <h3 className="text-xl font-semibold text-green-800">{name}</h3>
        <p className="text-gray-600">Goal: ${amount}</p>
      </div>
      <p className="text-sm text-gray-500 mt-1">{percent}% complete</p>
    </div>
  );
};

export default function Dashboard() {

 const savings_amount = 1000; // example saving amount, connect with data
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleGoalClick = (goalName) => {
    console.log("Goal clicked:", goalName);
    // Placeholder: implement navigation or modal here
  };
  
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
          <div className="bg-[#f5f7e9] p-6 w-auto rounded-lg shadow-md flex justify-between">
            <div className="bg-[#f5f7e9] p-6 w-auto rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={openModal}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg w-40 h-12 text-sm font-semibold"
                >
                  Allocate Funds
                </button>

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <h2>Modal Title</h2>
                  <p>This is the content of the modal.</p>
                </Modal>
              </div>

              <div className="flex flex-wrap gap-4">
                <Goal name="Plant a Tree" amount={500} percent={50} />
                <Goal name="Buy Soil" amount={300} percent={75} />
                <Goal name="Water System" amount={200} percent={20} />
              </div>
            </div>
          </div>
          </div>
        </main>
        </div>
    </div>
  );
}
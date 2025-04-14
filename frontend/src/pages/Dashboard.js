import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavLogin.js";
import GoalCreate from "./GoalCreate.js";
import Modal from "./Allocate.js";
import UserSettings from "./UserSettings.js";
import GoalSettings from "./GoalSettings.js";

export default function Dashboard() {
  const savings_amount = 1000; // example saving amount, connect with data
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen bg-[#FBFCF7]">      
        {/* Topbar */}      
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-36 bg-[#f0f4e3] p-4 space-y-4 h-48 rounded-xl float-left">
          <nav className="space-y-3">
            <Link to='/GoalCreate'><a href="#" className="block text-gray-700">New Goal</a></Link>
            <a href="#" className="block text-gray-700">Plants</a>
            <a href="#" className="block text-gray-700">Bank Settings</a>
            <a href="#" className="block text-gray-700">Learn More</a>
          </nav>
        </aside>

        {/* dash */}
        <main className="flex p-6">
          <div className="w-[950px]">
          <div className="flex justify-between items-baseline w-full mb-2">
              <div className="text-3xl  text-[#274A21] float-left m-10">Total Savings: ${savings_amount}</div>
              <Link to='/GoalCreate'><a href='#' className="text-lg float-right text-gray-500 underline">+ Create New Goal</a></Link>
          </div>
        {/* Goals Section */}
          <div className="bg-[#f5f7e9] p-6 w-auto rounded-lg shadow-md flex justify-between">
            <div>
            <button onClick={openModal} className="bg-green-500 text-white px-3 py-1 rounded-lg w-auto h-8"> Allocate Funds</button>

              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
              </Modal>
            </div>
            <div className="flex overflow-scroll justify-evenly w-full">

            </div>
          </div>
          </div>
        </main>
        </div>
    </div>
  );
}
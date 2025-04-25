import { useState } from "react";
import { Link } from "react-router-dom";
import NavLogin from "./account/NavLogin.js";
import Modal from "./dash/Allocate.js";
import SideBar from "./dash/SideBar.js";

export default function Dashboard() {
  const savings_amount = 1000; // Replace with actual dynamic data
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

            <div className="p-6 border border-gray-200 rounded-2xl bg-[#f9f9f3] shadow-md mb-8">
              <h2 className="font-semibold text-xl text-gray-800 mb-4">Goals & Funds</h2>
              <button
                onClick={openModal}
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
              >
                Allocate Funds
              </button>

              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
              </Modal>
            </div>

            {/* Placeholder for goals */}
            <div className="p-6 border border-dashed border-gray-300 rounded-2xl bg-[#f9f9f3] text-gray-500 flex items-center justify-center shadow-md">
              Your goals will show up here...
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

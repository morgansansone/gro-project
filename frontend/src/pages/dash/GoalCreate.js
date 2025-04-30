
import NavLogin from "../account/NavLogin.js";
import SideBar from "./SideBar.js";
import React from 'react';

const PriorityButton = ({ label, onClick, selected }) => {
    return (
        <button
            onClick={onClick}
            className={`w-[45px] h-[45px] rounded-full flex items-center justify-center text-[30px] leading-none
            text-red-600 transition-colors duration-200
            ${selected ? "bg-[#b9b8a7]" : "bg-[#E9E7D4] hover:bg-[#b9b8a7]"}`}
            title={label}
        >
            {label}
        </button>
    );
  };

export default function GoalCreate() {
    const [selectedPlant, setSelectedPlant] = React.useState(null);
    const [selectedPriority, setSelectedPriority] = React.useState(null);

    const handlePlantSelect = (plant) => {
        setSelectedPlant(plant);
    };

    const plantOptions = ["Sunflower", "Cactus", "Rose"];
    
    return (
        <div className="min-h-screen bg-[#FBFCF7] flex flex-col">
            {/* Navbar */}
            <NavLogin />
            {/* Sidebar + Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <SideBar />

                {/* Main Form Area */}
                <main className="flex-1 p-8 overflow-auto">
                    <div className="max-w-4xl mx-auto bg-[#f5f7e9] p-8 rounded-2xl shadow-md border border-gray-200">
                        <h1 className="text-3xl font-bold text-green-700 mb-8">Create a New Goal</h1>

                        {/* Goal Name + Priority */}
                        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full">
                                <label className="text-xl font-medium">Goal Name:</label>
                                <input
                                    type="text"
                                    className="flex-1 border border-gray-300 bg-gray-50 rounded-md p-2 w-full lg:w-auto"
                                    placeholder="Enter your goal"
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                                <label className="text-xl font-medium">Priority:</label>
                                <div className="flex gap-2">
                                    {["!", "!!", "!!!"].map((label) => (
                                        <PriorityButton
                                            key={label}
                                            label={label}
                                            selected={selectedPriority === label}
                                            onClick={() => handlePrioritySelect(label)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Goal Amount + Plant */}
                        <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium">Goal Amount:</label>
                                <input
                                    type="number"
                                    className="border border-gray-300 rounded-md p-2 w-40"
                                    placeholder="$0.00"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-medium">Choose a Plant:</label>
                                <div className="flex gap-4">
                                    {plantOptions.map((plant) => (
                                        <button
                                            key={plant}
                                            onClick={() => handlePlantSelect(plant)}
                                            className={`px-4 py-2 rounded-lg border transition ${
                                                selectedPlant === plant
                                                    ? "bg-green-300 border-green-600"
                                                    : "bg-[#f9f9f3] border-gray-300 hover:bg-gray-100"
                                            }`}
                                        >
                                            {plant}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-right">
                            <button className="bg-[#5DB151] text-white px-6 py-2 rounded-lg hover:bg-[#4a8c41] transition">
                                Create Goal
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
